import React, { useState } from 'react';
import { NarrativeNode, GameLevel } from '../types/game';
import { GitFork, Plus, Trash2, MessageSquare, Check, Sparkles, AlertCircle } from 'lucide-react';

interface StoryBranchEditorProps {
  level: GameLevel;
  onSaveStory: (nodes: NarrativeNode[], initialNodeId: string) => void;
  onClose: () => void;
}

export const StoryBranchEditor: React.FC<StoryBranchEditorProps> = ({
  level,
  onSaveStory,
  onClose,
}) => {
  const [nodes, setNodes] = useState<NarrativeNode[]>(JSON.parse(JSON.stringify(level.storyNodes || [])));
  const [initialNodeId, setInitialNodeId] = useState<string>(level.initialNodeId || (nodes[0]?.id || ''));
  const [selectedNodeId, setSelectedNodeId] = useState<string>(level.initialNodeId || (nodes[0]?.id || ''));

  const currentNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  const handleAddNode = () => {
    const newId = `node_${Date.now()}`;
    const newNode: NarrativeNode = {
      id: newId,
      speaker: 'Agent Evelyn Cross',
      text: 'New discovery node. State your investigative findings here.',
      choices: [
        {
          text: 'Investigate further',
          nextNodeId: newId,
        },
      ],
    };
    setNodes([...nodes, newNode]);
    setSelectedNodeId(newId);
  };

  const handleDeleteNode = (id: string) => {
    if (nodes.length <= 1) return;
    const remaining = nodes.filter(n => n.id !== id);
    setNodes(remaining);
    if (selectedNodeId === id) {
      setSelectedNodeId(remaining[0].id);
    }
  };

  const handleUpdateCurrent = (updated: Partial<NarrativeNode>) => {
    if (!currentNode) return;
    setNodes(nodes.map(n => (n.id === currentNode.id ? { ...n, ...updated } : n)));
  };

  const handleAddChoice = () => {
    if (!currentNode) return;
    const newChoice = {
      text: 'New choice option',
      nextNodeId: nodes[0]?.id || currentNode.id,
    };
    handleUpdateCurrent({ choices: [...currentNode.choices, newChoice] });
  };

  const handleUpdateChoice = (index: number, field: string, val: string | boolean) => {
    if (!currentNode) return;
    const updatedChoices = currentNode.choices.map((c, i) => {
      if (i === index) {
        return { ...c, [field]: val };
      }
      return c;
    });
    handleUpdateCurrent({ choices: updatedChoices });
  };

  const handleDeleteChoice = (index: number) => {
    if (!currentNode) return;
    const updatedChoices = currentNode.choices.filter((_, i) => i !== index);
    handleUpdateCurrent({ choices: updatedChoices });
  };

  const handleSave = () => {
    onSaveStory(nodes, initialNodeId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-600 flex items-center justify-center text-white shadow-lg">
              <GitFork className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Branching Narrative & Mystery Tree</h2>
              <p className="text-xs text-slate-400">Design crime thriller interrogations, clue deductions, and RPG quest branches</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        {/* Workspace Body: 2 Columns */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Column: Node List */}
          <div className="w-1/3 border-r border-slate-800 p-4 overflow-y-auto space-y-2 bg-slate-950/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Story Dialogue Nodes</span>
              <button
                onClick={handleAddNode}
                className="flex items-center space-x-1 px-2.5 py-1 bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white rounded-lg text-xs font-semibold transition-all border border-cyan-500/40"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Node</span>
              </button>
            </div>

            {nodes.map(node => {
              const isSelected = node.id === currentNode?.id;
              const isStart = node.id === initialNodeId;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-950/40 shadow-md'
                      : 'border-slate-800 bg-slate-850 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-cyan-300 truncate max-w-[130px]">{node.speaker}</span>
                    {isStart && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded">
                        START
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2">{node.text}</p>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{node.choices.length} Choice Branch{node.choices.length !== 1 ? 'es' : ''}</span>
                    <span className="font-mono text-[10px]">{node.id}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Details & Choices Editor */}
          {currentNode ? (
            <div className="w-2/3 p-6 overflow-y-auto space-y-5 text-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-1 rounded">ID: {currentNode.id}</span>
                  {currentNode.id !== initialNodeId && (
                    <button
                      onClick={() => setInitialNodeId(currentNode.id)}
                      className="text-xs text-amber-400 hover:text-amber-300 underline font-medium"
                    >
                      Set as Opening Dialogue
                    </button>
                  )}
                </div>
                {nodes.length > 1 && (
                  <button
                    onClick={() => handleDeleteNode(currentNode.id)}
                    className="flex items-center space-x-1 text-xs text-rose-400 hover:text-rose-300"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Node</span>
                  </button>
                )}
              </div>

              {/* Speaker & Text */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Speaker Name</label>
                  <input
                    type="text"
                    value={currentNode.speaker}
                    onChange={e => handleUpdateCurrent({ speaker: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. Agent Evelyn Cross, Suspect Vance, Chief Miller"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Dialogue / Narrative Beat</label>
                  <textarea
                    rows={3}
                    value={currentNode.text}
                    onChange={e => handleUpdateCurrent({ text: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Enter what this character says or the mystery revelation..."
                  />
                </div>
              </div>

              {/* Branching Choices */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Interactive Player Choices ({currentNode.choices.length})
                  </label>
                  <button
                    onClick={handleAddChoice}
                    className="flex items-center space-x-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Choice</span>
                  </button>
                </div>

                {currentNode.choices.map((choice, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-700/80 bg-slate-800/60 space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-600/30 text-cyan-300 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <input
                        type="text"
                        value={choice.text}
                        onChange={e => handleUpdateChoice(idx, 'text', e.target.value)}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                        placeholder="Player choice response button..."
                      />
                      <button
                        onClick={() => handleDeleteChoice(idx)}
                        className="text-slate-400 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 mb-1 block">Routes to Next Node:</span>
                        <select
                          value={choice.nextNodeId}
                          onChange={e => handleUpdateChoice(idx, 'nextNodeId', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                        >
                          {nodes.map(n => (
                            <option key={n.id} value={n.id}>
                              {n.speaker}: {n.text.slice(0, 24)}...
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <span className="text-slate-400 mb-1 block">Unlocks Clue / Action (Optional):</span>
                        <input
                          type="text"
                          value={choice.givesClue || ''}
                          onChange={e => handleUpdateChoice(idx, 'givesClue', e.target.value)}
                          placeholder="e.g. Murder Weapon Found"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Total Story Nodes: <span className="text-cyan-300 font-semibold">{nodes.length}</span>
          </div>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-lg transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Apply Story Tree</span>
          </button>
        </div>
      </div>
    </div>
  );
};
