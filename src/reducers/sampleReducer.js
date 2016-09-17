import {
  SELECT_SAMPLE,
  SELECT_ALL_SAMPLES,
  REMOVE_SELECTION,
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SELECT_SAMPLE:
      if (!state.length || state.length < 10) {
        return [...state, action.payload];
      }
      return [
        ...state.slice(1, 10),
        action.payload,
      ];
    case SELECT_ALL_SAMPLES:
      return [...action.payload];
    case REMOVE_SELECTION:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
}

