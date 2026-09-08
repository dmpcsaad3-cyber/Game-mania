import { GameLevel } from '../types/game';

export const DEFAULT_TEMPLATES: GameLevel[] = [
  {
    id: 'midnight_noir_mystery',
    title: 'Midnight Noir: The Shadow Case',
    description: 'A rain-slicked detective thriller. Search for clues, leap across city rooftops, interrogate suspects, and crack the Syndicate murder mystery with your detective partner.',
    genre: 'mystery_crime',
    ageRating: 'mature_mystery',
    weather: 'rain_storm',
    gravity: 24,
    musicMood: 'noir_jazz',
    fogDensity: 0.035,
    ambientLightColor: '#1a2238',
    sunColor: '#4f709c',
    playerSpawn: [0, 1.5, 0],
    targetObjective: 'Discover all 3 hidden crime clues and reach the rooftop extraction portal.',
    companion: {
      name: 'Agent Evelyn Cross',
      title: 'Senior Forensics Detective',
      archetype: 'detective_partner',
      skinTone: '#f5d0b5',
      hairStyle: 'bob',
      hairColor: '#1e1b18',
      outfitColor: '#2b2d42',
      accentColor: '#d90429',
      combatRole: 'tactical_vanguard',
      dialogueGreet: "Rain's heavy tonight, partner. Keep your eyes sharp—the Syndicate left evidence scattered across these alleys.",
      dialogueCombat: "Cover me! Taking down the perimeter enforcers!",
      dialogueClueFound: "Good eye! That matches the encrypted ledger from the warehouse."
    },
    objects: [
      // Starting street
      { id: 'p1', name: 'Alleyway Asphalt', type: 'platform_stone', category: 'platforms', position: [0, 0, 0], rotation: [0, 0, 0], scale: [8, 0.8, 8], color: '#2b2d42' },
      { id: 'p2', name: 'Fire Escape Steps', type: 'platform_metal', category: 'platforms', position: [0, 2, 7], rotation: [0, 0, 0], scale: [4, 0.5, 3], color: '#4a4e69' },
      { id: 'p3', name: 'Rooftop Pier', type: 'platform_stone', category: 'platforms', position: [0, 4.5, 14], rotation: [0, 0, 0], scale: [6, 0.8, 6], color: '#22223b' },
      { id: 'p_move1', name: 'Window Washer Lift', type: 'moving_platform', category: 'platforms', position: [6, 4.5, 14], rotation: [0, 0, 0], scale: [3, 0.4, 3], color: '#fca311', isMoving: true, moveAxis: 'x', moveDistance: 6, moveSpeed: 2 },
      { id: 'p4', name: 'Clocktower Ledge', type: 'platform_stone', category: 'platforms', position: [15, 6, 14], rotation: [0, 0, 0], scale: [7, 0.8, 7], color: '#1a1a2e' },
      { id: 'p_bounce', name: 'Awning Trampoline', type: 'bouncy_pad', category: 'platforms', position: [15, 6.8, 9], rotation: [0, 0, 0], scale: [2, 0.4, 2], color: '#e63946' },
      { id: 'p5', name: 'Helipad Extraction', type: 'platform_neon', category: 'platforms', position: [15, 11, 2], rotation: [0, 0, 0], scale: [8, 0.8, 8], color: '#0f3460' },

      // Hazards & Spikes
      { id: 'hz1', name: 'Exposed High Voltage Wire', type: 'hazard_spikes', category: 'hazards', position: [0, 5, 13], rotation: [0, 0, 0], scale: [1.5, 0.3, 1.5], color: '#ff0055' },
      { id: 'hz2', name: 'Laser Tripwire', type: 'hazard_laser', category: 'hazards', position: [15, 6.6, 16], rotation: [0, 0, 0], scale: [4, 0.2, 0.2], color: '#ff0055' },

      // Mystery Clues & Collectibles
      { 
        id: 'clue1', 
        name: 'Torn Encrypted Dossier', 
        type: 'clue_document', 
        category: 'mystery', 
        position: [2, 1, 2], 
        rotation: [0, 0, 0], 
        scale: [0.8, 0.8, 0.8], 
        color: '#ffb703',
        mysteryClueTitle: 'Burned Shipping Ledger',
        mysteryClueDescription: 'Lists midnight shipments to Dock 4 under code "Cerberus".'
      },
      { 
        id: 'clue2', 
        name: 'Drop-off Cipher Keycard', 
        type: 'keycard', 
        category: 'mystery', 
        position: [0, 5.5, 15], 
        rotation: [0, 0, 0], 
        scale: [0.8, 0.8, 0.8], 
        color: '#06d6a0',
        mysteryClueTitle: 'Executive Penthouse Key',
        mysteryClueDescription: 'Contains fingerprint residue matching the prime suspect.'
      },
      { 
        id: 'clue3', 
        name: 'Discarded Revolver', 
        type: 'clue_weapon_drop', 
        category: 'mystery', 
        position: [17, 7, 14], 
        rotation: [0, 0, 0], 
        scale: [0.8, 0.8, 0.8], 
        color: '#e76f51',
        mysteryClueTitle: 'Custom Snub-Nose Revolver',
        mysteryClueDescription: 'Fired twice. Serial number scratched off, but barrel rifling is distinct.'
      },

      // Enemies
      { id: 'en1', name: 'Syndicate Enforcer', type: 'enemy_guard', category: 'characters', position: [0, 5.5, 12], rotation: [0, 0, 0], scale: [1, 1.8, 1], color: '#7209b7', hp: 40, maxHp: 40 },
      { id: 'en2', name: 'Patrol Drone', type: 'enemy_drone', category: 'characters', position: [14, 8, 14], rotation: [0, 0, 0], scale: [1, 1, 1], color: '#d00000', hp: 25, maxHp: 25 },

      // Lights & Mood
      { id: 'lt1', name: 'Street Lamp Amber', type: 'street_lamp', category: 'lights', position: [-3, 2, -2], rotation: [0, 0, 0], scale: [0.6, 3, 0.6], color: '#ffb703' },
      { id: 'lt2', name: 'Neon Rooftop Sign', type: 'torch_light', category: 'lights', position: [3, 6, 14], rotation: [0, 0, 0], scale: [0.6, 2, 0.6], color: '#4cc9f0' },

      // Exit portal
      { id: 'exit1', name: 'Police Extraction VTOL', type: 'portal_exit', category: 'items', position: [15, 12, 2], rotation: [0, 0, 0], scale: [2, 2.5, 2], color: '#00f5d4' }
    ],
    storyNodes: [
      {
        id: 'node_start',
        speaker: 'Agent Evelyn Cross',
        text: "The rain won't wash away what happened here. The victim was an informant for Internal Affairs. We have three minutes before backup units get diverted.",
        choices: [
          { text: "Let's inspect the alleyway first. Check for discarded documents.", nextNodeId: 'node_alley' },
          { text: "Where did the suspect flee?", nextNodeId: 'node_rooftop' }
        ]
      },
      {
        id: 'node_alley',
        speaker: 'Agent Evelyn Cross',
        text: "Look over near the dumpster—there is a burned paper glowing under the sodium lamp. Let's grab it!",
        choices: [
          { text: "On it. Lead the way up the fire escape.", nextNodeId: 'node_rooftop' }
        ]
      },
      {
        id: 'node_rooftop',
        speaker: 'Agent Evelyn Cross',
        text: "They jumped across the rooftops toward the high-voltage relay. Watch your step, and punch through anyone blocking our route!",
        choices: [
          { text: "We'll take them down together.", nextNodeId: 'node_climax' }
        ]
      },
      {
        id: 'node_climax',
        speaker: 'Agent Evelyn Cross',
        text: "All clues lead to the helipad. Once you recover the weapon and ledger, our VTOL will extract us with the case closed.",
        choices: [
          { text: "Time to wrap this up.", nextNodeId: 'node_start' }
        ]
      }
    ],
    initialNodeId: 'node_start'
  },

  {
    id: 'cyber_action_rush',
    title: 'Neon Overdrive: Data Heist',
    description: 'High-speed cyberpunk action platformer. Navigate shifting holographic platforms, dodge laser grids, smash rogue security bots, and upload the master core.',
    genre: 'cyber_action',
    ageRating: 'teen_adventure',
    weather: 'neon_night',
    gravity: 28,
    musicMood: 'synth_action',
    fogDensity: 0.02,
    ambientLightColor: '#0a0f24',
    sunColor: '#00f0ff',
    playerSpawn: [0, 1.5, 0],
    targetObjective: 'Infiltrate the Central Server tower, neutralize rogue security bots, and extract the Neural Core.',
    companion: {
      name: 'Kira Neo',
      title: 'Neural Net Runner',
      archetype: 'cyber_operative',
      skinTone: '#f8d7c4',
      hairStyle: 'short_pixie',
      hairColor: '#00f0ff',
      outfitColor: '#121629',
      accentColor: '#ff0055',
      combatRole: 'scout_sniper',
      dialogueGreet: "Grid security is overclocked! Stay light on your feet and watch out for the laser sweeps!",
      dialogueCombat: "Hacking their combat subroutines now—strikers, engage!",
      dialogueClueFound: "Sub-node breached! Encryption key deciphered."
    },
    objects: [
      { id: 'cp1', name: 'Grid Node Alpha', type: 'platform_neon', category: 'platforms', position: [0, 0, 0], rotation: [0, 0, 0], scale: [7, 0.6, 7], color: '#16213e' },
      { id: 'cp2', name: 'Floating Server Deck', type: 'moving_platform', category: 'platforms', position: [0, 2, 7], rotation: [0, 0, 0], scale: [3.5, 0.4, 3.5], color: '#00f0ff', isMoving: true, moveAxis: 'z', moveDistance: 5, moveSpeed: 3 },
      { id: 'cp3', name: 'Core Firewall Platform', type: 'platform_metal', category: 'platforms', position: [0, 4.5, 17], rotation: [0, 0, 0], scale: [6, 0.6, 6], color: '#1a1a2e' },
      { id: 'cp_laser', name: 'Security Grid Laser', type: 'hazard_laser', category: 'hazards', position: [0, 5.2, 16], rotation: [0, 0, 0], scale: [5, 0.2, 0.2], color: '#ff0055' },
      { id: 'cp_bounce', name: 'Magnetic Kinetic Pad', type: 'bouncy_pad', category: 'platforms', position: [0, 5.2, 18], rotation: [0, 0, 0], scale: [2, 0.4, 2], color: '#7209b7' },
      { id: 'cp4', name: 'Mainframe Apex', type: 'platform_neon', category: 'platforms', position: [0, 10, 18], rotation: [0, 0, 0], scale: [6, 0.8, 6], color: '#ff0055' },
      { id: 'cp_gem', name: 'Neural Core Data Shard', type: 'gem_rare', category: 'items', position: [0, 11, 18], rotation: [0, 0, 0], scale: [1, 1, 1], color: '#00f0ff' },
      { id: 'cp_bot1', name: 'Sentry Drone 01', type: 'enemy_drone', category: 'characters', position: [0, 6, 17], rotation: [0, 0, 0], scale: [1, 1, 1], color: '#ff0055', hp: 30, maxHp: 30 },
      { id: 'cp_exit', name: 'Data Uplink Portal', type: 'portal_exit', category: 'items', position: [0, 11.5, 15], rotation: [0, 0, 0], scale: [2, 2.5, 2], color: '#00f0ff' }
    ],
    storyNodes: [
      {
        id: 'node_start',
        speaker: 'Kira Neo',
        text: "We're inside the mainframe perimeter. The firewall lasers are cycling every three seconds. Grab the Data Shard on the apex!",
        choices: [
          { text: "Synchronize jumps with the floating platforms.", nextNodeId: 'node_ready' }
        ]
      },
      {
        id: 'node_ready',
        speaker: 'Kira Neo',
        text: "I'll cover you from the uplink node. Jump, strike the patrol drones, and don't look down!",
        choices: [
          { text: "Let's crack this mainframe!", nextNodeId: 'node_start' }
        ]
      }
    ],
    initialNodeId: 'node_start'
  },

  {
    id: 'sunny_meadow_bounce',
    title: 'Cloud Kingdom: Meadow Quest',
    description: 'A cheerful, all-ages 3D platformer suitable for children and families. Bounce on cloud trampolines, collect golden coins, and reach the Rainbow Castle.',
    genre: 'all_ages_platformer',
    ageRating: 'all_ages',
    weather: 'clear_day',
    gravity: 22,
    musicMood: 'playful_bounce',
    fogDensity: 0.005,
    ambientLightColor: '#fffae6',
    sunColor: '#fff275',
    playerSpawn: [0, 1.5, 0],
    targetObjective: 'Collect 5 gold coins and bounce across the cloud stepping stones to the finish castle!',
    companion: {
      name: 'Pip the Sprite',
      title: 'Meadow Guide',
      archetype: 'adventurer',
      skinTone: '#fed0bb',
      hairStyle: 'ponytail',
      hairColor: '#ff9f1c',
      outfitColor: '#2ec4b6',
      accentColor: '#e71d36',
      combatRole: 'support_medic',
      dialogueGreet: "Yay, welcome to Cloud Kingdom! The bouncy pads will send you super high into the sky!",
      dialogueCombat: "Cheering you on! You can do it!",
      dialogueClueFound: "Woohoo! Shiny star found!"
    },
    objects: [
      { id: 'sp1', name: 'Green Meadow Island', type: 'platform_wood', category: 'platforms', position: [0, 0, 0], rotation: [0, 0, 0], scale: [8, 1, 8], color: '#55a630' },
      { id: 'sp_c1', name: 'Gold Coin 1', type: 'coin_collectible', category: 'items', position: [0, 1.5, 2], rotation: [0, 0, 0], scale: [0.7, 0.7, 0.7], color: '#ffd166' },
      { id: 'sp_c2', name: 'Gold Coin 2', type: 'coin_collectible', category: 'items', position: [2, 1.5, 0], rotation: [0, 0, 0], scale: [0.7, 0.7, 0.7], color: '#ffd166' },
      { id: 'sp_bounce1', name: 'Sunflower Bouncer', type: 'bouncy_pad', category: 'platforms', position: [0, 0.8, 4], rotation: [0, 0, 0], scale: [2, 0.5, 2], color: '#ffb703' },
      { id: 'sp2', name: 'Floating Cloud Island', type: 'platform_stone', category: 'platforms', position: [0, 4, 9], rotation: [0, 0, 0], scale: [5, 0.8, 5], color: '#a0c4ff' },
      { id: 'sp_c3', name: 'Gold Coin 3', type: 'coin_collectible', category: 'items', position: [0, 5.2, 9], rotation: [0, 0, 0], scale: [0.7, 0.7, 0.7], color: '#ffd166' },
      { id: 'sp_move', name: 'Rainbow Breeze Tram', type: 'moving_platform', category: 'platforms', position: [0, 5, 14], rotation: [0, 0, 0], scale: [3, 0.4, 3], color: '#ffc6ff', isMoving: true, moveAxis: 'x', moveDistance: 5, moveSpeed: 2 },
      { id: 'sp3', name: 'Castle Clouds', type: 'platform_wood', category: 'platforms', position: [0, 7.5, 20], rotation: [0, 0, 0], scale: [7, 1, 7], color: '#fdffb6' },
      { id: 'sp_chest', name: 'Star Treasure Chest', type: 'chest_loot', category: 'items', position: [0, 8.8, 20], rotation: [0, 0, 0], scale: [1.2, 1, 1.2], color: '#ffb703' },
      { id: 'sp_exit', name: 'Rainbow Castle Goal', type: 'portal_exit', category: 'items', position: [0, 9, 22], rotation: [0, 0, 0], scale: [2, 2.5, 2], color: '#48cae4' }
    ],
    storyNodes: [
      {
        id: 'node_start',
        speaker: 'Pip the Sprite',
        text: "Hop onto the bouncy pads and float across to the castle in the clouds! Watch out for dizzy spins!",
        choices: [
          { text: "Let's go bounce!", nextNodeId: 'node_start' }
        ]
      }
    ],
    initialNodeId: 'node_start'
  }
];
