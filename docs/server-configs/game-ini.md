---
sidebar_position: 2
---

# game.ini

The game.ini file is available in the `ShooterGame\Saved\00\Config\WindowsServer` folder. All the settings should be
under the `ShooterGameMode` section:

```ini
[/Script/ShooterGame.ShooterGameMode]
# Your settings here
```

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc}></TOCInline>

## Claim Settings

### bDontUserClaimFlags

### bIsLawlessHomeServer

### bUseSettlementClaims

### bDontRequireClaimFlagsForBuilding

### bForceRequireClaimFlagsForBuildingCannons

### NoClaimFlagDecayPeriodMultiplier

### SettlementCombatPhaseLengthSeconds

## Treasure Settings

### TreasureGoldMultiplier

## Discovery Zone Settings

### MinPointsPerDiscoveryZone

## Player Leveling Settings

### PlayerDefaultNoDiscoveriesMaxLevelUps

### bClampHomeServerXP

### ClampHomeServerXPLevel

## Voice Chat Settings

The following settings are for managing in game Voice Chat settings.

### ProximityRadius

:::info
Added in 20.1
:::

Alter the distance for Normal voice mode. Value is in Unreal units

```ini
# Default
ProximityRadius = 8500
```

### YellingRadius

:::info
Added in 20.1
:::

Alter the distance for Yelling voice mode. Value is in Unreal units

```ini
# Default
ProximityRadius = 22000
```

### WhisperRadius

:::info
Added in 20.1
:::

Alter the distance for Whisper voice mode. Value is in Unreal units

```ini
# Default
ProximityRadius = 2000
```

## Building Settings

### EnemyBuildPreventionRadiusMultiplier

:::info
Added in MegaPatch 1.5
:::

Scales the build prevention radius for enemy structures. This setting is a multiplier.

```ini
# Default
EnemyBuildPreventionRadiusMultiplier = 1.0
```

### NonShipTurretInitializationTimeScale
