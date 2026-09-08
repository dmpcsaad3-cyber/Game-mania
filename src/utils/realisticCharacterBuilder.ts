import * as THREE from 'three';
import { getTacticalArmorTexture, getBrushedMetalTexture } from './proceduralTextures';

/**
 * Builds realistic, high-detail characters using PBR materials, multi-part meshes,
 * tactical gear, armor plating, and weapons.
 */
export function buildRealisticCharacterMesh(
  type: string,
  baseColorHex: string = '#3b82f6',
  scaleMultiplier: number = 1.0
): THREE.Group {
  const root = new THREE.Group();
  const armorTex = getTacticalArmorTexture();
  const metalTex = getBrushedMetalTexture();

  const primaryColor = new THREE.Color(baseColorHex);
  const darkPlateColor = new THREE.Color('#1e293b');
  const armorPlateColor = new THREE.Color('#334155');
  const visorColor = new THREE.Color('#00f0ff');
  const skinColor = new THREE.Color('#e0ac69');

  // Materials
  const armorMat = new THREE.MeshStandardMaterial({
    color: primaryColor,
    map: armorTex,
    roughness: 0.45,
    metalness: 0.35,
  });

  const darkPlateMat = new THREE.MeshStandardMaterial({
    color: darkPlateColor,
    roughness: 0.5,
    metalness: 0.6,
  });

  const heavyMetalMat = new THREE.MeshStandardMaterial({
    color: armorPlateColor,
    map: metalTex,
    roughness: 0.3,
    metalness: 0.8,
  });

  const skinMat = new THREE.MeshStandardMaterial({
    color: skinColor,
    roughness: 0.6,
    metalness: 0.1,
  });

  const glowVisorMat = new THREE.MeshStandardMaterial({
    color: visorColor,
    emissive: visorColor,
    emissiveIntensity: 0.85,
    roughness: 0.1,
    metalness: 0.9,
  });

  // 1. TACTICAL SPECIAL OPS SOLDIER
  if (type === 'char_tactical_soldier') {
    // Torso / Plate Carrier
    const torsoGeom = new THREE.BoxGeometry(0.7, 0.85, 0.45);
    const torso = new THREE.Mesh(torsoGeom, armorMat);
    torso.position.y = 1.1;
    torso.castShadow = true;
    root.add(torso);

    // Ballistic Chest Plates
    const plateGeom = new THREE.BoxGeometry(0.55, 0.4, 0.1);
    const chestPlate = new THREE.Mesh(plateGeom, heavyMetalMat);
    chestPlate.position.set(0, 1.25, 0.24);
    root.add(chestPlate);

    // Tactical pouches
    for (let i = -1; i <= 1; i++) {
      const pouchGeom = new THREE.BoxGeometry(0.14, 0.18, 0.1);
      const pouch = new THREE.Mesh(pouchGeom, darkPlateMat);
      pouch.position.set(i * 0.18, 0.9, 0.24);
      root.add(pouch);
    }

    // Tactical Helmet
    const helmetGeom = new THREE.SphereGeometry(0.34, 16, 16);
    const helmet = new THREE.Mesh(helmetGeom, darkPlateMat);
    helmet.position.set(0, 1.8, 0);
    helmet.castShadow = true;
    root.add(helmet);

    // Night-Vision / Combat Visor
    const visorGeom = new THREE.BoxGeometry(0.44, 0.12, 0.2);
    const visor = new THREE.Mesh(visorGeom, glowVisorMat);
    visor.position.set(0, 1.8, 0.24);
    root.add(visor);

    // Tactical Backpack / Comms Unit
    const packGeom = new THREE.BoxGeometry(0.5, 0.65, 0.25);
    const pack = new THREE.Mesh(packGeom, darkPlateMat);
    pack.position.set(0, 1.2, -0.32);
    root.add(pack);

    // Antenna
    const antGeom = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 6);
    const ant = new THREE.Mesh(antGeom, heavyMetalMat);
    ant.position.set(0.18, 1.7, -0.35);
    root.add(ant);

    // Arms with Shoulder Pauldrons
    [-0.48, 0.48].forEach((xSide, idx) => {
      const pauldronGeom = new THREE.BoxGeometry(0.25, 0.25, 0.28);
      const pauldron = new THREE.Mesh(pauldronGeom, heavyMetalMat);
      pauldron.position.set(xSide, 1.45, 0);
      root.add(pauldron);

      const armGeom = new THREE.CapsuleGeometry(0.11, 0.45, 4, 8);
      const arm = new THREE.Mesh(armGeom, armorMat);
      arm.position.set(xSide, 1.05, 0);
      arm.name = idx === 0 ? 'leftArm' : 'rightArm';
      root.add(arm);
    });

    // Weapon (Assault Rifle attached to right arm)
    const rifleGroup = new THREE.Group();
    const receiverGeom = new THREE.BoxGeometry(0.12, 0.16, 0.6);
    const barrelGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.5, 8);
    const magGeom = new THREE.BoxGeometry(0.08, 0.22, 0.12);

    const receiver = new THREE.Mesh(receiverGeom, darkPlateMat);
    const barrel = new THREE.Mesh(barrelGeom, heavyMetalMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.z = 0.45;
    const mag = new THREE.Mesh(magGeom, darkPlateMat);
    mag.position.set(0, -0.15, 0.05);

    rifleGroup.add(receiver, barrel, mag);
    rifleGroup.position.set(0.48, 0.9, 0.25);
    root.add(rifleGroup);

    // Legs with Knee Guards and Combat Boots
    [-0.22, 0.22].forEach((xSide, idx) => {
      const legGeom = new THREE.CapsuleGeometry(0.14, 0.55, 4, 8);
      const leg = new THREE.Mesh(legGeom, darkPlateMat);
      leg.position.set(xSide, 0.45, 0);
      leg.name = idx === 0 ? 'leftLeg' : 'rightLeg';
      root.add(leg);

      const kneePadGeom = new THREE.BoxGeometry(0.18, 0.16, 0.12);
      const kneePad = new THREE.Mesh(kneePadGeom, heavyMetalMat);
      kneePad.position.set(xSide, 0.45, 0.15);
      root.add(kneePad);

      const bootGeom = new THREE.BoxGeometry(0.2, 0.18, 0.35);
      const boot = new THREE.Mesh(bootGeom, darkPlateMat);
      boot.position.set(xSide, 0.1, 0.05);
      root.add(boot);
    });
  }

  // 2. CYBER NINJA ASSASSIN
  else if (type === 'char_cyber_ninja') {
    const cyberNeonMat = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.9,
    });

    // Sleek Torso
    const torsoGeom = new THREE.CylinderGeometry(0.32, 0.22, 0.85, 12);
    const torso = new THREE.Mesh(torsoGeom, darkPlateMat);
    torso.position.y = 1.15;
    root.add(torso);

    // Chest Neon Circuit Lines
    const circuitGeom = new THREE.BoxGeometry(0.05, 0.7, 0.46);
    const circuit = new THREE.Mesh(circuitGeom, cyberNeonMat);
    circuit.position.set(0, 1.15, 0);
    root.add(circuit);

    // Cyber Hood / Mask
    const headGeom = new THREE.SphereGeometry(0.28, 16, 16);
    const head = new THREE.Mesh(headGeom, darkPlateMat);
    head.position.y = 1.78;
    root.add(head);

    // Glowing Razor Visor
    const visorGeom = new THREE.BoxGeometry(0.38, 0.08, 0.15);
    const visor = new THREE.Mesh(visorGeom, cyberNeonMat);
    visor.position.set(0, 1.78, 0.22);
    root.add(visor);

    // Dual Cyber Katana Sheaths on Back
    [-0.15, 0.15].forEach(xOff => {
      const bladeGeom = new THREE.BoxGeometry(0.04, 1.2, 0.08);
      const blade = new THREE.Mesh(bladeGeom, heavyMetalMat);
      blade.rotation.z = xOff > 0 ? 0.35 : -0.35;
      blade.position.set(xOff, 1.4, -0.22);

      const glowEdge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.1, 0.02), cyberNeonMat);
      glowEdge.position.set(0, 0, 0.04);
      blade.add(glowEdge);
      root.add(blade);
    });

    // Agile Arms & Legs
    [-0.42, 0.42].forEach((xSide, idx) => {
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.45, 4, 8), darkPlateMat);
      arm.position.set(xSide, 1.1, 0);
      arm.name = idx === 0 ? 'leftArm' : 'rightArm';
      root.add(arm);

      const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.6, 4, 8), darkPlateMat);
      leg.position.set(xSide * 0.55, 0.45, 0);
      leg.name = idx === 0 ? 'leftLeg' : 'rightLeg';
      root.add(leg);
    });
  }

  // 3. HEAVY MECH SENTINEL / ENFORCER
  else if (type === 'char_mech_sentinel') {
    const reactorMat = new THREE.MeshStandardMaterial({
      color: 0xff0055,
      emissive: 0xff0055,
      emissiveIntensity: 1.0,
    });

    // Massive Armored Chassis
    const chassisGeom = new THREE.BoxGeometry(1.1, 0.9, 0.7);
    const chassis = new THREE.Mesh(chassisGeom, heavyMetalMat);
    chassis.position.y = 1.35;
    root.add(chassis);

    // Glowing Chest Reactor Core
    const coreGeom = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16);
    const core = new THREE.Mesh(coreGeom, reactorMat);
    core.rotation.x = Math.PI / 2;
    core.position.set(0, 1.35, 0.36);
    root.add(core);

    // Armored Head with Scanning Sensor
    const headGeom = new THREE.BoxGeometry(0.45, 0.35, 0.45);
    const head = new THREE.Mesh(headGeom, darkPlateMat);
    head.position.set(0, 2.0, 0);
    root.add(head);

    const eyeGeom = new THREE.BoxGeometry(0.3, 0.08, 0.1);
    const eye = new THREE.Mesh(eyeGeom, reactorMat);
    eye.position.set(0, 2.0, 0.24);
    root.add(eye);

    // Heavy Shoulder Cannons
    [-0.65, 0.65].forEach((xSide, idx) => {
      const cannonPod = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.6), heavyMetalMat);
      cannonPod.position.set(xSide, 1.8, 0);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 12), darkPlateMat);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.z = 0.45;
      cannonPod.add(barrel);
      root.add(cannonPod);

      // Hydraulic Arms
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.7, 8), darkPlateMat);
      arm.position.set(xSide, 1.1, 0);
      arm.name = idx === 0 ? 'leftArm' : 'rightArm';
      root.add(arm);
    });

    // Heavy Hydraulic Legs
    [-0.35, 0.35].forEach((xSide, idx) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.8, 8), darkPlateMat);
      leg.position.set(xSide, 0.5, 0);
      leg.name = idx === 0 ? 'leftLeg' : 'rightLeg';
      root.add(leg);

      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.18, 0.5), heavyMetalMat);
      foot.position.set(xSide, 0.1, 0.08);
      root.add(foot);
    });
  }

  // 4. SCI-FI INFILTRATION OPERATIVE
  else if (type === 'char_sci_fi_operative') {
    const operativeMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.5,
    });
    const orangeGlow = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      emissive: 0xf97316,
      emissiveIntensity: 0.8,
    });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.8, 0.4), operativeMat);
    torso.position.y = 1.1;
    root.add(torso);

    // Exo-spine on back
    const spine = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.75, 0.15), heavyMetalMat);
    spine.position.set(0, 1.1, -0.22);
    root.add(spine);

    // Head with tactical headset
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), skinMat);
    head.position.y = 1.75;
    root.add(head);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.18), orangeGlow);
    visor.position.set(0, 1.75, 0.22);
    root.add(visor);

    // Sidearm holster on hip
    const holster = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.25, 0.18), darkPlateMat);
    holster.position.set(0.36, 0.8, 0);
    root.add(holster);

    // Limbs
    [-0.42, 0.42].forEach((xSide, idx) => {
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.45, 4, 8), operativeMat);
      arm.position.set(xSide, 1.05, 0);
      arm.name = idx === 0 ? 'leftArm' : 'rightArm';
      root.add(arm);
    });

    [-0.2, 0.2].forEach((xSide, idx) => {
      const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.55, 4, 8), operativeMat);
      leg.position.set(xSide, 0.45, 0);
      leg.name = idx === 0 ? 'leftLeg' : 'rightLeg';
      root.add(leg);
    });
  }

  // 5. MYSTIC ROGUE ASSASSIN
  else if (type === 'char_mystic_assassin') {
    const cloakMat = new THREE.MeshStandardMaterial({
      color: 0x2e1065,
      roughness: 0.8,
    });
    const goldTrim = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.2,
    });

    // Flowing Cloak Tunic
    const tunicGeom = new THREE.ConeGeometry(0.45, 1.1, 8);
    const tunic = new THREE.Mesh(tunicGeom, cloakMat);
    tunic.position.y = 0.95;
    root.add(tunic);

    // Cross-body Gold Harness
    const harness = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.03, 6, 16), goldTrim);
    harness.rotation.y = Math.PI / 4;
    harness.position.y = 1.15;
    root.add(harness);

    // Hooded Cowl
    const hoodGeom = new THREE.SphereGeometry(0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.7);
    const hood = new THREE.Mesh(hoodGeom, cloakMat);
    hood.position.y = 1.75;
    root.add(hood);

    // Glowing Eyes under Hood
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    [-0.08, 0.08].forEach(x => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), eyeMat);
      eye.position.set(x, 1.72, 0.24);
      root.add(eye);
    });

    // Dual Daggers on Belt
    [-0.25, 0.25].forEach(x => {
      const dagger = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.4, 0.06), heavyMetalMat);
      dagger.position.set(x, 0.75, 0.2);
      root.add(dagger);
    });
  }

  // 6. TITAN CYBER BOSS
  else {
    const bossGold = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.9,
      roughness: 0.25,
      emissive: 0xb45309,
      emissiveIntensity: 0.3,
    });

    // Heavy Plated Frame
    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.2, 0.8), heavyMetalMat);
    torso.position.y = 1.6;
    root.add(torso);

    const chestSigil = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), bossGold);
    chestSigil.position.set(0, 1.65, 0.45);
    root.add(chestSigil);

    // Horned War Helm
    const helm = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.55), darkPlateMat);
    helm.position.set(0, 2.45, 0);
    root.add(helm);

    [-0.35, 0.35].forEach(x => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.5, 8), bossGold);
      horn.position.set(x, 2.8, 0);
      horn.rotation.z = x > 0 ? -0.4 : 0.4;
      root.add(horn);
    });

    // Power Fists
    [-0.85, 0.85].forEach((x, idx) => {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, 0.35), heavyMetalMat);
      arm.position.set(x, 1.4, 0);
      arm.name = idx === 0 ? 'leftArm' : 'rightArm';
      root.add(arm);

      const fist = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), bossGold);
      fist.position.set(x, 0.8, 0.1);
      root.add(fist);
    });

    // Reinforced Legs
    [-0.4, 0.4].forEach((x, idx) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.9, 0.38), darkPlateMat);
      leg.position.set(x, 0.6, 0);
      leg.name = idx === 0 ? 'leftLeg' : 'rightLeg';
      root.add(leg);
    });
  }

  root.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
  return root;
}
