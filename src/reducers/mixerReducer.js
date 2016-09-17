import { 
	MIXER_COLOR_CHANGE, 
	CHANGE_MIXER_EXAMPLES 
} from '../actions/types';

const INITIAL_STATE = { mixerExamples: [], mixerColor: '' };

export default function (state = INITIAL_STATE, action){
  switch(action.type) {
    case MIXER_COLOR_CHANGE:
      return { ...state, mixerColor: action.payload };
    case CHANGE_MIXER_EXAMPLES:
      return { ...state, mixerExamples: action.payload };
    default:
      return state; 
  }
}