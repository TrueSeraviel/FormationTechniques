import { Character, EventStep } from 'afnm-types';
import { scavengingInteraction } from './interactions/scavengingInteraction';
import { shunJiParanoid } from './relationship/shunJiParanoid';
import { shunJiCautious } from './relationship/shunJiCautious';
import { shunJiName } from './shunJiFlags';

import image from '../images/shunJi.png';
import portrait from '../images/shunJiPortrait.png';

const remnant = window.modAPI.gameData.items['Discarded Remnant'];
const refuse = window.modAPI.gameData.locations['Refuse Shower'].name;
//const lingxi = window.modAPI.gameData.characters['lingxiGian'].displayName

export const shunJi: Character = {
  name: shunJiName,
  displayName: shunJiName,
  allegiance: undefined, // Neutral - available to all players
  bio: 'A rough woman found in the Refuse Pile.',
  relationship: [
    shunJiParanoid,
    shunJiCautious,
  ],
  condition:  '1', //'discoveredTeaQuest == 1', // Only visible after quest starts
  portrait: portrait,
  image: image,
  definitions: [
    {
      kind: 'companion',
      condition: '1',
      realm: 'qiCondensation',
      realmProgress: 'Early',

      stats: [/*{
        condition: '1',
        stats: {
          difficulty: 'medium',
          battleLength: 'medium',
          stances: [...],
          drops: [],
          affinities: { blood: 100, weapon: 100 },
          },
        },
      */],

      // Location - where players can find him
      locations: [
        {
          kind: 'static',
          condition: '1',
          location: refuse,
        },
      ],

      encounters: [], // No random encounters

      // What happens when players talk to him
      talkInteraction: [
        {
          condition: '1', // Always available
          event: [
            {
              kind: 'speech',
              character: shunJiName,
              text: 'Yeah?',
            },
            {
              kind: 'label',
              label: 'talkOptions',
            },
            {
              kind: 'choice',
              choices: [
                {
                  text: 'How did you end up here?',
                  children: [
                    {
                      kind: 'speech',
                      character: shunJiName,
                      text: 'Fell, like everyone else. What did you think?',
                    },
                    {
                      kind: 'gotoLabel',
                      label: 'talkOptions',
                    },
                  ],
                },
                {
                  text: 'How do you live in this place?',
                  children: [
                    {
                      kind: 'speech',
                      character: shunJiName,
                      text: 'Find stuff. Trade. Get pills. Nothing special.',
                    },
                    {
                      kind: 'gotoLabel',
                      label: 'talkOptions',
                    }                   
                  ],
                },
                {
                  text: 'See you, Shun Ji',
                  children: [
                    {
                      kind: 'speech',
                      character: shunJiName,
                      text: 'Maybe. See ya.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
  customInteractions: [scavengingInteraction],
      // Shop - only available after quest completion
/*      shopInteraction: [
        {
          condition: '1',//'teaHouseUnlocked == 1',
          stock: {
            mundane: [],
            bodyForging: [],
            meridianOpening: [],
            qiCondensation: [
              remnant
            ],
            coreFormation: [],
            pillarCreation: [],
            lifeFlourishing: [],
            worldShaping: [],
            innerGenesis: [],
            soulAscension: [],
          },
          costMultiplier: 2, // 10-0% markup from base prices
          introSteps: [
            {
              kind: 'speech',
              character: shunJiName,
              text: 'Want something?',
            },
          ],
          exitSteps: [
            {
              kind: 'speech',
              character: shunJiName,
              text: 'See ya.',
            },
          ],
        },
      ],*/
    },
  ],
};

export const allUndergroundCharacters: Character[] = [shunJi];

export function initializeUndergroundCharacters() {
  console.log('Adding Underground characters...');

  allUndergroundCharacters.forEach((character) => {
    window.modAPI.actions.addCharacter(character);
  });

  console.log(`✅ Added ${allUndergroundCharacters.length} Underground characters`);
};