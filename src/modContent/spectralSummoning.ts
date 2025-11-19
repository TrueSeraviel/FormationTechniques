import { Buff, 
  Rarity,
  TreasureItem, 
  Technique,
  TechniqueEffect,
  techniqueElements,
  TechniqueItem,
  TechniqueMasteryRarityMap,
  UpgradeTechniqueMastery
} from 'afnm-types';
import icon from './invocationDefender.png';

/*
const myTreasure: TreasureItem = {
  kind: 'treasure',
  name: 'The Best Treasure',
  description: 'Wooo mod content.',
  icon: icon,
  stacks: 1,
  rarity: 'mundane',
  realm: 'coreFormation',
};
window.modAPI.actions.addItem(myTreasure);
*/

export const formationPartFlag = 'Formation Part';
export const formationCoreFlag = 'Formation';
export const formationTooltip: string =
  'Use a <name>Formation Part</name> in combat to add them to your combat <name>Formation</name> and gain passive bonuses. You can then <name>Activate</name> the formation to gain further bonuses. The <name>Formation Parts</name> used will be lost at the end of the battle.<br/><br/>Formations scale with <name>Artefact Power</name>.';

export const createUpgradeMap = (
  key: string,
  rarity: Rarity,
  upgrades: Record<
    Rarity,
    { tooltip: string; change: number; shouldMultiply?: boolean } | undefined
  >,
): TechniqueMasteryRarityMap => {
  const createMastery = (rarity: Rarity): UpgradeTechniqueMastery | undefined => {
    const upgrade = upgrades[rarity];
    if (upgrade === undefined) {
      return undefined;
    }

    return {
      kind: 'upgrade',
      upgradeKey: key,
      change: upgrade.change,
      tooltip: upgrade.tooltip,
      shouldMultiply: upgrade.shouldMultiply,
    };
  };

  const output: TechniqueMasteryRarityMap = {
    rarity: rarity,
    mundane: createMastery('mundane'),
    qitouched: createMastery('qitouched'),
    empowered: createMastery('empowered'),
    resplendent: createMastery('resplendent'),
    incandescent: createMastery('incandescent'),
    transcendent: createMastery('transcendent'),
  };

  return output;
};

export const invocationDefender: Buff = {
  name: 'Invocation Defender',
  icon: icon,
  canStack: false,
  stats: undefined,
  buffType: 'Formation',
  buffTypeTooltip: formationTooltip,
  flag: formationPartFlag,
  tooltip: `Grants {technique.barrier.amount} barrier each technique. Each activation of your <name>Formation</name> will cause the defender to defend again, dealing an additional {triggered.barrier.amount} barrier immediately.`,
  combatImage: {
    image: icon,
    position: 'companion',
  },
  onTechniqueEffects: [
    {
      kind: 'barrier',
      amount: {
        value: 0.3,
        stat: 'artefactpower',
      },
    },
  ],
  triggeredBuffEffects: [
    {
      trigger: formationCoreFlag,
      effects: [
        {
          kind: 'barrier',
          amount: {
            value: 0.9,
            stat: 'artefactpower',
          },
        },
      ],
    },
  ],
  onRoundEffects: [],
  stacks: 1,
}

export const spectralSummoning: Technique = {
  name: 'Spectral Summoning',
  realm: 'qiCondensation',
  icon: icon,
  type: 'none',
  noneType: 'Formation',
  tooltip: `Add {buffSelf.buff} to your <name>Formation</name>.`,
  maxInstances: 1,
  effects: [
    {
      kind: 'buffSelf',
      buff: invocationDefender,
      amount: {
        value: 1,
        stat: undefined,
      },
    },
  ],
  /*
  upgradeMasteries: {
    basePower: createUpgradeMap('power', 'empowered'.'undefined'),
  },
  */
}

export const invocationDefenderManual: TechniqueItem = {
  subKind: 'technique',
  technique: spectralSummoning.name,
  kind: 'technique',
  name: spectralSummoning.name,
  element: 'none',
  description: "The knowledge of how to perform the 'Invocation Defender' technique.",
  icon: icon,
  stacks: 1,
  rarity: 'mundane',
  realm: 'qiCondensation',
}

export function initializeSpectralSummoning(){
  console.log('Adding technique...')
  window.modAPI.actions.addTechnique(spectralSummoning)
  console.log('Adding item...')
  window.modAPI.actions.addItem(invocationDefenderManual)
  console.log('Adding Shop connection...')
  window.modAPI.actions.addItemToShop(invocationDefenderManual, 1, 'Falling Star Observatory', 'qiCondensation', 8,  'respected')
  console.log('Complete.')
}
;