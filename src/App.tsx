import React, { useState, useCallback, useRef } from 'react';
import { GameLevel, GameObject, GameObjectType, NarrativeNode, CompanionConfig } from './types/game';
import { DEFAULT_TEMPLATES } from './utils/defaultGames';
import { soundEngine } from './utils/audioSynthesizer';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Toolbar } from './components/Toolbar';
import { Inspector } from './components/Inspector';
import { TouchControls } from './components/TouchControls';
import { PlayHUD } from './components/PlayHUD';
import { CompanionCustomizer } from './components/CompanionCustomizer';
import { StoryBranchEditor } from './components/StoryBranchEditor';
import { MultiplayerModal } from './components/MultiplayerModal';
import { TemplateSelector } from './components/TemplateSelector';
import { MobileAppModal } from './components/MobileAppModal';

export default function App() {
  // Main Level State
  const [level, setLevel] = useState<GameLevel>(DEFAULT_TEMPLATES[0]);
  const [mode, setMode] = useState<'build' | 'play'>('build');
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);

  // Modals
  const [showCompanionModal, setShowCompanionModal] = useState(false);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showMultiplayerModal, setShowMultiplayerModal] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showMobileAppModal, setShowMobileAppModal] = useState(false);

  // Gameplay State
  const [playerHp, setPlayerHp] = useState(100);
  const [coinsCount, setCoinsCount] = useState(0);
  const [discoveredClues, setDiscoveredClues] = useState<{ title: string; desc: string; time: string }[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [companionSpeech, setCompanionSpeech] = useState<string | null>(level.companion.dialogueGreet);

  // Touch Controller State
  const [touchInput, setTouchInput] = useState({
    moveX: 0,
    moveZ: 0,
    isJumping: false,
    isAttacking: false,
    isDashing: false,
    isCrouching: false,
    isGripping: false,
    isInteracting: false,
  });

  const selectedObject = level.objects.find(o => o.id === selectedObjectId) || null;

  // Sound Engine Mute toggle
  const handleToggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      soundEngine.setMuted(next);
      return next;
    });
  }, []);

  // Update object property in level
  const handleUpdateObject = useCallback((updated: GameObject) => {
    setLevel(prev => ({
      ...prev,
      objects: prev.objects.map(o => (o.id === updated.id ? updated : o)),
    }));
  }, []);

  // Delete object
  const handleDeleteObject = useCallback((id: string) => {
    setLevel(prev => ({
      ...prev,
      objects: prev.objects.filter(o => o.id !== id),
    }));
    setSelectedObjectId(null);
  }, []);

  // Duplicate object
  const handleDuplicateObject = useCallback((obj: GameObject) => {
    const newId = `obj_${Date.now()}`;
    const duplicated: GameObject = {
      ...obj,
      id: newId,
      name: `${obj.name} (Copy)`,
      position: [obj.position[0] + 1.5, obj.position[1], obj.position[2] + 1.5],
    };
    setLevel(prev => ({
      ...prev,
      objects: [...prev.objects, duplicated],
    }));
    setSelectedObjectId(newId);
  }, []);

  // Add new object to scene
  const handleAddObject = useCallback((type: GameObjectType) => {
    const newId = `obj_${Date.now()}`;
    let category: GameObject['category'] = 'platforms';
    let scale: [number, number, number] = [4, 0.6, 4];
    let color = '#3b82f6';

    if (type.startsWith('platform') || type === 'moving_platform' || type === 'bouncy_pad') {
      category = 'platforms';
      if (type === 'moving_platform') color = '#f59e0b';
      if (type === 'bouncy_pad') {
        scale = [2, 0.4, 2];
        color = '#ec4899';
      }
    } else if (type.startsWith('hazard')) {
      category = 'hazards';
      scale = [2, 0.4, 2];
      color = '#ef4444';
    } else if (type.startsWith('clue') || type === 'keycard') {
      category = 'mystery';
      scale = [0.8, 0.8, 0.8];
      color = '#fbbf24';
    } else if (type.startsWith('enemy')) {
      category = 'characters';
      scale = [1, 1.8, 1];
      color = '#8b5cf6';
    } else if (type.includes('lamp') || type.includes('torch')) {
      category = 'lights';
      scale = [0.6, 3, 0.6];
      color = '#f59e0b';
    } else {
      category = 'items';
      scale = [1, 1, 1];
      color = '#14b8a6';
    }

    const newObj: GameObject = {
      id: newId,
      name: type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      type,
      category,
      position: [0, 2, 8],
      rotation: [0, 0, 0],
      scale,
      color,
    };

    setLevel(prev => ({
      ...prev,
      objects: [...prev.objects, newObj],
    }));
    setSelectedObjectId(newId);
  }, []);

  // Reset stage
  const handleResetLevel = useCallback(() => {
    setPlayerHp(100);
    setCoinsCount(0);
    setDiscoveredClues([]);
    setIsGameOver(false);
    setIsVictory(false);
    setCompanionSpeech(level.companion.dialogueGreet);
  }, [level.companion.dialogueGreet]);

  // Mode Toggle
  const handleToggleMode = useCallback(() => {
    setMode(prev => {
      const next = prev === 'build' ? 'play' : 'build';
      if (next === 'play') {
        handleResetLevel();
        // Companion speaks mission greeting
        setCompanionSpeech(level.companion.dialogueGreet);
        setTimeout(() => setCompanionSpeech(null), 5000);
      } else {
        setCompanionSpeech(null);
      }
      return next;
    });
  }, [handleResetLevel, level.companion.dialogueGreet]);

  // Gameplay Events
  const handleClueDiscovered = useCallback((title: string, desc: string) => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setDiscoveredClues(prev => [{ title, desc, time: timeStr }, ...prev]);
    setCompanionSpeech(level.companion.dialogueClueFound);
    setTimeout(() => setCompanionSpeech(null), 4000);
  }, [level.companion.dialogueClueFound]);

  const handleCoinsCollected = useCallback((count: number) => {
    setCoinsCount(prev => prev + count);
  }, []);

  const handleEnemyDefeated = useCallback((enemyId: string) => {
    setCompanionSpeech(level.companion.dialogueCombat);
    setTimeout(() => setCompanionSpeech(null), 3000);
  }, [level.companion.dialogueCombat]);

  const handlePlayerDamage = useCallback((amount: number) => {
    setPlayerHp(prev => {
      const next = prev - amount;
      if (next <= 0) {
        setIsGameOver(true);
        return 0;
      }
      return next;
    });
  }, []);

  // Export JSON
  const handleExport = useCallback(() => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(level, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${level.id}_project.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }, [level]);

  // Import JSON
  const handleImport = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const parsed = JSON.parse(ev.target?.result as string);
          if (parsed.objects && parsed.companion) {
            setLevel(parsed);
            handleResetLevel();
          }
        } catch {
          alert('Invalid project file format.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, [handleResetLevel]);

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans select-none">
      {/* Top Application Studio Toolbar */}
      <Toolbar
        mode={mode}
        onToggleMode={handleToggleMode}
        level={level}
        onUpdateLevel={up => setLevel(prev => ({ ...prev, ...up }))}
        onAddObject={handleAddObject}
        onOpenCompanionCustomizer={() => setShowCompanionModal(true)}
        onOpenStoryEditor={() => setShowStoryModal(true)}
        onOpenMultiplayer={() => setShowMultiplayerModal(true)}
        onResetLevel={handleResetLevel}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onExport={handleExport}
        onImport={handleImport}
        onOpenMobileAppModal={() => setShowMobileAppModal(true)}
      />

      {/* Main Studio Viewport & Inspector Layout */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Central 3D Canvas */}
        <main className="flex-1 relative h-full">
          <ThreeCanvas
            level={level}
            mode={mode}
            selectedObjectId={selectedObjectId}
            onSelectObject={setSelectedObjectId}
            onUpdateObject={handleUpdateObject}
            onClueDiscovered={handleClueDiscovered}
            onCoinsCollected={handleCoinsCollected}
            onEnemyDefeated={handleEnemyDefeated}
            onLevelComplete={() => setIsVictory(true)}
            onGameOver={() => setIsGameOver(true)}
            playerHp={playerHp}
            onPlayerDamage={handlePlayerDamage}
            touchInput={touchInput}
            companionSpeech={companionSpeech}
          />

          {/* Active Play Mode HUD */}
          {mode === 'play' && (
            <>
              <PlayHUD
                level={level}
                playerHp={playerHp}
                maxHp={100}
                coinsCount={coinsCount}
                clues={discoveredClues}
                isGameOver={isGameOver}
                isVictory={isVictory}
                onRestart={handleResetLevel}
                onExitPlay={() => setMode('build')}
              />

              {/* On-Screen Touch Controls (Mobile/Touch ready) */}
              <TouchControls
                onInputChange={setTouchInput}
                onAttackPress={() => soundEngine.playAttack()}
                onJumpPress={() => soundEngine.playJump()}
                onInteractPress={() => {}}
              />
            </>
          )}

          {/* Quick World Selector Pill Button in Build Mode */}
          {mode === 'build' && (
            <button
              onClick={() => setShowTemplateModal(true)}
              className="absolute bottom-5 left-5 z-20 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 text-xs font-semibold text-cyan-300 shadow-xl backdrop-blur-md flex items-center space-x-2 transition-all hover:scale-105"
            >
              <span>Explore Templates</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </button>
          )}
        </main>

        {/* Right Inspector & Catalog Drawer (Build Mode Only) */}
        {mode === 'build' && (
          <Inspector
            selectedObject={selectedObject}
            onUpdateObject={handleUpdateObject}
            onDeleteObject={handleDeleteObject}
            onDuplicateObject={handleDuplicateObject}
            onAddObject={handleAddObject}
          />
        )}
      </div>

      {/* Modals */}
      {showCompanionModal && (
        <CompanionCustomizer
          companion={level.companion}
          onSaveCompanion={updated => setLevel(prev => ({ ...prev, companion: updated }))}
          onClose={() => setShowCompanionModal(false)}
        />
      )}

      {showStoryModal && (
        <StoryBranchEditor
          level={level}
          onSaveStory={(nodes, startId) =>
            setLevel(prev => ({ ...prev, storyNodes: nodes, initialNodeId: startId }))
          }
          onClose={() => setShowStoryModal(false)}
        />
      )}

      {showMultiplayerModal && (
        <MultiplayerModal
          level={level}
          onLaunchCoop={role => {
            setMode('play');
            handleResetLevel();
          }}
          onClose={() => setShowMultiplayerModal(false)}
        />
      )}

      {showTemplateModal && (
        <TemplateSelector
          currentLevelId={level.id}
          onSelectTemplate={tpl => {
            setLevel(tpl);
            handleResetLevel();
          }}
          onNewBlank={() => {
            setLevel({
              ...DEFAULT_TEMPLATES[0],
              id: `custom_${Date.now()}`,
              title: 'New Blank 3D Level',
              description: 'Empty platformer stage ready for custom layout and hazards.',
              objects: [
                {
                  id: 'floor_start',
                  name: 'Start Platform',
                  type: 'platform_stone',
                  category: 'platforms',
                  position: [0, 0, 0],
                  rotation: [0, 0, 0],
                  scale: [8, 0.8, 8],
                  color: '#3b82f6',
                },
              ],
            });
            handleResetLevel();
          }}
          onClose={() => setShowTemplateModal(false)}
        />
      )}

      {showMobileAppModal && (
        <MobileAppModal onClose={() => setShowMobileAppModal(false)} />
      )}
    </div>
  );
}
