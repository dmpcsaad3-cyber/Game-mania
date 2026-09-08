import * as THREE from 'three';

// Cache generated procedural textures so they don't rebuild every frame
const textureCache = new Map<string, THREE.CanvasTexture>();

/**
 * Creates a high-fidelity carbon fiber / tactical weave normal and roughness pattern
 */
export function getTacticalArmorTexture(): THREE.CanvasTexture {
  if (textureCache.has('tactical_armor')) return textureCache.get('tactical_armor')!;

  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Base dark ballistic nylon color
  ctx.fillStyle = '#1e232a';
  ctx.fillRect(0, 0, size, size);

  // Carbon weave pattern
  ctx.fillStyle = '#2d333b';
  for (let y = 0; y < size; y += 8) {
    for (let x = 0; x < size; x += 8) {
      if ((x / 8 + y / 8) % 2 === 0) {
        ctx.fillRect(x, y, 6, 6);
      }
    }
  }

  // Micro surface noise
  const imgData = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 18;
    imgData.data[i] = Math.min(255, Math.max(0, imgData.data[i] + noise));
    imgData.data[i + 1] = Math.min(255, Math.max(0, imgData.data[i + 1] + noise));
    imgData.data[i + 2] = Math.min(255, Math.max(0, imgData.data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  textureCache.set('tactical_armor', texture);
  return texture;
}

/**
 * Creates a brushed metal / cyber alloy texture with metallic sheen
 */
export function getBrushedMetalTexture(): THREE.CanvasTexture {
  if (textureCache.has('brushed_metal')) return textureCache.get('brushed_metal')!;

  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#64748b';
  ctx.fillRect(0, 0, size, size);

  // Horizontal brush streaks
  for (let i = 0; i < 600; i++) {
    const y = Math.random() * size;
    const len = 40 + Math.random() * 120;
    const x = Math.random() * size;
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.12)';
    ctx.lineWidth = 1 + Math.random();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + len, y);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  textureCache.set('brushed_metal', texture);
  return texture;
}

/**
 * Creates realistic stone cobblestone / rock bump texture
 */
export function getStoneBumpTexture(): THREE.CanvasTexture {
  if (textureCache.has('stone_bump')) return textureCache.get('stone_bump')!;

  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#334155';
  ctx.fillRect(0, 0, size, size);

  // Stone tiles and cracks
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 3;
  for (let y = 0; y < size; y += 32) {
    for (let x = 0; x < size; x += 32) {
      const offsetX = (Math.floor(y / 32) % 2) * 16;
      ctx.strokeRect(x + offsetX, y, 32, 32);
    }
  }

  // Organic Perlin-like noise
  const imgData = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 35;
    imgData.data[i] = Math.min(255, Math.max(0, imgData.data[i] + grain));
    imgData.data[i + 1] = Math.min(255, Math.max(0, imgData.data[i + 1] + grain));
    imgData.data[i + 2] = Math.min(255, Math.max(0, imgData.data[i + 2] + grain));
  }
  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  textureCache.set('stone_bump', texture);
  return texture;
}

/**
 * Creates high-tech glowing cyber circuit pattern
 */
export function getCyberGridTexture(): THREE.CanvasTexture {
  if (textureCache.has('cyber_grid')) return textureCache.get('cyber_grid')!;

  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, size, size);

  // Grid lines
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 1;
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 4;

  for (let i = 0; i <= size; i += 32) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, size);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(size, i);
    ctx.stroke();
  }

  // Circuit junctions
  ctx.fillStyle = '#00ffff';
  for (let y = 32; y < size; y += 64) {
    for (let x = 32; x < size; x += 64) {
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  textureCache.set('cyber_grid', texture);
  return texture;
}
