import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

// Lazy initialization of Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    genAIClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return genAIClient;
}

// Fallback procedural level generator based on user prompt
function generateProceduralLevel(prompt: string) {
  const lower = prompt.toLowerCase();
  const isCyber = lower.includes("cyber") || lower.includes("neon") || lower.includes("tech") || lower.includes("future");
  const isHorror = lower.includes("horror") || lower.includes("dark") || lower.includes("spooky") || lower.includes("ghost") || lower.includes("haunted") || lower.includes("darr");
  const isAdventure = lower.includes("dungeon") || lower.includes("treasure") || lower.includes("desert") || lower.includes("island") || lower.includes("jungle");

  const genre = isCyber ? "cyber_action" : isHorror ? "horror_thriller" : isAdventure ? "rpg_adventure" : "all_ages_platformer";
  const weather = isCyber ? "neon_night" : isHorror ? "mystery_fog" : isAdventure ? "golden_hour" : "clear_day";
  const musicMood = isCyber ? "synth_action" : isHorror ? "noir_jazz" : isAdventure ? "ancient_mystery" : "playful_bounce";
  const platformType = isCyber ? "platform_neon" : isHorror ? "platform_metal" : isAdventure ? "platform_stone" : "platform_wood";
  const primaryColor = isCyber ? "#00ffff" : isHorror ? "#991b1b" : isAdventure ? "#d97706" : "#22c55e";

  const objects = [
    // Starting platform
    {
      id: "spawn_plat",
      name: "Spawn Platform",
      type: platformType,
      category: "platforms",
      position: [0, -0.5, 0] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [6, 1, 6] as [number, number, number],
      color: primaryColor,
    },
    // Stepping platforms
    {
      id: "step_1",
      name: "Floating Step 1",
      type: platformType,
      category: "platforms",
      position: [0, 1.2, 7] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [4, 0.8, 4] as [number, number, number],
      color: primaryColor,
    },
    {
      id: "step_2",
      name: "Moving Platform",
      type: "moving_platform",
      category: "platforms",
      position: [6, 2.5, 12] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [3.5, 0.6, 3.5] as [number, number, number],
      isMoving: true,
      moveAxis: "x" as const,
      moveDistance: 4,
      moveSpeed: 2,
    },
    {
      id: "bouncy_step",
      name: "Super Spring Pad",
      type: "bouncy_pad",
      category: "platforms",
      position: [6, 3.2, 18] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [3, 0.5, 3] as [number, number, number],
    },
    {
      id: "step_3",
      name: "High Citadel Platform",
      type: platformType,
      category: "platforms",
      position: [0, 7.5, 24] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [7, 1, 7] as [number, number, number],
      color: primaryColor,
    },
    // Collectibles & Clues
    {
      id: "coin_1",
      name: "Energy Core",
      type: "coin_collectible",
      category: "items",
      position: [0, 2.5, 7] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [0.8, 0.8, 0.8] as [number, number, number],
    },
    {
      id: "gem_target",
      name: "Rare Artifact Gem",
      type: "gem_rare",
      category: "items",
      position: [6, 4.5, 18] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [1, 1, 1] as [number, number, number],
    },
    {
      id: "clue_doc",
      name: "Classified Mission Brief",
      type: "clue_document",
      category: "mystery",
      position: [-2, 8.5, 24] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [1, 1, 1] as [number, number, number],
      mysteryClueTitle: "Operation Cipher",
      mysteryClueDescription: `Intelligence report recovered based on prompt: "${prompt}".`,
    },
    // Hazards
    {
      id: "laser_gate",
      name: "Security Laser Trap",
      type: "hazard_laser",
      category: "hazards",
      position: [0, 8.8, 22] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [3, 0.2, 0.2] as [number, number, number],
    },
    // Enemy & Realistic Character Asset Guard
    {
      id: "patrol_enemy",
      name: isCyber ? "Cyber Ninja Assassin" : isHorror ? "Shadow Assassin" : "Spec-Ops Enforcer",
      type: isCyber ? "char_cyber_ninja" : isHorror ? "char_mystic_assassin" : "char_tactical_soldier",
      category: "characters",
      position: [1.5, 8.5, 23] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [1, 1, 1] as [number, number, number],
      hp: 100,
      maxHp: 100,
      isMoving: true,
      moveAxis: "x" as const,
      moveDistance: 3.5,
      moveSpeed: 1.8,
    },
    // Heavy Boss or Mech Sentinel
    {
      id: "elite_boss",
      name: isCyber ? "Heavy Mech Sentinel" : "Titan Cyber Boss",
      type: isCyber ? "char_mech_sentinel" : "char_heavy_boss",
      category: "characters",
      position: [0, 8.5, 25.2] as [number, number, number],
      rotation: [0, Math.PI, 0] as [number, number, number],
      scale: [1.2, 1.2, 1.2] as [number, number, number],
      hp: 180,
      maxHp: 180,
    },
    // Exit Portal
    {
      id: "victory_portal",
      name: "Final Warp Portal",
      type: "portal_exit",
      category: "items",
      position: [0, 8.5, 26.5] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [1.5, 2.5, 0.5] as [number, number, number],
    },
  ];

  return {
    id: `level_${Date.now()}`,
    title: prompt.slice(0, 36) || "AI Generated World",
    description: `Generated from prompt: "${prompt}". Jump between platforms, avoid traps, defeat sentinels, and reach the exit portal!`,
    genre,
    ageRating: "teen_adventure",
    weather,
    gravity: 19.6,
    musicMood,
    fogDensity: isHorror ? 0.04 : 0.015,
    ambientLightColor: isCyber ? "#1e1b4b" : isHorror ? "#0f172a" : "#fef3c7",
    sunColor: isCyber ? "#ec4899" : isHorror ? "#dc2626" : "#fbbf24",
    objects,
    storyNodes: [
      {
        id: "intro_node",
        speaker: "Companion",
        text: `Commander! We've entered "${prompt}". Scan the area for objectives and watch your step!`,
        choices: [
          { text: "Understood, advancing through the platforms.", nextNodeId: "advance_node" },
          { text: "What enemies should I expect?", nextNodeId: "intel_node" },
        ],
      },
      {
        id: "advance_node",
        speaker: "Companion",
        text: "The portal at the highest peak is our extraction point. Grab all rare gems along the way!",
        choices: [{ text: "Let's do this!", nextNodeId: "intro_node" }],
      },
      {
        id: "intel_node",
        speaker: "Companion",
        text: "Patrol sentinels and laser barriers guard the high tower. Use your jump dash and attack carefully!",
        choices: [{ text: "Moving out now.", nextNodeId: "intro_node" }],
      },
    ],
    initialNodeId: "intro_node",
    companion: {
      name: isCyber ? "Kira-7" : isHorror ? "Raven" : "Nova",
      title: isCyber ? "Tactical AI Specialist" : "Field Infiltrator",
      archetype: isCyber ? "cyber_operative" : isHorror ? "mystic_rogue" : "detective_partner",
      skinTone: "#f1c27d",
      hairStyle: "ponytail",
      hairColor: isCyber ? "#00ffff" : "#4a044e",
      outfitColor: isCyber ? "#18181b" : "#3b82f6",
      accentColor: primaryColor,
      combatRole: "tactical_vanguard",
      dialogueGreet: `Operational grid loaded for: "${prompt}". Ready when you are!`,
      dialogueCombat: "Hostile engaged! Watch your flank!",
      dialogueClueFound: "Intel secure! Decrypting data packet.",
    },
    playerSpawn: [0, 1.5, 0] as [number, number, number],
    targetObjective: "Reach the Warp Portal at the summit while collecting power gems!",
  };
}

