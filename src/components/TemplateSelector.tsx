import React from 'react';
import { GameLevel } from '../types/game';
import { DEFAULT_TEMPLATES } from '../utils/defaultGames';
import { Sparkles, Compass, Shield, Heart, Zap, FolderOpen, Plus } from 'lucide-react';

interface TemplateSelectorProps {
  currentLevelId: string;
  onSelectTemplate: (level: GameLevel) => void;
  onNewBlank: () => void;
  onClose: () => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  currentLevelId,
  onSelectTemplate,
  onNewBlank,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Game Worlds & Templates</h2>
              <p className="text-xs text-slate-400">Load ready-to-play 3D platformers or start a fresh world</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DEFAULT_TEMPLATES.map(tpl => {
              const isCurrent = tpl.id === currentLevelId;
              return (
                <div
                  key={tpl.id}
                  onClick={() => {
                    onSelectTemplate(tpl);
                    onClose();
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'border-cyan-400 bg-cyan-950/30 ring-1 ring-cyan-500/40 shadow-lg'
                      : 'border-slate-800 bg-slate-850 hover:bg-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {tpl.genre.replace('_', ' ')}
                      </span>
                      <span className="text-[10px] font-semibold text-cyan-400">
                        {tpl.weather.replace('_', ' ')}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1">{tpl.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">{tpl.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Partner: <strong className="text-slate-200">{tpl.companion.name}</strong></span>
                    <span className="font-semibold text-cyan-300">
                      {isCurrent ? 'Current' : 'Load Level'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Blank Project option */}
          <div
            onClick={() => {
              onNewBlank();
              onClose();
            }}
            className="p-4 rounded-2xl border-2 border-dashed border-slate-700 hover:border-cyan-500 bg-slate-900/40 hover:bg-cyan-950/20 cursor-pointer flex items-center justify-center space-x-3 transition-all text-slate-300 hover:text-white"
          >
            <Plus className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-sm">Create New Blank 3D Level</span>
          </div>
        </div>
      </div>
    </div>
  );
};
