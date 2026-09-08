export type WeatherType = 
  | 'clear_day' 
  | 'golden_hour' 
  | 'neon_night' 
  | 'rain_storm' 
  | 'heavy_snow' 
  | 'mystery_fog' 
  | 'crimson_twilight';

export type GameGenre = 
  | 'mystery_crime' 
  | 'cyber_action' 
  | 'rpg_adventure' 
  | 'all_ages_platformer' 
  | 'horror_thriller';

export type ObjectCategory = 
  | 'platforms' 
  | 'hazards' 
  | 'items' 
  | 'characters' 
  | 'lights' 
  | 'mystery';

export type GameObjectType = 
  | 'platform_stone'
  | 'platform_wood'
  | 'platform_neon'
  | 'platform_metal'
  | 'moving_platform'
  | 'bouncy_pad'
  | 'hazard_spikes'
  | 'hazard_laser'
  | 'coin_collectible'
  | 'gem_rare'
  | 'keycard'
  | 'clue_document'
  | 'clue_fingerprint'
  | 'clue_weapon_drop'
  | 'enemy_guard'
  | 'enemy_drone'
  | 'portal_exit'
  | 'chest_loot'
  | 'climbable_wall'
  | 'street_lamp'
  | 'torch_light';

export interface GameObject {
  id: string;
  name: string;
  type: GameObjectType;
  category: ObjectCategory;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color?: string;
  isMoving?: boolean;
  moveAxis?: 'x' | 'y' | 'z';
  moveDistance?: number;
  moveSpeed?: number;
  hp?: number;
  maxHp?: number;
  mysteryClueTitle?: string;
  mysteryClueDescription?: string;
  soundEffect?: string;
}

export interface CompanionConfig {
  name: string;
  title: string;
  archetype: 'detective_partner' | 'cyber_operative' | 'mystic_rogue' | 'adventurer';
  skinTone: string;
  hairStyle: 'bob' | 'long_waves' | 'ponytail' | 'short_pixie';
  hairColor: string;
  outfitColor: string;
  accentColor: string;
  combatRole: 'tactical_vanguard' | 'scout_sniper' | 'support_medic' | 'infiltrator';
  dialogueGreet: string;
  dialogueCombat: string;
  dialogueClueFound: string;
}

export interface NarrativeNode {
  id: string;
  speaker: string;
  text: string;
  clueRequirement?: string;
  choices: {
    text: string;
    nextNodeId: string;
    givesClue?: string;
    triggerCombat?: boolean;
  }[];
}

export interface GameLevel {
  id: string;
  title: string;
  description: string;
  genre: GameGenre;
  ageRating: 'all_ages' | 'teen_adventure' | 'mature_mystery';
  weather: WeatherType;
  gravity: number;
  musicMood: 'noir_jazz' | 'synth_action' | 'ancient_mystery' | 'playful_bounce';
  fogDensity: number;
  ambientLightColor: string;
  sunColor: string;
  objects: GameObject[];
  storyNodes: NarrativeNode[];
  initialNodeId: string;
  companion: CompanionConfig;
  playerSpawn: [number, number, number];
  targetObjective: string;
}
