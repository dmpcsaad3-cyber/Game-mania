import React, { useState } from 'react';
import { Sparkles, Wand2, X, AlertCircle, RefreshCw, Layers, Compass, Play, CheckCircle2 } from 'lucide-react';
import { GameLevel } from '../types/game';

interface PromptStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLevelGenerated: (level: GameLevel, autoPlay: boolean) => void;
}

const EXAMPLE_PROMPTS = [
  {
    title: 'Neon Cyberpunk Parkour',
    prompt: 'Futuristic cyberpunk city with neon platforms, laser security traps, flying drones, and high energy cores to collect.',
    badge: 'Sci-Fi Action',
  },
  {
    title: 'Haunted Castle Mystery',
    prompt: 'Spooky haunted castle ruins with eerie fog, hidden detective clues, stone pillars, moving bridges, and a secret exit.',
    badge: 'Horror Mystery',
  },
  {
    title: 'Volcanic Temple Escape',
    prompt: 'Dangerous volcanic dungeon with lava hazards, spike traps, moving platforms, and an ancient artifact gem at the summit.',
    badge: 'Adventure',
  },
  {
    title: 'Sunny Bounce Island',
    prompt: 'Bright playful sky island with high-jump spring bouncy pads, spinning gold coins, wooden ramps, and friendly companion.',
    badge: 'Platformer',
  },
  {
    title: 'Urdu / Hindi Custom',
    prompt: 'Ek futuristic game jisme neon platforms hon, laser traps aur coins collect karke portal tak pochna ho.',
    badge: 'Multi-lingual',
  },
];

export const PromptStudioModal: React.FC<PromptStudioModalProps> = ({
  isOpen,
  onClose,
  onLevelGenerated,
}) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successSource, setSuccessSource] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async (selectedPrompt?: string) => {
    const textToUse = (selectedPrompt || prompt).trim();
    if (!textToUse) {
      setError('Please type an idea or select an example prompt below.');
      return;
    }

    setError(null);
    setIsGenerating(true);
    setGenerationStep('Analyzing game concept & theme...');

    try {
      setTimeout(() => {
        setGenerationStep('Synthesizing 3D platforms, hazards, & collectibles...');
      }, 700);

      setTimeout(() => {
        setGenerationStep('Calibrating lighting, weather, and AI companion dialogue...');
      }, 1500);

      const response = await fetch('/api/generate-level', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToUse }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      if (!data.level) {
        throw new Error('Received invalid game data from generator');
      }

      setGenerationStep('World generated! Loading into 3D Studio...');
      setSuccessSource(data.source === 'gemini' ? 'Gemini 3.8 Flash AI' : 'Procedural AI Engine');

      setTimeout(() => {
        setIsGenerating(false);
        setGenerationStep(null);
        onLevelGenerated(data.level, false);
        onClose();
      }, 600);
    } catch (err: any) {
      console.error('Prompt generation failed:', err);
      setError(err?.message || 'Failed to generate level. Please try again.');
      setIsGenerating(false);
      setGenerationStep(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-0.5 shadow-lg flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>Prompt-Based 3D Game Creator</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  AI Powered
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Koi bhi game ka idea likhein (Urdu / Hindi / English) — AI khud poora 3D world banayega!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-200">
          {/* Main Prompt Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Apna Game Idea / Prompt Likhein:</span>
              <span className="text-[11px] text-slate-500">Natural language (No coding required)</span>
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                rows={3}
                placeholder="e.g. Ek scary ghost castle banao with heavy fog, floating platforms, laser traps aur coins..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none shadow-inner"
                disabled={isGenerating}
              />
              {prompt && !isGenerating && (
                <button
                  onClick={() => setPrompt('')}
                  className="absolute right-3 top-3 text-xs text-slate-500 hover:text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Error notice */}
          {error && (
            <div className="flex items-center space-x-2 text-xs text-rose-400 bg-rose-950/50 border border-rose-800/60 p-3 rounded-xl">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Quick Example Chips */}
          <div className="space-y-2.5">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ya in 1-Click Prompts mein se select karein:</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EXAMPLE_PROMPTS.map((ex, i) => (
                <button
                  key={i}
                  disabled={isGenerating}
                  onClick={() => {
                    setPrompt(ex.prompt);
                    handleGenerate(ex.prompt);
                  }}
                  className="text-left p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {ex.title}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {ex.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {ex.prompt}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Generating Status Bar */}
          {isGenerating && (
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 space-y-3 animate-pulse">
              <div className="flex items-center space-x-3 text-cyan-300 text-xs font-semibold">
                <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                <span>{generationStep}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full w-3/4 animate-[pulse_1s_ease-in-out_infinite]" />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            ⚡ 100% No-Code: Creates 3D physics, traps, music, companion, and quests automatically.
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              disabled={isGenerating}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleGenerate()}
              disabled={isGenerating}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold text-xs shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating 3D Game...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate 3D Game with AI</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
