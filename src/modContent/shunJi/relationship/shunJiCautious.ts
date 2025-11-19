import { Character, CharacterRelationshipDefinition } from 'afnm-types';
import { shunJiName } from '../shunJiFlags'

const refuse = window.modAPI.gameData.locations['Refuse Shower'].name;
const name = shunJiName;


export const shunJiCautious: CharacterRelationshipDefinition = {
  requiredApproval: 15,
  relationshipCategory: 'Friendly',
  name: 'Cautious',
  tooltip: 'Cautious and waiting for the other shoe to drop, ${name} is getting more comfortable in your presence but still afraid of betrayal.',

  progressionEvent: {
    name: '',
    tooltip: ``,
    event: [],
  },
};