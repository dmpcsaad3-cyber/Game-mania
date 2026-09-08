import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GameLevel, GameObject, GameObjectType, WeatherType } from '../types/game';
import { soundEngine } from '../utils/audioSynthesizer';

interface ThreeCanvasProps {
  level: GameLevel;
  mode: 'build' | 'play';
  selectedObjectId: string | null;
  onSelectObject: (id: string | null) => void;
  onUpdateObject: (updated: GameObject) => void;
  onAddObjectAtPosition?: (pos: [number, number, number]) => void;
  onClueDiscovered: (title: string, desc: string) => void;
  onCoinsCollected: (count: number) => void;
  onEnemyDefeated: (enemyId: string) => void;
  onLevelComplete: () => void;
  onGameOver: () => void;
  playerHp: number;
  onPlayerDamage: (amount: number) => void;
  touchInput: {
    moveX: number;
    moveZ: number;
    isJumping: boolean;
    isAttacking: boolean;
    isDashing: boolean;
    isCrouching: boolean;
    isGripping: boolean;
    isInteracting: boolean;
  };
  companionSpeech: string | null;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  level,
  mode,
  selectedObjectId,
  onSelectObject,
  onUpdateObject,
  onClueDiscovered,
  onCoinsCollected,
  onEnemyDefeated,
  onLevelComplete,
  onGameOver,
  playerHp,
  onPlayerDamage,
  touchInput,
  companionSpeech
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Mesh registries for fast update
  const objectMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const playerGroupRef = useRef<THREE.Group | null>(null);
  const companionGroupRef = useRef<THREE.Group | null>(null);
  const weatherParticlesRef = useRef<THREE.Points | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const gridHelperRef = useRef<THREE.GridHelper | null>(null);

  // Player physics and gameplay state
  const playerStateRef = useRef({
    pos: new THREE.Vector3(...level.playerSpawn),
    vel: new THREE.Vector3(0, 0, 0),
    isGrounded: false,
    isDashing: false,
    dashTimer: 0,
    isAttacking: false,
    attackTimer: 0,
    isGripping: false,
    isCrouching: false,
    collectedItems: new Set<string>(),
    rotationY: 0,
  });

  // Build mode camera orbit state
  const buildCameraState = useRef({
    distance: 24,
    theta: Math.PI / 4,
    phi: Math.PI / 3,
    target: new THREE.Vector3(0, 3, 0),
    isDragging: false,
    dragButton: 0,
    lastMouseX: 0,
    lastMouseY: 0,
  });

