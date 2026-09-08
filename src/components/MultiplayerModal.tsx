import React, { useState } from 'react';
import { Users, Wifi, Shield, Zap, CheckCircle2, Copy, Play } from 'lucide-react';
import { GameLevel } from '../types/game';

interface MultiplayerModalProps {
  level: GameLevel;
  onLaunchCoop: (role: 'host' | 'client') => void;
  onClose: () => void;
}

export const MultiplayerModal: React.FC<MultiplayerModalProps> = ({
  level,
  onLaunchCoop,
  onClose,
}) => {
  const [roomCode, setRoomCode] = useState('NOVA-7821');
  const [selectedRole, setSelectedRole] = useState<'host' | 'client'>('host');
  const [copied, setCopied] = useState(false);
  const [partnerStatus, setPartnerStatus] = useState<'waiting' | 'connected'>('connected');

  const handleCopy = () => {
    navigator.clipboard?.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-cyan-600 flex items-center justify-center text-white shadow-lg">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Co-op Mission Operations</h2>
              <p className="text-xs text-slate-400">Team up for synchronized platforming, mystery solving, and tactical combat</p>
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
        <div className="p-6 space-y-6 text-slate-200">
          {/* Room Code Share */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Encrypted Room Code</span>
              <span className="text-xl font-mono font-black text-cyan-400 tracking-wider">{roomCode}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-slate-200 transition-all"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Connected Operatives */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Mission Roster (2-Player Co-op)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* Player 1: Host */}
              <div
                onClick={() => setSelectedRole('host')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedRole === 'host'
                    ? 'border-cyan-400 bg-cyan-950/30 ring-1 ring-cyan-500/50'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-bold text-white">Player 1 (Lead)</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-xs text-slate-300">Controls protagonist, leads platforming routes & interacts with clues.</p>
              </div>

              {/* Player 2: Partner */}
              <div
                onClick={() => setSelectedRole('client')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedRole === 'client'
                    ? 'border-cyan-400 bg-cyan-950/30 ring-1 ring-cyan-500/50'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white">Player 2 ({level.companion.name})</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <p className="text-xs text-slate-300">Controls companion ally, handles combat vanguard & barrier support.</p>
              </div>
            </div>
          </div>

          {/* Synchronized Objectives */}
          <div className="bg-slate-850 border border-slate-800 rounded-xl p-4 space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Active Co-op Mission Goals
            </span>
            <div className="flex items-start space-x-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span><strong>Primary:</strong> {level.targetObjective}</span>
            </div>
            <div className="flex items-start space-x-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span><strong>Co-op Synergy:</strong> P1 and P2 share a combined combo attack meter and revives on fall!</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-emerald-400">
            <Wifi className="w-3.5 h-3.5" />
            <span>Low Latency Netcode (18ms)</span>
          </div>
          <button
            onClick={() => {
              onLaunchCoop(selectedRole);
              onClose();
            }}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Launch Co-op Session</span>
          </button>
        </div>
      </div>
    </div>
  );
};
