import { CustomCharacterInteraction, CustomCharacterInteractionBlock } from 'afnm-types';
import { shunJiName } from '../shunJiFlags'
//import { Children } from 'react';
import { SportsKabaddi } from '../../../../node_modules/@mui/icons-material';

//const remnant = window.modAPI.;

/*var count = '0';
var random = '0';
var calc = 0;
var eyes = 0;
var digestion = 0;*/

const name = shunJiName;

export const scavengingInteraction: CustomCharacterInteractionBlock = {
  condition: '1',
  name: 'Scavenging the Shower',
  tooltip: 'Go scavenging in the Refuse Shower for resources with Shun Ji.',
  cooldown: 0,
  icon: SportsKabaddi,

  interaction: 
  {
    condition: '1',//'learned_technique == 0',
    disableCondition: 'injured',
    disableTooltip: 'Scavenging requires one to be healthy.',
    locations: [window.modAPI.gameData.locations['Refuse Shower'].name],
    event: 
    [
      {
        kind: 'speech',
        character: name,
        text: '"Loot the Shower?"'
      },
      {
        kind: 'choice',
        choices: 
        [
          {
            text: 'Sure.',
//            condition: { kind: 'money', amount: 500 },
            children: 
            [
              {
                kind: 'speech',
                character: name,
                //amount: '-500'
                text: `${name} grinned. "Good."`
              },
              {
                kind: 'text',
                text: `You and ${name} select on of the near-infinite piles of trash, and start sorting. Most of it is clear crap. either broken beyond belief or useless, but one can always get lucky.`
              },
              {
                kind: 'flag',
                flag: 'random',
                value: 'ceil({rng} * 40)',
                global: false
              },
              {
                kind: 'flag',
                flag: 'calc',
                value: `eyes + digestion - random`,
                global: false
              },
              {
                kind: 'flag',
                flag: 'eyes',
                value: `eyes`,
                global: false
              },
              {
                kind: 'flag',
                flag: 'digestion',
                value: `digestion`,
                global: false
              },
              {
                kind: 'conditional',
                branches: 
                [
                  {
                    condition: `random == 40`,
                    children: [
                      {
                        kind: 'text',
                        text: `The both of you sort through the refuse. {random} | {calc} | {eyes} | {digestion}`,
                      },
                      {
                        kind: 'speech',
                        character: name,
                        text: `${name} grinned. "Jackpot. No clue why any of this would end up in the trash. You want the cores or the artifact?."`
                      },
                      {
                        kind: 'choice',
                        choices : 
                        [ 
                            {
                                text: `The cores.`,
                                children: [
                                    {
                                        kind: 'addItem',
                                        item: window.modAPI.gameData.items['Spirit Core (V)'],
                                        amount: '3',
                                    },
                                ]
                            },
                            {
                                text: `The artifact, please.`,
                                children: [
                                    {
                                        kind: 'addItem',
                                        item: window.modAPI.gameData.items['Decayed Dagger'],
                                        amount: '1',
                                    },
                                ]
                            },
                            {
                                text: `Take whichever one you want most.`,
                                children: [
                                    {
                                        kind: 'speech',
                                        character: name,
                                        text: `${name} nodded. "Cores for sure. I can make a better artifact with those."`
                                    },
                                    {
                                        kind: 'addItem',
                                        item: window.modAPI.gameData.items['Decayed Dagger'],
                                        amount: '1',
                                    },
                                    {
                                        kind: 'approval',
                                        character: name,
                                        amount: '1',
                                    }
                               ]
                            },
                            {
                                text: `No need. You can have both.`,
                                children: [
                                    {
                                        kind: 'speech',
                                        character: name,
                                        text: `${name} nodded seriously. "Thanks. I'll owe you one."`
                                    },
                                    {
                                        kind: 'approval',
                                        character: name,
                                        amount: '2',
                                    }
                                ]
                            }
                        ]
                      },
                    ],
                  },
                  {
                    condition: 'calc > 0',
                    children: [
                      {
                        kind: 'text',
                        text: `The both of you sort through the refuse. {random} | {calc} | {eyes} | {digestion}`,
                      },
                      {
                        kind: 'speech',
                        character: name,
                        text: `${name} grinned. "Nice. I can use some of this, or it'll sell. Claws or scales?."`
                      },
                      {
                        kind: 'choice',
                        choices : 
                        [ 
                            {
                                text: `The claws, if you don't mind.`,
                                children: [
                                    {
                                        kind: 'addItem',
                                        item: window.modAPI.gameData.items['Marbled Claw'],
                                        amount: '5',
                                    },
                                ]
                            },
                            {
                                text: `The scales, please.`,
                                children: [
                                    {
                                        kind: 'addItem',
                                        item: window.modAPI.gameData.items['Marbled Scale'],
                                        amount: '5',
                                    },
                                ]
                            },
                            {
                                text: `Take whichever one you want most.`,
                                children: [
                                    {
                                        kind: 'speech',
                                        character: name,
                                        text: `${name} nodded. "The scales pay more, but not by much. I'll take them."`
                                    },
                                    {
                                        kind: 'addItem',
                                        item: window.modAPI.gameData.items['Marbled Claw'],
                                        amount: '5',
                                    }
                               ]
                            },
                            {
                                text: `No need. You can have both.`,
                                children: [
                                    {
                                        kind: 'speech',
                                        character: name,
                                        text: `${name} nodded seriously. "Thanks. I'll owe you one."`
                                    },
                                    {
                                        kind: 'approval',
                                        character: name,
                                        amount: '1',
                                    }
                                ]
                            }
                        ]
                      },
                    ],
                  },
                  {
                    condition: `calc < 1`,
                    children: [
                      {
                        kind: 'text',
                        text: `The both of you sort through the refuse. {random} | {calc} | {eyes} | {digestion}`,
                      },
                      {
                        kind: 'speech',
                        character: name,
                        text: `${name} frowned. "Remnants. Better than nothing. Half each?."`
                      },
                      {
                        kind: 'choice',
                        choices : 
                        [ 
                            {
                                text: `Sure.`,
                                children: [
                                    {
                                        kind: 'addItem',
                                        item: window.modAPI.gameData.items['Discarded Remnant'],
                                        amount: 'ceil(rng * 10)'
                                    },
                                ]
                            },
                            {
                                text: `No need.`,
                                children: [
                                    {
                                        kind: 'speech',
                                        character: name,
                                        text: `${name} shrugged. "Your loss."`
                                    }
                                ]
                            }
                        ]
                      },
                    ],
                  },
                ]
              },
            ]
          },
          {
            text: `I can't, I'm busy.`,
            children: 
              [
                {
                  kind: 'speech',
                  character: name,
                  text: 'Your loss.'
                },
              ]
          }
        ]
     }
    ]
  },
};
