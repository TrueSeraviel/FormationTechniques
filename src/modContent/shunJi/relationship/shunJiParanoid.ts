import { Character, CharacterRelationshipDefinition } from 'afnm-types';
import { shunJiName } from '../shunJiFlags'

const refuse = window.modAPI.gameData.locations['Refuse Shower'].name;
const name = shunJiName;


export const shunJiParanoid: CharacterRelationshipDefinition = {
  requiredApproval: 25,
  relationshipCategory: 'Friendly',
  name: 'Paranoid',
  tooltip: 'Distant, untrusting, and on edge around you, ${name} is uncertain but willing to to take the opportunity.',

  progressionEvent: {
    name: 'Resting in the Shower',
    tooltip: `A chance meeting with ${name} gives you an opportunity to help her out.`,
    locationOverride: refuse,
    event: [
      {
        kind: 'location',
        location: refuse,
      },
      {
        kind: 'text',
        text: `Trawling through the Refuse Shower, you notice a flash of blue hair in the distance. As you approach, you see ${name} rummaging through one of the massive piles of discarded items, her expression tense and watchful.`,
      },
      {
        kind: 'choice',
        choices: [
          {
            text: `"Shun Ji, is everything going fine?"`,
            children: [
              {
                kind: 'speech',
                character: name,
                text: `"No. Pickings are slim. Not liking this corner today," she replies, her eyes darting around nervously.`,
              },
            ],
          },
          {
            text: `"Find anything interesting?"`,
            children: [
              {
                kind: 'speech',
                character: name,
                text: `"Nothing worth," she replies curtly, not looking up from her search. "Bad corner today"`,
              },
            ],
          },
        ],
      },
      {
        kind: 'text',
        text: `Looking around, you pick up broken pieces of Formation Equipment, splashes of blood, and divots in the ground. There was definitely a fight here, and looking at ${name} makes it clear she was the one fighting. Now that you look at her more closely, she looks tired, the bags under her eyes are heavier then normal and her movements less graceful than her usual.`,
      },
      {
        kind: 'choice',
        choices: [
          {
            text: `"Do you need a rest?"`,
            children: [
              {
                kind: 'speech',
                character: name,
                text: `"Can't. Nothing close, and I can't waste the time. Need the resources"`,
              },
              {
                kind: 'choice',
                choices: [
                  {
                    text: `"I have a place close to here. Want to take a break there?"`,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            text: `"I have a place close to here. Want to take a break there?"`,
            children: [],
          },
        ],
      },
      {
        kind: 'text',
        text: `${name} turns to you for the first time, and from the front it's even more evident that she's running on fumes.`,
      },
      {
        kind: 'speech',
        character: name,
        text: `"A place, the the Shower?" she asked, clearly unbelieving. "Not happening. No Gōngrén would do that."`,
      },
      {
        kind: 'text',
        text: `You smile, and lead her back to the former Andao base. It's not the most comfortable place, but it's safe and quiet, and most importantly close by. And Zi Liang left some bunk beds she could use.`,
      },
      {
        kind: 'text',
        text: `The moment the both of you pass through the defensive formation, ${name} eyes go wide. You keep smiling as you lead her to one of the bunk beds, and she collapses onto it with a sigh.`,
      },
      {
        kind: 'speech',
        character: name,
        text: `She turns around to look at you. "No clue how you got this place, but thanks. Didn't want to go back empty handed."`,
      },
      {
        kind: 'text',
        text: `You still have no idea about where ${name} is going to, but you let the comment pass without mention. She'll discuss it when she decides to.`,
      },
      {
        kind: 'speech',
        character: name,
        text: `She closes her eyes. "You'll be keeping guard?"`,
      },
      {
        kind: 'choice',
        choices: [
          {
            text: `"Of course"`,
            children: [
              {
                kind: 'speech',
                character: name,
                text: `"Thanks, {forename}. Won't take too long."`,
              },
              {
                kind: 'choice',
                choices: [
                  {
                    text: `"I'll tie you into the formation. You'll be able to use this place when you need to."`,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            text: `"I'll tie you into the formation. You'll be able to use this place when you need to."`,
            children: [],
          },
        ],
      },
      {
        kind: 'speech',
        character: name,
        text: `She nods seriously. "I'll owe you one."`,
      },
      {
        kind: 'progressRelationship',
        character: name,
      },
      {
        kind: 'text',
        text: `Less than a minute later, she was asleep, and you turned to core of the base. You had a formation to modify.`,
      },
    ],
  },
};