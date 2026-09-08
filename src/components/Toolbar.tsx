import React from 'react';
import {
  Box,
  Layers,
  CloudRain,
  Sun,
  Moon,
  CloudFog,
  Users,
  GitFork,
  Play,
  Square,
  Sparkles,
  Download,
  Upload,
  RotateCcw,
  Volume2,
  VolumeX,
  Smartphone,
  Wand2,
} from 'lucide-react';
import { GameLevel, GameObjectType, WeatherType } from '../types/game';

interface ToolbarProps {
  mode: 'build' | 'play';
  onToggleMode: () => void;
  level: GameLevel;
  onUpdateLevel: (updated: Partial<GameLevel>) => void;
  onAddObject: (type: GameObjectType) => void;
  onOpenCompanionCustomizer: () => void;
  onOpenStoryEditor: () => void;
  onOpenMultiplayer: () => void;
  onResetLevel: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onExport: () => void;
  onImport: () => void;
  onOpenMobileAppModal: () => void;
  onOpenPromptStudio: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  mode,
  onToggleMode,
  level,
  onUpdateLevel,
  onAddObject,
  onOpenCompanionCustomizer,
  onOpenStoryEditor,
  onOpenMultiplayer,
  onResetLevel,
  isMuted,
  onToggleMute,
  onExport,
  onImport,
  onOpenMobileAppModal,
  onOpenPromptStudio,
}) => {
  const WEATHER_OPTIONS: { id: WeatherType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'rain_storm', label: 'Rain Storm', icon: CloudRain },
    { id: 'neon_night', label: 'Neon Cyber Night', icon: Moon },
    { id: 'mystery_fog', label: 'Eerie Mystery Fog', icon: CloudFog },
    { id: 'clear_day', label: 'Sunny Day', icon: Sun },
    { id: 'golden_hour', label: 'Golden Hour', icon: Sun },
    { id: 'heavy_snow', label: 'Heavy Snow', icon: CloudRain },
    { id: 'crimson_twilight', label: 'Crimson Twilight', icon: Moon },
  ];

  return (
    <header className="h-14 bg-slate-900/95 border-b border-slate-800 px-4 flex items-center justify-between text-slate-200 z-40 backdrop-blur-md">
      {/* Brand & Mode Indicator */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg text-sm">
          3D
        </div>
        <div className="hidden sm:block">
          <h1 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
            <span>OmniCraft Studio</span>
            <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {level.genre.replace('_', ' ')}
            </span>
          </h1>
        </div>

        {/* Play / Build Toggle Button */}
        <button
          onClick={onToggleMode}
          className={`flex items-center space-x-2 px-4 py-1.5 rounded-xl font-bold text-xs shadow-lg transition-all ${
            mode === 'play'
              ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
        >
          {mode === 'play' ? (
            <>
              <Square className="w-3.5 h-3.5 fill-white" />
              <span>EXIT PLAY</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>TEST PLAY</span>
            </>
          )}
        </button>

        {/* AI Prompt Studio Button */}
        <button
          onClick={onOpenPromptStudio}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
          title="Prompt se game banayein (AI Level Creator)"
        >
          <Wand2 className="w-3.5 h-3.5 text-cyan-300" />
          <span>AI Prompt Studio</span>
        </button>
      </div>

      {/* Center: Dynamic Weather & Lighting selector */}
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800">
          {WEATHER_OPTIONS.slice(0, 4).map(w => {
            const Icon = w.icon;
            const isSelected = level.weather === w.id;
            return (
              <button
                key={w.id}
                onClick={() => onUpdateLevel({ weather: w.id })}
                title={w.label}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
                  isSelected
                    ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">{w.label}</span>
              </button>
            );
          })}
        </div>

        {/* Companion Customizer Trigger */}
        <button
          onClick={onOpenCompanionCustomizer}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all shadow"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Companion ({level.companion.name.split(' ')[0]})</span>
        </button>

        {/* Branching Story Editor Trigger */}
        <button
          onClick={onOpenStoryEditor}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-all shadow"
        >
          <GitFork className="w-3.5 h-3.5 text-rose-400" />
          <span className="hidden sm:inline">Narrative Tree</span>
        </button>

        {/* Co-op Multiplayer Trigger */}
        <button
          onClick={onOpenMultiplayer}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-emerald-300 transition-all shadow"
        >
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Co-op Mission</span>
        </button>
      </div>

      {/* Right: Sound, Reset, Export */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleMute}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-all"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
        </button>

        <button
          onClick={onResetLevel}
          title="Reset Player & Stage"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-all"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={onExport}
          title="Export Game Project JSON"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-all"
        >
          <Download className="w-4 h-4" />
        </button>

        {/* Get APK / Mobile Phone Button */}
        <button
          onClick={onOpenMobileAppModal}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg transition-all hover:scale-105"
          title="Build & Install APK on Android Phone"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Get APK / Phone</span>
        </button>
      </div>
    </header>
  );
};
