import React, { useState } from 'react';
import { CompanionConfig } from '../types/game';
import { User, Sparkles, Shield, Heart, Sword, MessageSquare, Check } from 'lucide-react';

interface CompanionCustomizerProps {
  companion: CompanionConfig;
  onSaveCompanion: (updated: CompanionConfig) => void;
  onClose: () => void;
}

const SKIN_TONES = [
  { name: 'Porcelain', hex: '#fdf0d5' },
  { name: 'Warm Beige', hex: '#f5d0b5' },
  { name: 'Golden Honey', hex: '#e0a96d' },
  { name: 'Olive Bronze', hex: '#c68b59' },
  { name: 'Deep Espresso', hex: '#5c3d2e' },
];

const HAIR_COLORS = [
  { name: 'Midnight Jet', hex: '#1e1b18' },
  { name: 'Chestnut Brown', hex: '#582f0e' },
  { name: 'Platinum Silver', hex: '#e2e8f0' },
  { name: 'Auburn Ember', hex: '#b7094c' },
  { name: 'Cyber Cyan', hex: '#00f0ff' },
  { name: 'Golden Blonde', hex: '#ffb703' },
];

const OUTFIT_THEMES = [
  { name: 'Noir Trench', hex: '#2b2d42', accent: '#d90429' },
  { name: 'Cyberpunk Stealth', hex: '#0f172a', accent: '#00f0ff' },
  { name: 'Field Operative', hex: '#334155', accent: '#22c55e' },
  { name: 'Crimson Velvet', hex: '#4a0404', accent: '#f59e0b' },
  { name: 'Arctic Ranger', hex: '#e2e8f0', accent: '#3b82f6' },
];

export const CompanionCustomizer: React.FC<CompanionCustomizerProps> = ({
  companion,
  onSaveCompanion,
  onClose,
}) => {
  const [draft, setDraft] = useState<CompanionConfig>({ ...companion });
  const [activeTab, setActiveTab] = useState<'appearance' | 'role' | 'dialogue'>('appearance');

  const handleSave = () => {
    onSaveCompanion(draft);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Companion & Partner Studio</h2>
              <p className="text-xs text-slate-400">Personalize your realistic co-op ally, stats, appearance and AI responses</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800"
          >
            Cancel
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-950/30">
          <button
            onClick={() => setActiveTab('appearance')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center space-x-2 transition-all ${
              activeTab === 'appearance'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Appearance & Style</span>
          </button>
          <button
            onClick={() => setActiveTab('role')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center space-x-2 transition-all ${
              activeTab === 'role'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Combat Role & Archetype</span>
          </button>
          <button
            onClick={() => setActiveTab('dialogue')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center space-x-2 transition-all ${
              activeTab === 'dialogue'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Voice & Dialogue Lines</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          {activeTab === 'appearance' && (
            <div className="space-y-5">
              {/* Name & Title */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Companion Name</label>
                  <input
                    type="text"
                    value={draft.name}
                    onChange={e => setDraft({ ...draft, name: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Title / Specialty</label>
                  <input
                    type="text"
                    value={draft.title}
                    onChange={e => setDraft({ ...draft, title: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Hairstyle */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Hair Style</label>
                <div className="grid grid-cols-4 gap-2.5">
                  {(['bob', 'long_waves', 'ponytail', 'short_pixie'] as const).map(style => (
                    <button
                      key={style}
                      onClick={() => setDraft({ ...draft, hairStyle: style })}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize border transition-all ${
                        draft.hairStyle === style
                          ? 'bg-cyan-600/30 border-cyan-400 text-cyan-200 shadow-md'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {style.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Color */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Hair Tone</label>
                <div className="flex flex-wrap gap-2.5">
                  {HAIR_COLORS.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setDraft({ ...draft, hairColor: c.hex })}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${
                        draft.hairColor === c.hex ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-700'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20 shadow" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin Tone */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Complexion Tone</label>
                <div className="flex flex-wrap gap-2.5">
                  {SKIN_TONES.map(s => (
                    <button
                      key={s.name}
                      onClick={() => setDraft({ ...draft, skinTone: s.hex })}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-medium ${
                        draft.skinTone === s.hex ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-700'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20 shadow" style={{ backgroundColor: s.hex }} />
                      <span>{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Outfit Palette */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Attire & Armor Theme</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {OUTFIT_THEMES.map(theme => (
                    <button
                      key={theme.name}
                      onClick={() => setDraft({ ...draft, outfitColor: theme.hex, accentColor: theme.accent })}
                      className={`p-2.5 rounded-xl border text-left flex items-center space-x-2.5 text-xs font-medium transition-all ${
                        draft.outfitColor === theme.hex ? 'border-cyan-400 bg-cyan-950/20 shadow-md' : 'border-slate-700 bg-slate-800/60'
                      }`}
                    >
                      <div className="flex -space-x-1">
                        <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.hex }} />
                        <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: theme.accent }} />
                      </div>
                      <span className="truncate">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'role' && (
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Tactical Specialty</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    id: 'tactical_vanguard',
                    name: 'Tactical Vanguard',
                    desc: 'Leads from the front, draws enemy patrol aggro, provides defensive barriers.',
                    icon: Shield,
                  },
                  {
                    id: 'scout_sniper',
                    name: 'Scout Specialist',
                    desc: 'Highlights distant clues, disarms laser traps, reveals hidden routes.',
                    icon: Sword,
                  },
                  {
                    id: 'support_medic',
                    name: 'Support Field Medic',
                    desc: 'Periodically restores player HP and boosts dash regeneration.',
                    icon: Heart,
                  },
                  {
                    id: 'infiltrator',
                    name: 'Shadow Infiltrator',
                    desc: 'Unlocks cipher terminals, hacks surveillance drones, and gathers secrets.',
                    icon: Sparkles,
                  },
                ].map(r => {
                  const Icon = r.icon;
                  const isSelected = draft.combatRole === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setDraft({ ...draft, combatRole: r.id as CompanionConfig['combatRole'] })}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-950/40 shadow-lg'
                          : 'border-slate-700 bg-slate-800/50 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 mb-1.5">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <span className="text-sm font-bold text-white">{r.name}</span>
                      </div>
                      <p className="text-xs text-slate-300">{r.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'dialogue' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Mission Start Greeting</label>
                <textarea
                  rows={2}
                  value={draft.dialogueGreet}
                  onChange={e => setDraft({ ...draft, dialogueGreet: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Combat Action Callout</label>
                <textarea
                  rows={2}
                  value={draft.dialogueCombat}
                  onChange={e => setDraft({ ...draft, dialogueCombat: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Mystery Clue Discovered Line</label>
                <textarea
                  rows={2}
                  value={draft.dialogueClueFound}
                  onChange={e => setDraft({ ...draft, dialogueClueFound: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Active Companion: <span className="text-cyan-300 font-semibold">{draft.name}</span> ({draft.title})
          </div>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-lg transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Apply Companion</span>
          </button>
        </div>
      </div>
    </div>
  );
};
