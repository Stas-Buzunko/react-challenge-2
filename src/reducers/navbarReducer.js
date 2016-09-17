import { CHANGE_CURRENT_LINK } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case CHANGE_CURRENT_LINK:
      return { ...action.payload };
    default:
      return state;   
  }
}