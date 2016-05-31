import { combineReducers } from 'redux';
import ColorReducer from './reducer_color';
import SampleReducer from './reducer_sample';
import MixerReducer from './reducer_mixer';
import ExportReducer from './reducer_export';
import NavBarReducer from './reducer_navbar';

const rootReducer = combineReducers({
  colors: ColorReducer,
  samples: SampleReducer,
  mixer: MixerReducer,
  modifiedSamples: ExportReducer,
  currentLink: NavBarReducer
});

export default rootReducer;