// API Route: Prompt to 3D Game Level Generator
app.post("/api/generate-level", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const ai = getGenAI();
  if (!ai) {
    // If Gemini API Key is not set or previewing offline, use high-fidelity procedural generation
    const proceduralLevel = generateProceduralLevel(prompt);
    return res.json({ level: proceduralLevel, source: "procedural" });
  }

  try {
    const systemInstruction = `You are an expert 3D Level Designer and Game Architect.
The user will provide a game idea, genre, theme, or prompt in natural language (English, Urdu, Hindi, etc.).
You must design a complete playable 3D GameLevel JSON object for OmniCraft 3D Studio.

Valid Genres: "mystery_crime" | "cyber_action" | "rpg_adventure" | "all_ages_platformer" | "horror_thriller"
Valid Weather: "clear_day" | "golden_hour" | "neon_night" | "rain_storm" | "heavy_snow" | "mystery_fog" | "crimson_twilight"
Valid MusicMoods: "noir_jazz" | "synth_action" | "ancient_mystery" | "playful_bounce"
Valid GameObjectTypes:
- Platforms: "platform_stone", "platform_wood", "platform_neon", "platform_metal", "moving_platform", "bouncy_pad", "climbable_wall"
- Hazards: "hazard_spikes", "hazard_laser"
- Collectibles: "coin_collectible", "gem_rare", "keycard", "chest_loot", "portal_exit"
- Mystery: "clue_document", "clue_fingerprint", "clue_weapon_drop"
- Characters: "enemy_guard", "enemy_drone"
- Lights: "street_lamp", "torch_light"

Design rules:
1. Always include a starting platform at position [0, -0.5, 0] with scale [6, 1, 6].
2. Include 5-10 stepping platforms that lead logically upwards or forward towards a victory 'portal_exit' at the top/end.
3. Player spawn is at [0, 1.5, 0].
4. Include 2-4 collectibles (coins, gems), 1-2 hazards (spikes or lasers), and 1-2 enemies.
5. Provide a custom Companion and 2-3 narrative storyNodes with interactive dialogue.
6. Output MUST be valid JSON only matching the schema.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `Design a creative, fun 3D game level based on this user prompt: "${prompt}". Return ONLY valid JSON.`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "";
    const parsedLevel = JSON.parse(responseText);

    // Validate essential properties
    if (!parsedLevel.objects || !Array.isArray(parsedLevel.objects) || parsedLevel.objects.length === 0) {
      throw new Error("Invalid level structure generated");
    }

    parsedLevel.id = `level_${Date.now()}`;
    return res.json({ level: parsedLevel, source: "gemini" });
  } catch (err: any) {
    console.error("Gemini level generation error, falling back to procedural:", err?.message);
    const proceduralLevel = generateProceduralLevel(prompt);
    return res.json({ level: proceduralLevel, source: "procedural_fallback" });
  }
});

// Vite middleware in dev or static files in production
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`OmniCraft 3D Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
