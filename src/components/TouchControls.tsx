import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowUp, Zap, Shield, Eye, ChevronDown } from 'lucide-react';

interface TouchControlsProps {
  onInputChange: (input: {
    moveX: number;
    moveZ: number;
    isJumping: boolean;
    isAttacking: boolean;
    isDashing: boolean;
    isCrouching: boolean;
    isGripping: boolean;
    isInteracting: boolean;
  }) => void;
  onAttackPress: () => void;
  onJumpPress: () => void;
  onInteractPress: () => void;
}

export const TouchControls: React.FC<TouchControlsProps> = ({
  onInputChange,
  onAttackPress,
  onJumpPress,
  onInteractPress,
}) => {
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAttacking, setIsAttacking] = useState(false);
  const [isDashing, setIsDashing] = useState(false);
  const [isCrouching, setIsCrouching] = useState(false);
  const [isGripping, setIsGripping] = useState(false);

  const joystickBaseRef = useRef<HTMLDivElement>(null);
  const touchIdRef = useRef<number | null>(null);

  const updateInput = useCallback(
    (jx: number, jy: number, jmp: boolean, atk: boolean, dsh: boolean, crch: boolean, grp: boolean) => {
      onInputChange({
        moveX: jx,
        moveZ: -jy, // negative Y in screen is forward (Z negative)
        isJumping: jmp,
        isAttacking: atk,
        isDashing: dsh,
        isCrouching: crch,
        isGripping: grp,
        isInteracting: false,
      });
    },
    [onInputChange]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    if (touchIdRef.current !== null) return;
    const touch = e.changedTouches[0];
    touchIdRef.current = touch.identifier;
    setIsDragging(true);
    handleTouchMove(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!joystickBaseRef.current || touchIdRef.current === null) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === touchIdRef.current) {
        const rect = joystickBaseRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const maxRadius = rect.width / 2;

        let dx = touch.clientX - centerX;
        let dy = touch.clientY - centerY;
        const dist = Math.hypot(dx, dy);

        if (dist > maxRadius) {
          dx = (dx / dist) * maxRadius;
          dy = (dy / dist) * maxRadius;
        }

        const normX = dx / maxRadius;
        const normY = -dy / maxRadius; // inverted for 3D forward

        setJoystickPos({ x: dx, y: dy });
        updateInput(normX, normY, isJumping, isAttacking, isDashing, isCrouching, isGripping);
        break;
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === touchIdRef.current) {
        touchIdRef.current = null;
        setIsDragging(false);
        setJoystickPos({ x: 0, y: 0 });
        updateInput(0, 0, isJumping, isAttacking, isDashing, isCrouching, isGripping);
        break;
      }
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-30 select-none">
      {/* Virtual Joystick (Bottom Left) */}
      <div className="absolute bottom-8 left-8 pointer-events-auto">
        <div
          ref={joystickBaseRef}
          id="virtual-joystick-base"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          className="w-32 h-32 rounded-full bg-slate-900/50 border-2 border-slate-700/60 backdrop-blur-md relative flex items-center justify-center shadow-2xl active:border-cyan-500/80"
        >
          {/* Inner stick nub */}
          <div
            className="w-14 h-14 rounded-full bg-cyan-500/80 border border-cyan-300/80 shadow-lg pointer-events-none transition-transform duration-75"
            style={{
              transform: `translate(${joystickPos.x}px, ${joystickPos.y}px)`,
            }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons (Bottom Right) */}
      <div className="absolute bottom-8 right-8 pointer-events-auto flex flex-col items-end space-y-3">
        <div className="flex items-center space-x-3">
          {/* Squeeze / Crouch Button */}
          <button
            id="touch-crouch-btn"
            onTouchStart={() => {
              setIsCrouching(true);
              updateInput(joystickPos.x, joystickPos.y, isJumping, isAttacking, isDashing, true, isGripping);
            }}
            onTouchEnd={() => {
              setIsCrouching(false);
              updateInput(joystickPos.x, joystickPos.y, isJumping, isAttacking, isDashing, false, isGripping);
            }}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-lg backdrop-blur-md transition-all ${
              isCrouching ? 'bg-amber-500 text-black scale-95' : 'bg-slate-800/80 text-amber-300 border border-amber-500/40'
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </button>

          {/* Grip / Climb Button */}
          <button
            id="touch-grip-btn"
            onTouchStart={() => {
              setIsGripping(true);
              updateInput(joystickPos.x, joystickPos.y, isJumping, isAttacking, isDashing, isCrouching, true);
            }}
            onTouchEnd={() => {
              setIsGripping(false);
              updateInput(joystickPos.x, joystickPos.y, isJumping, isAttacking, isDashing, isCrouching, false);
            }}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-lg backdrop-blur-md transition-all ${
              isGripping ? 'bg-emerald-500 text-black scale-95' : 'bg-slate-800/80 text-emerald-300 border border-emerald-500/40'
            }`}
          >
            <Shield className="w-5 h-5" />
          </button>

          {/* Dash / Sprint Button */}
          <button
            id="touch-dash-btn"
            onTouchStart={() => {
              setIsDashing(true);
              updateInput(joystickPos.x, joystickPos.y, isJumping, isAttacking, true, isCrouching, isGripping);
            }}
            onTouchEnd={() => {
              setIsDashing(false);
              updateInput(joystickPos.x, joystickPos.y, isJumping, isAttacking, false, isCrouching, isGripping);
            }}
            className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-xl backdrop-blur-md transition-all ${
              isDashing ? 'bg-purple-500 text-white scale-95' : 'bg-slate-800/80 text-purple-300 border border-purple-500/40'
            }`}
          >
            <Zap className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center space-x-3">
          {/* Attack / Combat Strike Button */}
          <button
            id="touch-attack-btn"
            onTouchStart={() => {
              setIsAttacking(true);
              onAttackPress();
              updateInput(joystickPos.x, joystickPos.y, isJumping, true, isDashing, isCrouching, isGripping);
            }}
            onTouchEnd={() => {
              setIsAttacking(false);
              updateInput(joystickPos.x, joystickPos.y, isJumping, false, isDashing, isCrouching, isGripping);
            }}
            className="w-16 h-16 rounded-full bg-rose-600/90 text-white font-black text-sm flex items-center justify-center border border-rose-400 shadow-2xl active:scale-90 active:bg-rose-500 transition-all"
          >
            STRIKE
          </button>

          {/* Jump Button */}
          <button
            id="touch-jump-btn"
            onTouchStart={() => {
              setIsJumping(true);
              onJumpPress();
              updateInput(joystickPos.x, joystickPos.y, true, isAttacking, isDashing, isCrouching, isGripping);
            }}
            onTouchEnd={() => {
              setIsJumping(false);
              updateInput(joystickPos.x, joystickPos.y, false, isAttacking, isDashing, isCrouching, isGripping);
            }}
            className="w-18 h-18 rounded-full bg-cyan-600/90 text-white font-black text-base flex items-center justify-center border-2 border-cyan-300 shadow-2xl active:scale-90 active:bg-cyan-500 transition-all"
          >
            <ArrowUp className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};
