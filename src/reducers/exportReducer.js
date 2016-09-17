import { MODIFY_SAMPLES } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case MODIFY_SAMPLES:
      return [...action.payload];
    default:
      return state;
  }
}
