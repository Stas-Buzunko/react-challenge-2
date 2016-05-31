import { CHANGE_CURRENT_LINK } from '../actions/index';

const INITIAL_STATE = { currentLink: '/' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_CURRENT_LINK:
      return { currentLink: action.payload };
    default:
      return state;   
  }
}