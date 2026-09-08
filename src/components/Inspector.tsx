import React, { useState } from 'react';
import {
  Box,
  Layers,
  Sparkles,
  Shield,
  Trash2,
  Copy,
  ChevronRight,
  Move,
  Flame,
  Search,
  Zap,
} from 'lucide-react';
import { GameObject, GameObjectType, ObjectCategory } from '../types/game';

interface InspectorProps {
  selectedObject: GameObject | null;
  onUpdateObject: (updated: GameObject) => void;
  onDeleteObject: (id: string) => void;
  onDuplicateObject: (obj: GameObject) => void;
  onAddObject: (type: GameObjectType) => void;
}

const PALETTE_ITEMS: { type: GameObjectType; name: string; category: ObjectCategory; color: string; desc: string }[] = [
  // Platforms
  { type: 'platform_stone', name: 'Stone Platform', category: 'platforms', color: '#3b82f6', desc: 'Solid terrain block' },
  { type: 'platform_neon', name: 'Neon Cyber Deck', category: 'platforms', color: '#00f0ff', desc: 'Glowing sci-fi platform' },
  { type: 'platform_metal', name: 'Metal Scaffold', category: 'platforms', color: '#64748b', desc: 'Industrial steel bridge' },
  { type: 'moving_platform', name: 'Moving Platform', category: 'platforms', color: '#f59e0b', desc: 'Oscillating hover pad' },
  { type: 'bouncy_pad', name: 'Bouncy Trampoline', category: 'platforms', color: '#ec4899', desc: 'Launches player skyward' },

  // Hazards
  { type: 'hazard_spikes', name: 'Spike Hazard', category: 'hazards', color: '#ef4444', desc: 'Causes damage on touch' },
  { type: 'hazard_laser', name: 'Laser Tripwire', category: 'hazards', color: '#dc2626', desc: 'Pulsing security beam' },

  // Mystery & Clues
  { type: 'clue_document', name: 'Burned Ledger Clue', category: 'mystery', color: '#fbbf24', desc: 'Crime investigation document' },
  { type: 'keycard', name: 'Cipher Keycard', category: 'mystery', color: '#10b981', desc: 'Opens restricted doors' },
  { type: 'clue_weapon_drop', name: 'Discarded Weapon', category: 'mystery', color: '#f97316', desc: 'Ballistics forensics clue' },

  // Items
  { type: 'coin_collectible', name: 'Gold Coin', category: 'items', color: '#eab308', desc: 'Score collectible' },
  { type: 'gem_rare', name: 'Rare Energy Gem', category: 'items', color: '#06b6d4', desc: 'High-value power core' },
  { type: 'chest_loot', name: 'Treasure Chest', category: 'items', color: '#d97706', desc: 'Secret cache' },
  { type: 'portal_exit', name: 'Extraction Portal', category: 'items', color: '#14b8a6', desc: 'Mission completion goal' },

  // Characters (Realistic 3D Assets)
  { type: 'char_tactical_soldier', name: 'Tactical Spec-Ops', category: 'characters', color: '#2563eb', desc: 'Realistic soldier with ballistic armor & assault rifle' },
  { type: 'char_cyber_ninja', name: 'Cyber Ninja Assassin', category: 'characters', color: '#00f0ff', desc: 'Sleek carbon-fiber ninja with glowing dual katanas' },
  { type: 'char_mech_sentinel', name: 'Heavy Mech Sentinel', category: 'characters', color: '#ef4444', desc: 'Giant armored combat robot with reactor core' },
  { type: 'char_sci_fi_operative', name: 'Ghost Operative', category: 'characters', color: '#f97316', desc: 'Special infiltration agent with stealth visor & sidearm' },
  { type: 'char_mystic_assassin', name: 'Shadow Assassin', category: 'characters', color: '#a855f7', desc: 'Hooded cowl rogue with dual daggers' },
  { type: 'char_heavy_boss', name: 'Titan Cyber Boss', category: 'characters', color: '#d97706', desc: 'Heavy armored war-boss with power fists' },
  { type: 'enemy_guard', name: 'Syndicate Guard', category: 'characters', color: '#8b5cf6', desc: 'Combat patrol enforcer' },
  { type: 'enemy_drone', name: 'Security Drone', category: 'characters', color: '#f43f5e', desc: 'Hovering surveillance bot' },
  { type: 'street_lamp', name: 'Street Lamp Amber', category: 'lights', color: '#f59e0b', desc: 'Point light source' },
];

