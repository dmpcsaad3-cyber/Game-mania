import React, { useState } from 'react';
import { Heart, Search, Award, Shield, AlertTriangle, RotateCcw, X, FileText } from 'lucide-react';
import { GameLevel } from '../types/game';

interface DiscoveredClue {
  title: string;
  desc: string;
  time: string;
}

interface PlayHUDProps {
  level: GameLevel;
  playerHp: number;
  maxHp: number;
  coinsCount: number;
  clues: DiscoveredClue[];
  isGameOver: boolean;
  isVictory: boolean;
  onRestart: () => void;
  onExitPlay: () => void;
}

export const PlayHUD: React.FC<PlayHUDProps> = ({
  level,
  playerHp,
  maxHp,
  coinsCount,
  clues,
  isGameOver,
  isVictory,
  onRestart,
  onExitPlay,
}) => {
  const [showDossier, setShowDossier] = useState(false);

  const hpPercent = Math.max(0, Math.min(100, (playerHp / maxHp) * 100));

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 select-none">
      {/* Top Banner: Status & Objectives */}
      <div className="flex items-start justify-between">
        {/* Player Stats (HP & Shield) */}
        <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-2xl p-3.5 shadow-2xl pointer-events-auto min-w-[240px]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Heart className={`w-4 h-4 ${hpPercent < 30 ? 'text-rose-500 animate-ping' : 'text-rose-400'}`} />
              <span className="text-xs font-bold text-slate-200">OPERATIVE HEALTH</span>
            </div>
            <span className="text-xs font-mono font-bold text-slate-300">{Math.round(playerHp)} / {maxHp}</span>
          </div>
          {/* Health bar */}
          <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div
              className={`h-full transition-all duration-300 ${
                hpPercent > 50 ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : hpPercent > 25 ? 'bg-amber-500' : 'bg-rose-600'
              }`}
              style={{ width: `${hpPercent}%` }}
            />
          </div>

          {/* Collectibles & Clues Counter */}
          <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
            <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>{coinsCount} Coins</span>
            </div>

            {/* Evidence Clues Button */}
            <button
              onClick={() => setShowDossier(true)}
              className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 font-semibold text-[11px] transition-all"
            >
              <Search className="w-3 h-3" />
              <span>Dossier ({clues.length})</span>
            </button>
          </div>
        </div>

        {/* Center Mission Objective */}
        <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-2xl px-5 py-2.5 shadow-2xl max-w-md text-center hidden md:block">
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">Active Mission Goal</span>
          <p className="text-xs text-slate-200 font-medium">{level.targetObjective}</p>
        </div>

        {/* Quick Exit Play Mode */}
        <button
          onClick={onExitPlay}
          className="pointer-events-auto bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-md transition-all"
        >
          Exit Play
        </button>
      </div>

      {/* Desktop Controls Legend (Bottom Center) */}
      <div className="self-center bg-slate-950/70 border border-slate-800/80 px-4 py-1.5 rounded-full text-[11px] text-slate-400 hidden sm:flex items-center space-x-4 backdrop-blur-md">
        <span><strong className="text-cyan-300">WASD:</strong> Move</span>
        <span><strong className="text-cyan-300">Space:</strong> Jump</span>
        <span><strong className="text-cyan-300">Shift:</strong> Dash</span>
        <span><strong className="text-cyan-300">F:</strong> Combat Strike</span>
        <span><strong className="text-cyan-300">C:</strong> Crouch/Squeeze</span>
      </div>

      {/* Crime Clues Dossier Modal */}
      {showDossier && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white text-base">Forensics Evidence Dossier</h3>
              </div>
              <button onClick={() => setShowDossier(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {clues.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-6 text-center">
                No clues discovered yet. Explore the platforms and investigate glowing evidence markers!
              </p>
            ) : (
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {clues.map((clue, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-amber-400 text-xs">{clue.title}</span>
                      <span className="text-[10px] text-slate-500">{clue.time}</span>
                    </div>
                    <p className="text-xs text-slate-300">{clue.desc}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowDossier(false)}
              className="mt-5 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold"
            >
              Resume Investigation
            </button>
          </div>
        </div>
      )}

      {/* Game Over Overlay */}
      {isGameOver && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto animate-in fade-in">
          <div className="bg-slate-900 border border-rose-500/50 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-rose-500 flex items-center justify-center mx-auto mb-3 text-rose-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-rose-400 mb-1">MISSION FAILED</h3>
            <p className="text-xs text-slate-300 mb-6">Operative fell from the grid or sustained critical hazard damage.</p>
            <div className="flex items-center space-x-3">
              <button
                onClick={onRestart}
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs shadow-lg transition-all flex items-center justify-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Level</span>
              </button>
              <button
                onClick={onExitPlay}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs"
              >
                Back to Studio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Victory Overlay */}
      {isVictory && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto animate-in zoom-in-95">
          <div className="bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-400 flex items-center justify-center mx-auto mb-3 text-cyan-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-cyan-300 mb-1">EXTRACTION COMPLETE!</h3>
            <p className="text-xs text-slate-300 mb-4">You solved the case and reached the extraction zone successfully!</p>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 mb-6 flex justify-around">
              <div>
                <span className="block text-[10px] text-slate-500 uppercase">Clues Found</span>
                <span className="font-bold text-amber-400 text-sm">{clues.length}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase">Coins Collected</span>
                <span className="font-bold text-emerald-400 text-sm">{coinsCount}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onRestart}
                className="flex-1 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs shadow-lg transition-all"
              >
                Replay Mission
              </button>
              <button
                onClick={onExitPlay}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs"
              >
                Studio Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