  // Keys state for desktop play mode
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // 1. Initialize Scene & Renderer
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.set(0, 15, 25);
    camera.lookAt(0, 3, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    // Directional Sun Light
    const sunLight = new THREE.DirectionalLight(0xfffaed, 1.4);
    sunLight.position.set(20, 40, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 150;
    const shadowD = 35;
    sunLight.shadow.camera.left = -shadowD;
    sunLight.shadow.camera.right = shadowD;
    sunLight.shadow.camera.top = shadowD;
    sunLight.shadow.camera.bottom = -shadowD;
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // Build Grid helper
    const grid = new THREE.GridHelper(60, 60, 0x4cc9f0, 0x3a0ca3);
    grid.position.y = -0.01;
    scene.add(grid);
    gridHelperRef.current = grid;

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newW / newH;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(containerRef.current);

    // Keyboard listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;
      if (e.code === 'KeyF') {
        playerStateRef.current.isAttacking = true;
        playerStateRef.current.attackTimer = 0.3;
        soundEngine.playAttack();
      }
      if (e.code === 'Space' && playerStateRef.current.isGrounded) {
        soundEngine.playJump();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      soundEngine.toggleRainAmbient(false);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  // 2. Apply Environmental Lighting & Weather
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Sky Background color & Fog based on weather
    let skyHex = 0x1a202c;
    let fogHex = 0x1a202c;
    let fogDensity = level.fogDensity || 0.02;
    let sunIntensity = 1.2;
    let sunHex = 0xfffaed;
    let ambientIntensity = 0.8;
    let hasRain = false;
    let hasSnow = false;

    switch (level.weather) {
      case 'clear_day':
        skyHex = 0x87ceeb;
        fogHex = 0xc5e3f6;
        sunIntensity = 1.6;
        sunHex = 0xfff3a0;
        ambientIntensity = 0.9;
        break;
      case 'golden_hour':
        skyHex = 0xff7b00;
        fogHex = 0xffaa5a;
        sunIntensity = 1.4;
        sunHex = 0xffb703;
        ambientIntensity = 0.8;
        break;
      case 'neon_night':
        skyHex = 0x070b19;
        fogHex = 0x101735;
        fogDensity = 0.025;
        sunIntensity = 0.6;
        sunHex = 0x00f0ff;
        ambientIntensity = 0.6;
        break;
      case 'rain_storm':
        skyHex = 0x1e293b;
        fogHex = 0x334155;
        fogDensity = 0.038;
        sunIntensity = 0.7;
        sunHex = 0x94a3b8;
        ambientIntensity = 0.6;
        hasRain = true;
        break;
      case 'heavy_snow':
        skyHex = 0xdbeafe;
        fogHex = 0xe2e8f0;
        fogDensity = 0.03;
        sunIntensity = 1.1;
        sunHex = 0xffffff;
        ambientIntensity = 0.85;
        hasSnow = true;
        break;
      case 'mystery_fog':
        skyHex = 0x18181b;
        fogHex = 0x27272a;
        fogDensity = 0.055;
        sunIntensity = 0.5;
        sunHex = 0xa1a1aa;
        ambientIntensity = 0.5;
        break;
      case 'crimson_twilight':
        skyHex = 0x4a0e17;
        fogHex = 0x800f2f;
        sunIntensity = 1.0;
        sunHex = 0xff4d6d;
        ambientIntensity = 0.7;
        break;
    }

    scene.background = new THREE.Color(skyHex);
    scene.fog = new THREE.FogExp2(fogHex, fogDensity);

    if (sunLightRef.current) {
      sunLightRef.current.color = new THREE.Color(sunHex);
      sunLightRef.current.intensity = sunIntensity;
    }
    if (ambientLightRef.current) {
      ambientLightRef.current.color = new THREE.Color(level.ambientLightColor || '#ffffff');
      ambientLightRef.current.intensity = ambientIntensity;
    }

    // Weather ambient sound
    soundEngine.toggleRainAmbient(hasRain);

    // Weather particles
    if (weatherParticlesRef.current) {
      scene.remove(weatherParticlesRef.current);
      weatherParticlesRef.current.geometry.dispose();
      weatherParticlesRef.current = null;
    }

    if (hasRain || hasSnow) {
      const particleCount = hasRain ? 2500 : 1800;
      const geom = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 1] = Math.random() * 40;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      }
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        color: hasRain ? 0x93c5fd : 0xffffff,
        size: hasRain ? 0.22 : 0.35,
        transparent: true,
        opacity: hasRain ? 0.6 : 0.85,
      });

