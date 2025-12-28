# Lane Rush

A lane-based auto-battler strategy game where players compete to overwhelm their opponent's base by claiming territory, building economy, and deploying units that march down the lane automatically.

## Game Concept

Two players (or player vs AI) spawn on opposite sides of a map connected by a **lane** - a path divided into tiles/zones. Units spawned by each side automatically march toward the enemy base, clashing in the middle. Victory is achieved by destroying the opponent's base.

The strategic depth comes from:
- **Tile control**: Capturing tiles grants bonuses (economy, unit capacity, tech unlocks)
- **Economy management**: Balancing income vs spending (TFT-style interest, investment decisions)
- **Unit composition**: Building the right army to counter your opponent
- **Upgrade timing**: Knowing when to level up units vs expand your army

## Core Mechanics

### The Lane

The battlefield is a lane divided into **tiles** (zones). Each tile can be:
- **Neutral**: Unclaimed, grants no bonus
- **Controlled**: Owned by a player, provides its bonus
- **Contested**: Being fought over

Tiles are claimed when your units occupy them without opposition. Control shifts as the battle line moves.

### Tile Types

| Tile Type | Effect |
|-----------|--------|
| **Gold Mine** | Generates passive income per tick |
| **Barracks** | Increases unit production capacity |
| **Tech Lab** | Unlocks upgrade tiers or new unit types |
| **Watchtower** | Reveals enemy unit composition |
| **Fortress** | Provides defensive bonus to units fighting on it |
| **Shortcut** | Allows units to bypass adjacent tiles (map-specific) |

### Economy

Income sources:
- **Base income**: Passive gold per tick
- **Tile income**: Gold mines and controlled territories
- **Interest**: TFT-style interest on banked gold (e.g., +1 gold per 10 saved, capped)
- **Win streaks**: Bonus gold for consecutive round wins (if round-based variant)

Spending:
- **Unit production**: Spawn units to the lane
- **Upgrades**: Improve unit stats or unlock abilities
- **Rerolls**: Refresh available unit pool (if shop-based)

### Units

Units are the core of gameplay. Each unit has:
- **Cost**: Gold required to spawn
- **Health / Damage / Speed**: Combat stats
- **Type**: Melee, ranged, support, siege, etc.
- **Tier**: Star level (1-3 star like TFT) or tech tier

Units automatically:
1. March toward the enemy base
2. Engage enemies in range
3. Continue advancing when enemies are defeated

#### Unit Upgrade System

Similar to TFT, combining units creates stronger versions:
- 3x Tier 1 = 1x Tier 2 (2-star)
- 3x Tier 2 = 1x Tier 3 (3-star)

Higher tier units have multiplied stats and potentially unlock abilities.

### Combat

Combat is automatic but strategic decisions matter:
- **Positioning**: When/where to deploy units
- **Composition**: Mixing unit types (frontline tanks, backline DPS, support)
- **Timing**: Saving for a power spike vs constant pressure

## Game Modes

### Single Player
- **Skirmish**: 1v1 against AI with difficulty settings
- **Campaign** (future): Series of battles with persistent progression

### Multiplayer
- **Ranked 1v1**: Competitive matchmaking
- **Casual**: Unranked matches
- **Custom**: Private lobbies with configurable rules

## Maps

Maps define the lane layout, tile composition, and special features:

### Example: Standard Arena
```
[Player Base] - [Barracks] - [Gold] - [Neutral] - [Neutral] - [Gold] - [Barracks] - [Enemy Base]
```

### Example: Crossroads
```
                    [Tech Lab]
                        |
[Player Base] - [Gold] -+- [Gold] - [Enemy Base]
                        |
                    [Fortress]
```
Features branching paths and strategic tile choices.

### Map Modifiers
- **Winds**: Push units faster/slower in certain directions
- **Fog**: Limited visibility until tiles are scouted
- **Hazards**: Tiles that damage units passing through

## Technical Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Electron + Vue 3 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Rendering** | PixiJS (2D WebGL sprites) |
| **State** | Pinia (Vue) + Game state machine |
| **Networking** | WebSocket (for multiplayer) |
| **AI** | Behavior trees or utility AI |

## Project Structure

```
lane-rush/
├── app/                    # Vue frontend (UI, menus, HUD)
│   └── src/
│       ├── components/     # Vue components
│       ├── views/          # Page views (menu, game, results)
│       ├── stores/         # Pinia state stores
│       └── game/           # Game engine integration
├── electron/               # Electron main process
├── shared/                 # Shared types (IPC, game types)
├── game/                   # Core game engine (framework-agnostic)
│   ├── entities/           # Units, tiles, bases
│   ├── systems/            # Combat, economy, AI
│   ├── maps/               # Map definitions
│   └── state/              # Game state management
└── assets/                 # Sprites, audio, fonts
```

## Development Roadmap

### Phase 1: Core Loop (MVP)
- [ ] PixiJS rendering setup
- [ ] Lane with basic tiles
- [ ] Single unit type that marches and fights
- [ ] Two bases with health
- [ ] Win/lose condition

### Phase 2: Economy & Units
- [ ] Gold generation and spending
- [ ] Unit shop with 3-4 unit types
- [ ] Unit stats and combat resolution
- [ ] Basic AI opponent

### Phase 3: Progression Systems
- [ ] Tile capture mechanics
- [ ] Tile bonuses (gold mines, barracks)
- [ ] Unit upgrade system (star levels)
- [ ] Interest/economy mechanics

### Phase 4: Polish & Content
- [ ] 2-3 complete maps
- [ ] Unit abilities
- [ ] Visual feedback (health bars, damage numbers)
- [ ] Sound effects and music
- [ ] AI difficulty levels

### Phase 5: Multiplayer (Future)
- [ ] WebSocket server
- [ ] Matchmaking
- [ ] Ranked system

## Inspirations

- **Teamfight Tactics**: Economy system, unit acquisition, upgrade mechanics
- **Legion TD**: Auto-battler lane combat, unit composition
- **StarCraft/AoE**: Tech trees, army management, strategic pacing

## License

TBD
