import { combineReducers } from 'redux';
import colors from './color_reducer';
import samples from './sample_reducer';
import mixer from './mixer_reducer';
import modifiedSamples from './export_reducer';
import currentLink from './navbar_reducer';

const rootReducer = combineReducers({
  colors,
  samples,
  mixer,
  modifiedSamples,
  currentLink
});

export default rootReducer;