      const particles = new THREE.Points(geom, mat);
      scene.add(particles);
      weatherParticlesRef.current = particles;
    }
  }, [level.weather, level.fogDensity, level.ambientLightColor]);

  // 3. Build Characters (Player & Companion)
  const buildPlayerMesh = useCallback(() => {
    const group = new THREE.Group();

    // Stylized hero body
    const bodyGeom = new THREE.CylinderGeometry(0.35, 0.28, 0.9, 12);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4 });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.y = 0.85;
    body.castShadow = true;
    group.add(body);

    // Head
    const headGeom = new THREE.SphereGeometry(0.32, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffd1b3, roughness: 0.5 });
    const head = new THREE.Mesh(headGeom, headMat);
    head.position.y = 1.5;
    head.castShadow = true;
    group.add(head);

    // Hair / visor
    const hairGeom = new THREE.BoxGeometry(0.68, 0.25, 0.65);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const hair = new THREE.Mesh(hairGeom, hairMat);
    hair.position.set(0, 1.68, -0.05);
    group.add(hair);

    // Glowing belt / scanner
    const beltGeom = new THREE.TorusGeometry(0.38, 0.05, 8, 24);
    const beltMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const belt = new THREE.Mesh(beltGeom, beltMat);
    belt.rotation.x = Math.PI / 2;
    belt.position.y = 0.5;
    group.add(belt);

    // Arms
    const armGeom = new THREE.CapsuleGeometry(0.1, 0.45, 4, 8);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8 });
    const leftArm = new THREE.Mesh(armGeom, armMat);
    leftArm.position.set(-0.48, 0.85, 0);
    leftArm.name = 'leftArm';
    group.add(leftArm);

    const rightArm = new THREE.Mesh(armGeom, armMat);
    rightArm.position.set(0.48, 0.85, 0);
    rightArm.name = 'rightArm';
    group.add(rightArm);

    // Legs
    const legGeom = new THREE.CapsuleGeometry(0.12, 0.5, 4, 8);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x0f172a });
    const leftLeg = new THREE.Mesh(legGeom, legMat);
    leftLeg.position.set(-0.2, 0.35, 0);
    leftLeg.name = 'leftLeg';
    group.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeom, legMat);
    rightLeg.position.set(0.2, 0.35, 0);
    rightLeg.name = 'rightLeg';
    group.add(rightLeg);

    return group;
  }, []);

  const buildCompanionMesh = useCallback((config: GameLevel['companion']) => {
    const group = new THREE.Group();

    // Body with customized outfit color
    const bodyGeom = new THREE.CylinderGeometry(0.3, 0.24, 0.85, 12);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.outfitColor || '#2b2d42'),
      roughness: 0.35
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.y = 0.8;
    body.castShadow = true;
    group.add(body);

    // Head with customized skin tone
    const headGeom = new THREE.SphereGeometry(0.3, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.skinTone || '#f5d0b5'),
      roughness: 0.5
    });
    const head = new THREE.Mesh(headGeom, headMat);
    head.position.y = 1.42;
    head.castShadow = true;
    group.add(head);

    // Hair with customized style and color
    const hairMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.hairColor || '#1e1b18'),
      roughness: 0.6
    });

    if (config.hairStyle === 'bob') {
      const bobGeom = new THREE.SphereGeometry(0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.65);
      const bob = new THREE.Mesh(bobGeom, hairMat);
      bob.position.set(0, 1.48, 0);
      group.add(bob);
    } else if (config.hairStyle === 'ponytail') {
      const topGeom = new THREE.SphereGeometry(0.33, 16, 16);
      const top = new THREE.Mesh(topGeom, hairMat);
      top.position.set(0, 1.48, 0);
      group.add(top);
      const tailGeom = new THREE.ConeGeometry(0.12, 0.45, 8);
      const tail = new THREE.Mesh(tailGeom, hairMat);
      tail.position.set(0, 1.4, -0.35);
      tail.rotation.x = -Math.PI / 3;
      group.add(tail);
    } else {
      const hairGeom = new THREE.BoxGeometry(0.65, 0.35, 0.65);
      const hairMesh = new THREE.Mesh(hairGeom, hairMat);
      hairMesh.position.set(0, 1.55, 0);
      group.add(hairMesh);
    }

    // Role Accent Badge / Scarf / Holster
    const badgeGeom = new THREE.TorusGeometry(0.32, 0.04, 6, 16);
    const badgeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(config.accentColor || '#d90429')
    });
    const badge = new THREE.Mesh(badgeGeom, badgeMat);
    badge.position.set(0, 0.95, 0);
    badge.rotation.x = Math.PI / 2;
    group.add(badge);

    // Friendly floating beacon halo
    const haloGeom = new THREE.RingGeometry(0.2, 0.28, 16);
    const haloMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(config.accentColor || '#00f0ff'),
      side: THREE.DoubleSide
    });
    const halo = new THREE.Mesh(haloGeom, haloMat);
    halo.position.set(0, 1.9, 0);
    halo.rotation.x = Math.PI / 2;
    group.add(halo);

    return group;
  }, []);

  // Update Player & Companion when level changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (playerGroupRef.current) {
      scene.remove(playerGroupRef.current);
    }
    const newPlayer = buildPlayerMesh();
    newPlayer.position.set(...level.playerSpawn);
    scene.add(newPlayer);
    playerGroupRef.current = newPlayer;
    playerStateRef.current.pos.set(...level.playerSpawn);
    playerStateRef.current.vel.set(0, 0, 0);

    if (companionGroupRef.current) {
      scene.remove(companionGroupRef.current);
    }
    const newCompanion = buildCompanionMesh(level.companion);
    newCompanion.position.set(level.playerSpawn[0] + 1.8, level.playerSpawn[1], level.playerSpawn[2] + 1);
    scene.add(newCompanion);
    companionGroupRef.current = newCompanion;
  }, [level.playerSpawn, level.companion, buildPlayerMesh, buildCompanionMesh]);

  // 4. Build 3D Objects from Level Data
  const createMeshForObject = useCallback((obj: GameObject): THREE.Group => {
    const group = new THREE.Group();
    group.name = obj.id;
    group.position.set(...obj.position);
    group.rotation.set(...obj.rotation);

    const baseColor = obj.color ? new THREE.Color(obj.color) : new THREE.Color(0x3b82f6);

    switch (obj.type) {
      case 'platform_stone':
      case 'platform_wood':
      case 'platform_metal':
      case 'platform_neon': {
        const geom = new THREE.BoxGeometry(obj.scale[0], obj.scale[1], obj.scale[2]);
        const isNeon = obj.type === 'platform_neon';
        const mat = new THREE.MeshStandardMaterial({
          color: baseColor,
          roughness: obj.type === 'platform_metal' ? 0.2 : 0.7,
          metalness: obj.type === 'platform_metal' ? 0.8 : 0.1,
          emissive: isNeon ? baseColor : new THREE.Color(0x000000),
          emissiveIntensity: isNeon ? 0.5 : 0
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);

        // Edge trim
        const edges = new THREE.EdgesGeometry(geom);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: isNeon ? 0x00ffff : 0x111827 }));
        group.add(line);
        break;
      }

      case 'moving_platform': {
        const geom = new THREE.BoxGeometry(obj.scale[0], obj.scale[1], obj.scale[2]);
        const mat = new THREE.MeshStandardMaterial({
          color: baseColor,
          metalness: 0.5,
          roughness: 0.3,
          emissive: new THREE.Color(0xffa500),
          emissiveIntensity: 0.25
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);

        // Movement arrows
        const arrowGeom = new THREE.CylinderGeometry(0.1, 0.1, obj.scale[0] * 0.7, 8);
        const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffdd00 });
        const arrow = new THREE.Mesh(arrowGeom, arrowMat);
        arrow.rotation.z = Math.PI / 2;
        arrow.position.y = obj.scale[1] / 2 + 0.05;
        group.add(arrow);
        break;
      }

      case 'bouncy_pad': {
        const baseGeom = new THREE.CylinderGeometry(obj.scale[0] * 0.5, obj.scale[0] * 0.55, obj.scale[1], 16);
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
        const base = new THREE.Mesh(baseGeom, baseMat);
        group.add(base);

        const springGeom = new THREE.CylinderGeometry(obj.scale[0] * 0.42, obj.scale[0] * 0.42, 0.2, 16);
        const springMat = new THREE.MeshStandardMaterial({
          color: baseColor,
          emissive: baseColor,
          emissiveIntensity: 0.6
        });
        const pad = new THREE.Mesh(springGeom, springMat);
        pad.position.y = obj.scale[1] / 2 + 0.1;
        group.add(pad);
        break;
      }

      case 'hazard_spikes': {
        const spikeCount = 4;
        for (let i = 0; i < spikeCount; i++) {
          const coneGeom = new THREE.ConeGeometry(0.25, 0.8, 6);
          const coneMat = new THREE.MeshStandardMaterial({ color: 0xd90429, roughness: 0.3 });
          const cone = new THREE.Mesh(coneGeom, coneMat);
          const offset = (i - 1.5) * 0.4;
          cone.position.set(offset, 0.4, 0);
          cone.castShadow = true;
          group.add(cone);
        }
        break;
      }

      case 'hazard_laser': {
        const emitterGeom = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const emitterMat = new THREE.MeshStandardMaterial({ color: 0x111827 });
        const e1 = new THREE.Mesh(emitterGeom, emitterMat);
        e1.position.set(-obj.scale[0] / 2, 0, 0);
        const e2 = new THREE.Mesh(emitterGeom, emitterMat);
        e2.position.set(obj.scale[0] / 2, 0, 0);
        group.add(e1);
        group.add(e2);

        const beamGeom = new THREE.CylinderGeometry(0.06, 0.06, obj.scale[0], 8);
        const beamMat = new THREE.MeshBasicMaterial({ color: 0xff0055, transparent: true, opacity: 0.85 });
        const beam = new THREE.Mesh(beamGeom, beamMat);
        beam.rotation.z = Math.PI / 2;
        group.add(beam);
        break;
      }

      case 'coin_collectible': {
        const coinGeom = new THREE.CylinderGeometry(0.35, 0.35, 0.08, 16);
        const coinMat = new THREE.MeshStandardMaterial({
          color: 0xffd166,
          metalness: 0.9,
          roughness: 0.2,
          emissive: 0xffb703,
          emissiveIntensity: 0.4
        });
        const coin = new THREE.Mesh(coinGeom, coinMat);
        coin.rotation.x = Math.PI / 2;
        group.add(coin);
        break;
      }

      case 'gem_rare': {
        const gemGeom = new THREE.OctahedronGeometry(0.45, 0);
        const gemMat = new THREE.MeshStandardMaterial({
          color: 0x00f0ff,
          metalness: 0.2,
          roughness: 0.1,
          emissive: 0x00f0ff,
          emissiveIntensity: 0.7
        });
        const gem = new THREE.Mesh(gemGeom, gemMat);
        group.add(gem);
        break;
      }

      case 'clue_document':
      case 'clue_fingerprint':
      case 'clue_weapon_drop':
      case 'keycard': {
        // Glowing mystery evidence node
        const boxGeom = new THREE.BoxGeometry(0.4, 0.5, 0.08);
        const boxMat = new THREE.MeshStandardMaterial({
          color: baseColor,
          emissive: baseColor,
          emissiveIntensity: 0.6
        });
        const doc = new THREE.Mesh(boxGeom, boxMat);
        group.add(doc);

        // Magnifying / mystery halo
        const haloGeom = new THREE.RingGeometry(0.4, 0.5, 16);
        const haloMat = new THREE.MeshBasicMaterial({ color: 0xffdd00, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
        const halo = new THREE.Mesh(haloGeom, haloMat);
        halo.position.y = 0.5;
        group.add(halo);
        break;
      }

      case 'enemy_guard':
      case 'enemy_drone': {
        const isDrone = obj.type === 'enemy_drone';
        const geom = isDrone ? new THREE.SphereGeometry(0.5, 12, 12) : new THREE.CapsuleGeometry(0.35, 0.9, 4, 8);
        const mat = new THREE.MeshStandardMaterial({
          color: baseColor,
          roughness: 0.4,
          emissive: new THREE.Color(0xef4444),
          emissiveIntensity: 0.3
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.castShadow = true;
        group.add(mesh);

        // Red Eye
        const eyeGeom = new THREE.SphereGeometry(0.12, 8, 8);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const eye = new THREE.Mesh(eyeGeom, eyeMat);
        eye.position.set(0, isDrone ? 0 : 0.5, 0.35);
        group.add(eye);
        break;
      }

      case 'chest_loot': {
        const chestGeom = new THREE.BoxGeometry(0.8, 0.6, 0.6);
        const chestMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.6 });
        const chest = new THREE.Mesh(chestGeom, chestMat);
        group.add(chest);

        const trimGeom = new THREE.BoxGeometry(0.82, 0.1, 0.62);
        const trimMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8 });
        const trim = new THREE.Mesh(trimGeom, trimMat);
        group.add(trim);
        break;
      }

      case 'portal_exit': {
        const ringGeom = new THREE.TorusGeometry(1.0, 0.15, 16, 32);
        const ringMat = new THREE.MeshStandardMaterial({
          color: baseColor,
          emissive: baseColor,
          emissiveIntensity: 0.9
        });
        const ring = new THREE.Mesh(ringGeom, ringMat);
        group.add(ring);

        // Vortex center
        const vortexGeom = new THREE.CircleGeometry(0.9, 24);
        const vortexMat = new THREE.MeshBasicMaterial({
          color: 0x00f5d4,
          transparent: true,
          opacity: 0.65,
          side: THREE.DoubleSide
        });
        const vortex = new THREE.Mesh(vortexGeom, vortexMat);
        group.add(vortex);
        break;
      }

      case 'street_lamp':
      case 'torch_light': {
        const postGeom = new THREE.CylinderGeometry(0.08, 0.1, obj.scale[1], 8);
        const postMat = new THREE.MeshStandardMaterial({ color: 0x1f2937 });
        const post = new THREE.Mesh(postGeom, postMat);
        post.position.y = obj.scale[1] / 2;
        group.add(post);

        const bulbGeom = new THREE.SphereGeometry(0.25, 12, 12);
        const bulbMat = new THREE.MeshBasicMaterial({ color: baseColor });
        const bulb = new THREE.Mesh(bulbGeom, bulbMat);
        bulb.position.y = obj.scale[1];
        group.add(bulb);

        const pLight = new THREE.PointLight(baseColor, 1.5, 10);
        pLight.position.y = obj.scale[1];
        group.add(pLight);
        break;
      }

      default: {
        const geom = new THREE.BoxGeometry(obj.scale[0], obj.scale[1], obj.scale[2]);
        const mat = new THREE.MeshStandardMaterial({ color: baseColor });
        const mesh = new THREE.Mesh(geom, mat);
        group.add(mesh);
        break;
      }
    }

    return group;
  }, []);

  // Sync objects with scene
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Clear removed meshes
    const currentIds = new Set(level.objects.map(o => o.id));
    objectMeshesRef.current.forEach((mesh, id) => {
      if (!currentIds.has(id)) {
        scene.remove(mesh);
        objectMeshesRef.current.delete(id);
      }
    });

    // Add or update meshes
    level.objects.forEach(obj => {
      let group = objectMeshesRef.current.get(obj.id);
      if (!group) {
        group = createMeshForObject(obj);
        scene.add(group);
        objectMeshesRef.current.set(obj.id, group);
      } else {
        group.position.set(...obj.position);
        group.rotation.set(...obj.rotation);
      }

      // Visual outline for selected object in build mode
      const isSelected = mode === 'build' && selectedObjectId === obj.id;
      let outline = group.getObjectByName('selectionOutline');
      if (isSelected && !outline) {
        const box = new THREE.Box3().setFromObject(group);
        const size = new THREE.Vector3();
        box.getSize(size);
        const boxGeom = new THREE.BoxGeometry(size.x * 1.05, size.y * 1.05, size.z * 1.05);
        const outlineMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
        outline = new THREE.Mesh(boxGeom, outlineMat);
        outline.name = 'selectionOutline';
        group.add(outline);
      } else if (!isSelected && outline) {
        group.remove(outline);
      }
    });
  }, [level.objects, mode, selectedObjectId, createMeshForObject]);

  // Toggle grid visibility between Build and Play mode
  useEffect(() => {
    if (gridHelperRef.current) {
      gridHelperRef.current.visible = mode === 'build';
    }
  }, [mode]);

  // 5. Main Game Loop (Physics, Animation, Camera, Controls)
  useEffect(() => {
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Weather Particles Animation
      if (weatherParticlesRef.current) {
        const positions = weatherParticlesRef.current.geometry.attributes.position.array as Float32Array;
        const count = positions.length / 3;
        const isRain = level.weather === 'rain_storm';
        for (let i = 0; i < count; i++) {
          positions[i * 3 + 1] -= (isRain ? 25 : 8) * delta;
          if (positions[i * 3 + 1] < 0) {
            positions[i * 3 + 1] = 35;
          }
        }
        weatherParticlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Animate Moving Platforms & Collectibles
      level.objects.forEach(obj => {
        const mesh = objectMeshesRef.current.get(obj.id);
        if (!mesh) return;

        if (obj.isMoving && obj.moveAxis && obj.moveDistance) {
          const speed = obj.moveSpeed || 2;
          const offset = Math.sin(elapsedTime * speed) * (obj.moveDistance / 2);
          const basePos = obj.position;
          if (obj.moveAxis === 'x') mesh.position.x = basePos[0] + offset;
          if (obj.moveAxis === 'y') mesh.position.y = basePos[1] + offset;
          if (obj.moveAxis === 'z') mesh.position.z = basePos[2] + offset;
        }

        // Float & spin for collectibles & clues
        if (
          obj.type === 'coin_collectible' ||
          obj.type === 'gem_rare' ||
          obj.type === 'clue_document' ||
          obj.type === 'keycard' ||
          obj.type === 'clue_weapon_drop'
        ) {
          mesh.rotation.y += 1.8 * delta;
          mesh.position.y = obj.position[1] + Math.sin(elapsedTime * 3 + Number(obj.id.charCodeAt(0) || 0)) * 0.15;
        }

        // Pulse hazard lasers
        if (obj.type === 'hazard_laser') {
          const pulse = (Math.sin(elapsedTime * 6) + 1) * 0.5;
          const beam = mesh.children.find(c => c instanceof THREE.Mesh && c.geometry instanceof THREE.CylinderGeometry);
          if (beam && beam instanceof THREE.Mesh) {
            (beam.material as THREE.Material).opacity = 0.4 + pulse * 0.5;
          }
        }
      });

      // MODE SPECIFIC UPDATES
      if (mode === 'play') {
        const pState = playerStateRef.current;
        const playerMesh = playerGroupRef.current;
        const companionMesh = companionGroupRef.current;

        // Collect inputs (Keyboard or Virtual Touch)
        let moveX = 0;
        let moveZ = 0;

        if (keysPressed.current['KeyA'] || keysPressed.current['ArrowLeft']) moveX -= 1;
        if (keysPressed.current['KeyD'] || keysPressed.current['ArrowRight']) moveX += 1;
        if (keysPressed.current['KeyW'] || keysPressed.current['ArrowUp']) moveZ -= 1;
        if (keysPressed.current['KeyS'] || keysPressed.current['ArrowDown']) moveZ += 1;

        // Blend with touch joystick
        moveX += touchInput.moveX;
        moveZ += touchInput.moveZ;

        const isMoving = Math.abs(moveX) > 0.05 || Math.abs(moveZ) > 0.05;

        // Dashing / Sprinting
        const isDashing = keysPressed.current['ShiftLeft'] || keysPressed.current['ShiftRight'] || touchInput.isDashing;
        const moveSpeed = isDashing ? 12 : 6.5;

        if (isMoving) {
          const angle = Math.atan2(moveX, moveZ);
          pState.rotationY = angle;
          pState.vel.x = Math.sin(angle) * moveSpeed;
          pState.vel.z = Math.cos(angle) * moveSpeed;
        } else {
          pState.vel.x = 0;
          pState.vel.z = 0;
        }

        // Jump physics
        const isJumping = keysPressed.current['Space'] || touchInput.isJumping;
        if (isJumping && pState.isGrounded) {
          pState.vel.y = 11;
          pState.isGrounded = false;
          soundEngine.playJump();
        }

        // Apply Gravity
        const gravity = level.gravity || 24;
        pState.vel.y -= gravity * delta;

        // Projected Position
        pState.pos.x += pState.vel.x * delta;
        pState.pos.y += pState.vel.y * delta;
        pState.pos.z += pState.vel.z * delta;

        // Collision Check against Platforms
        pState.isGrounded = false;

        level.objects.forEach(obj => {
          const mesh = objectMeshesRef.current.get(obj.id);
          const currentPos = mesh ? mesh.position : new THREE.Vector3(...obj.position);
          const halfW = obj.scale[0] / 2;
          const halfH = obj.scale[1] / 2;
          const halfD = obj.scale[2] / 2;

          const isPlatform =
            obj.category === 'platforms' ||
            obj.type.startsWith('platform') ||
            obj.type === 'moving_platform' ||
            obj.type === 'bouncy_pad';

          if (isPlatform) {
            // Check bounding box
            const inX = pState.pos.x >= currentPos.x - halfW && pState.pos.x <= currentPos.x + halfW;
            const inZ = pState.pos.z >= currentPos.z - halfD && pState.pos.z <= currentPos.z + halfD;

            if (inX && inZ) {
              const surfaceY = currentPos.y + halfH;
              if (pState.pos.y >= surfaceY - 0.5 && pState.pos.y <= surfaceY + 0.8 && pState.vel.y <= 0) {
                pState.pos.y = surfaceY;
                pState.vel.y = 0;
                pState.isGrounded = true;

                // Bouncy pad launch
                if (obj.type === 'bouncy_pad') {
                  pState.vel.y = 18;
                  pState.isGrounded = false;
                  soundEngine.playJump();
                }
              }
            }
          }

          // Item collection & Clue detection
          const playerDist = pState.pos.distanceTo(currentPos);
          if (playerDist < 1.5 && !pState.collectedItems.has(obj.id)) {
            if (obj.type === 'coin_collectible' || obj.type === 'gem_rare') {
              pState.collectedItems.add(obj.id);
              soundEngine.playCoin();
              onCoinsCollected(1);
              if (mesh) mesh.visible = false;
            } else if (
              obj.type === 'clue_document' ||
              obj.type === 'clue_fingerprint' ||
              obj.type === 'clue_weapon_drop' ||
              obj.type === 'keycard'
            ) {
              pState.collectedItems.add(obj.id);
              soundEngine.playClueFound();
              onClueDiscovered(
                obj.mysteryClueTitle || obj.name,
                obj.mysteryClueDescription || 'A critical piece of evidence has been recorded in your dossier.'
              );
              if (mesh) mesh.visible = false;
            } else if (obj.type === 'portal_exit') {
              soundEngine.playVictory();
              onLevelComplete();
            }
          }

          // Hazard collision
          if (obj.category === 'hazards' && playerDist < 1.2) {
            onPlayerDamage(15 * delta);
            soundEngine.playHit();
          }

          // Combat Hit Check when attacking
          if (pState.isAttacking && (obj.type === 'enemy_guard' || obj.type === 'enemy_drone')) {
            if (playerDist < 2.0 && obj.hp && obj.hp > 0) {
              obj.hp -= 35 * delta;
              soundEngine.playHit();
              if (mesh) {
                mesh.position.x += (Math.random() - 0.5) * 0.1;
              }
              if (obj.hp <= 0) {
                soundEngine.playCoin();
                onEnemyDefeated(obj.id);
                if (mesh) mesh.visible = false;
              }
            }
          }
        });

        // Ground floor fallback check
        if (pState.pos.y < -15) {
          onGameOver();
          pState.pos.set(...level.playerSpawn);
          pState.vel.set(0, 0, 0);
        }

        // Update player mesh transform & procedural limb animation
        if (playerMesh) {
          playerMesh.position.copy(pState.pos);
          playerMesh.rotation.y = pState.rotationY;

          // Attack timer
          if (pState.attackTimer > 0) {
            pState.attackTimer -= delta;
            if (pState.attackTimer <= 0) pState.isAttacking = false;
          }

          // Crouch / Squeeze posture
          const isCrouching = keysPressed.current['KeyC'] || touchInput.isCrouching;
          playerMesh.scale.y = isCrouching ? 0.6 : 1.0;

          // Animate limbs
          const leftArm = playerMesh.getObjectByName('leftArm');
          const rightArm = playerMesh.getObjectByName('rightArm');
          const leftLeg = playerMesh.getObjectByName('leftLeg');
          const rightLeg = playerMesh.getObjectByName('rightLeg');

          if (isMoving) {
            const swing = Math.sin(elapsedTime * 12) * 0.6;
            if (leftArm) leftArm.rotation.x = swing;
            if (rightArm) rightArm.rotation.x = -swing;
            if (leftLeg) leftLeg.rotation.x = -swing;
            if (rightLeg) rightLeg.rotation.x = swing;
          } else if (pState.isAttacking) {
            // Punch swing
            if (rightArm) rightArm.rotation.x = -Math.PI / 2;
            if (leftArm) leftArm.rotation.x = Math.PI / 4;
          } else {
            // Idle breathing
            const idle = Math.sin(elapsedTime * 2.5) * 0.05;
            if (leftArm) leftArm.rotation.x = idle;
            if (rightArm) rightArm.rotation.x = -idle;
            if (leftLeg) leftLeg.rotation.x = 0;
            if (rightLeg) rightLeg.rotation.x = 0;
          }
        }

        // Companion Follow Logic
        if (companionMesh && playerMesh) {
          const companionTarget = new THREE.Vector3(
            pState.pos.x + Math.sin(pState.rotationY + Math.PI * 0.75) * 1.8,
            pState.pos.y,
            pState.pos.z + Math.cos(pState.rotationY + Math.PI * 0.75) * 1.8
          );
          companionMesh.position.lerp(companionTarget, 0.08);
          companionMesh.lookAt(pState.pos.x, companionMesh.position.y, pState.pos.z);
        }

        // Camera follow (Smooth 3rd person chase camera)
        if (cameraRef.current) {
          const camOffset = new THREE.Vector3(0, 4.5, 9);
          camOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), pState.rotationY * 0.3);
          const camTargetPos = pState.pos.clone().add(camOffset);
          cameraRef.current.position.lerp(camTargetPos, 0.1);
          cameraRef.current.lookAt(pState.pos.x, pState.pos.y + 1.2, pState.pos.z);
        }
      } else {
        // BUILD MODE CAMERA ORBIT
        const bCam = buildCameraState.current;
        if (cameraRef.current) {
          const x = bCam.target.x + bCam.distance * Math.sin(bCam.phi) * Math.sin(bCam.theta);
          const y = bCam.target.y + bCam.distance * Math.cos(bCam.phi);
          const z = bCam.target.z + bCam.distance * Math.sin(bCam.phi) * Math.cos(bCam.theta);
          cameraRef.current.position.set(x, y, z);
          cameraRef.current.lookAt(bCam.target);
        }
      }

      // Render
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mode, level, onCoinsCollected, onClueDiscovered, onEnemyDefeated, onGameOver, onLevelComplete, onPlayerDamage, touchInput]);

  // Pointer event handlers for Build Mode Orbit & Object Selection
  const handlePointerDown = (e: React.PointerEvent) => {
    if (mode === 'play') return;
    const bCam = buildCameraState.current;
    bCam.isDragging = true;
    bCam.dragButton = e.button;
    bCam.lastMouseX = e.clientX;
    bCam.lastMouseY = e.clientY;

    // Raycast to select object
    if (containerRef.current && cameraRef.current && sceneRef.current && e.button === 0) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, cameraRef.current);

      const interactiveMeshes: THREE.Object3D[] = [];
      objectMeshesRef.current.forEach(mesh => interactiveMeshes.push(...mesh.children));

      const intersects = raycaster.intersectObjects(interactiveMeshes, false);
      if (intersects.length > 0) {
        let parentGroup: THREE.Object3D | null = intersects[0].object;
        while (parentGroup && !objectMeshesRef.current.has(parentGroup.name) && parentGroup.parent) {
          parentGroup = parentGroup.parent;
        }
        if (parentGroup && objectMeshesRef.current.has(parentGroup.name)) {
          onSelectObject(parentGroup.name);
          return;
        }
      }
      onSelectObject(null);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (mode === 'play') return;
    const bCam = buildCameraState.current;
    if (!bCam.isDragging) return;

    const dx = e.clientX - bCam.lastMouseX;
    const dy = e.clientY - bCam.lastMouseY;
    bCam.lastMouseX = e.clientX;
    bCam.lastMouseY = e.clientY;

    if (bCam.dragButton === 0) {
      // Rotate
      bCam.theta -= dx * 0.008;
      bCam.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, bCam.phi - dy * 0.008));
    } else if (bCam.dragButton === 2) {
      // Pan
      const panSpeed = 0.03 * (bCam.distance / 20);
      bCam.target.x -= dx * panSpeed;
      bCam.target.z += dy * panSpeed;
    }
  };

  const handlePointerUp = () => {
    buildCameraState.current.isDragging = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (mode === 'play') return;
    const bCam = buildCameraState.current;
    bCam.distance = Math.max(5, Math.min(80, bCam.distance + e.deltaY * 0.03));
  };

  return (
    <div
      ref={containerRef}
      id="three-viewport-container"
      className="relative w-full h-full select-none overflow-hidden touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      onContextMenu={e => e.preventDefault()}
    >
      {/* Active Companion Dialogue speech bubble in 3D viewport */}
      {companionSpeech && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 max-w-md bg-slate-900/90 text-amber-300 border border-amber-500/40 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center space-x-3 pointer-events-none z-20 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center font-bold text-xs text-amber-300">
            {level.companion.name.charAt(0)}
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{level.companion.name} ({level.companion.title})</div>
            <p className="text-sm font-medium text-slate-100">{companionSpeech}</p>
          </div>
        </div>
      )}
    </div>
  );
};
