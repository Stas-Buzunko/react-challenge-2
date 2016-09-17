import { combineReducers } from 'redux';
import colors from './colorReducer';
import samples from './sampleReducer';
import mixer from './mixerReducer';
import modifiedSamples from './exportReducer';
import currentLink from './navbarReducer';

const rootReducer = combineReducers({
  colors,
  samples,
  mixer,
  modifiedSamples,
  currentLink,
});

export default rootReducer;