export const Inspector: React.FC<InspectorProps> = ({
  selectedObject,
  onUpdateObject,
  onDeleteObject,
  onDuplicateObject,
  onAddObject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ObjectCategory | 'all'>('all');

  const filteredPalette = PALETTE_ITEMS.filter(item => activeCategory === 'all' || item.category === activeCategory);

  return (
    <aside className="w-80 bg-slate-900/95 border-l border-slate-800 flex flex-col h-[calc(100vh-3.5rem)] text-slate-200 z-30 overflow-hidden select-none backdrop-blur-md">
      {/* Header Tabs: Palette vs Properties */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/40">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
          {selectedObject ? 'Object Properties' : 'Drag & Place 3D Catalog'}
        </h2>
        <p className="text-[11px] text-slate-500">
          {selectedObject ? 'Modify position, movement, and mystery parameters' : 'Click to spawn elements anywhere in your 3D level'}
        </p>
      </div>

      {selectedObject ? (
        /* Selected Object Inspector */
        <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <span className="font-bold text-white text-sm block">{selectedObject.name}</span>
              <span className="text-[10px] font-mono text-cyan-400 uppercase">{selectedObject.type}</span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onDuplicateObject(selectedObject)}
                title="Duplicate Object"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onDeleteObject(selectedObject.id)}
                title="Delete Object"
                className="p-1.5 rounded-lg bg-rose-900/30 hover:bg-rose-900/60 text-rose-400"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Position Coordinates (X, Y, Z) */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1.5">Position (X, Y, Z)</label>
            <div className="grid grid-cols-3 gap-2">
              {(['X', 'Y', 'Z'] as const).map((axis, i) => (
                <div key={axis} className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 flex items-center">
                  <span className="text-slate-500 font-bold mr-1.5 text-[10px]">{axis}</span>
                  <input
                    type="number"
                    step="0.5"
                    value={Math.round(selectedObject.position[i] * 10) / 10}
                    onChange={e => {
                      const newPos = [...selectedObject.position] as [number, number, number];
                      newPos[i] = parseFloat(e.target.value) || 0;
                      onUpdateObject({ ...selectedObject, position: newPos });
                    }}
                    className="w-full bg-transparent text-white focus:outline-none text-right font-mono"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scale Dimensions (W, H, D) */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1.5">Dimensions (W, H, D)</label>
            <div className="grid grid-cols-3 gap-2">
              {(['W', 'H', 'D'] as const).map((dim, i) => (
                <div key={dim} className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 flex items-center">
                  <span className="text-slate-500 font-bold mr-1.5 text-[10px]">{dim}</span>
                  <input
                    type="number"
                    step="0.5"
                    min="0.2"
                    value={Math.round(selectedObject.scale[i] * 10) / 10}
                    onChange={e => {
                      const newScale = [...selectedObject.scale] as [number, number, number];
                      newScale[i] = Math.max(0.2, parseFloat(e.target.value) || 1);
                      onUpdateObject({ ...selectedObject, scale: newScale });
                    }}
                    className="w-full bg-transparent text-white focus:outline-none text-right font-mono"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Color theme */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1.5">Material Tint</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={selectedObject.color || '#3b82f6'}
                onChange={e => onUpdateObject({ ...selectedObject, color: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <span className="font-mono text-slate-300">{selectedObject.color || '#3b82f6'}</span>
            </div>
          </div>

          {/* Moving Platform Settings */}
          {selectedObject.type === 'moving_platform' && (
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <span className="font-bold text-amber-400 text-xs block">Oscillation Mechanics</span>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Movement Axis:</span>
                <select
                  value={selectedObject.moveAxis || 'x'}
                  onChange={e => onUpdateObject({ ...selectedObject, moveAxis: e.target.value as 'x' | 'y' | 'z', isMoving: true })}
                  className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"
                >
                  <option value="x">X (Horizontal)</option>
                  <option value="y">Y (Elevator)</option>
                  <option value="z">Z (Forward/Back)</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Distance:</span>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={selectedObject.moveDistance || 5}
                  onChange={e => onUpdateObject({ ...selectedObject, moveDistance: parseFloat(e.target.value) || 5, isMoving: true })}
                  className="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-right"
                />
              </div>
            </div>
          )}

          {/* Mystery Clue Details */}
          {(selectedObject.category === 'mystery' || selectedObject.type.startsWith('clue')) && (
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-400 text-xs block">Crime & Forensics Metadata</span>
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">Clue Title</span>
                <input
                  type="text"
                  value={selectedObject.mysteryClueTitle || ''}
                  onChange={e => onUpdateObject({ ...selectedObject, mysteryClueTitle: e.target.value })}
                  placeholder="e.g. Scratched Ballistics Casing"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">Forensic Findings</span>
                <textarea
                  rows={2}
                  value={selectedObject.mysteryClueDescription || ''}
                  onChange={e => onUpdateObject({ ...selectedObject, mysteryClueDescription: e.target.value })}
                  placeholder="Describes what the detective discovers..."
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Object Spawn Palette */
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Category Filter Pills */}
          <div className="p-3 border-b border-slate-800 flex flex-wrap gap-1.5 bg-slate-950/20">
            {(['all', 'platforms', 'hazards', 'mystery', 'items', 'characters', 'lights'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white shadow'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Palette Items Grid */}
          <div className="p-3 overflow-y-auto space-y-2 flex-1">
            {filteredPalette.map(item => (
              <div
                key={item.type}
                onClick={() => onAddObject(item.type)}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-850 hover:bg-slate-800 hover:border-cyan-500/50 cursor-pointer flex items-center justify-between group transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-inner font-bold text-xs"
                    style={{ backgroundColor: item.color }}
                  >
                    <Box className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors block">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-400">{item.desc}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};
