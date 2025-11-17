import { Character, EventStep } from 'afnm-types';
import image from './images/shunJi.png';
import portrait from './images/shunJiPortrait.png';

const remnant = window.modAPI.gameData.items['Discarded Remnant'];
const refuse = window.modAPI.gameData.locations['Refuse Shower'].name;

export const shunJi: Character = {
  name: 'Shun Ji',
  displayName: 'Shun Ji',
  allegiance: undefined, // Neutral - available to all players
  bio: 'A rough woman found in the Refuse Pile.',
  condition:  '1', //'discoveredTeaQuest == 1', // Only visible after quest starts
  portrait: portrait,
  image: image,
  definitions: [
    {
      kind: 'neutral',
      condition: '1',
      realm: 'qiCondensation',
      realmProgress: 'Early',

      stats: [], // No combat stats - not sparrable

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
              character: 'Shun Ji',
              text: 'Yeah?',
            },
            {
              kind: 'choice',
              choices: [
                {
                  text: 'How did you end up here?',
                  children: [
                    {
                      kind: 'speech',
                      character: 'Shun Ji',
                      text: 'Fell, like everyone else. What did you think?',
                    },
                  ],
                },
                {
                  text: 'How do you live in this place?',
                  children: [
                    {
                      kind: 'speech',
                      character: 'Shun Ji',
                      text: 'Find stuff. Trade. Get pills. Nothing special.',
                    },
                  ],
                },
                {
                  text: 'See you, Shun Ji',
                  children: [
                    {
                      kind: 'speech',
                      character: 'Shun Ji',
                      text: 'Maybe. See ya.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],

      // Shop - only available after quest completion
      shopInteraction: [
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
          costMultiplier: 2, // 20% markup from base prices
          introSteps: [
            {
              kind: 'speech',
              character: 'Shun Ji',
              text: 'Want something?',
            },
          ],
          exitSteps: [
            {
              kind: 'speech',
              character: 'Shun Ji',
              text: 'See ya.',
            },
          ],
        },
      ],
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
}