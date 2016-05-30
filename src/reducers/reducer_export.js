import { MODIFY_SAMPLES } from '../actions/index';

const INITIAL_STATE = { modifiedSamples: [] };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case MODIFY_SAMPLES:
			return [...action.payload ];
		default:
			return state;		
	}
}