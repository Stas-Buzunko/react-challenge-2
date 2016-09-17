import {
  FETCH_COLORS,
  CHANGE_EXPORT_TYPE,
  CHANGE_EXAMPLES,
  COLOR_CHANGE,
  TEXT_COLOR_CHANGE,
  TOGGLE_BACKGROUND,
  TOGGLE_COLOR_PICKER_VISIBILITY
} from '../actions/types';

const INITIAL_STATE = {
  export_type:'Sass' ,
  schemes: {
    aspirin:[],
    bird:[],
    firenze:[],
    honey:[] ,
    retromatic:[]
  },
  flat: [],
  material:[],
  examples: [],
  COLOR: '',
  darkBackgroundDarker:false,
  darkBackgroundMixed:false,
  colorPickerVisible: false 
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case COLOR_CHANGE: 
    return { ...state, COLOR: action.payload };
  case TEXT_COLOR_CHANGE:
    return { ...state, textColor: action.payload };
  case TOGGLE_BACKGROUND:
    if (action.payload == 'dark') {
      return { ...state, darkBackgroundDarker: !state.darkBackgroundDarker };
    } else {
      return { ...state, darkBackgroundMixed: !state.darkBackgroundMixed };
    }
  case TOGGLE_COLOR_PICKER_VISIBILITY:
    return { ...state, colorPickerVisible: !state.colorPickerVisible };
  case CHANGE_EXAMPLES:
    return { ...state, examples: action.payload };
  case FETCH_COLORS:
    return {
      ...state,
      flat: action.payload.data.presets.flat,
      material: action.payload.data.presets.material,
      schemes: action.payload.data.schemes
    };
  case CHANGE_EXPORT_TYPE:
    return { ...state, export_type:action.payload };
  default:
    return state;
  }
}