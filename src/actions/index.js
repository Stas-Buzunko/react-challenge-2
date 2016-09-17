import axios from 'axios';
import {
  COLOR_CHANGE,
  CHANGE_EXAMPLES,
  TEXT_COLOR_CHANGE,
  TOGGLE_BACKGROUND,
  SELECT_SAMPLE,
  SELECT_ALL_SAMPLES,
  REMOVE_SELECTION,
  TOGGLE_COLOR_PICKER_VISIBILITY,
  MIXER_COLOR_CHANGE,
  CHANGE_MIXER_EXAMPLES,
  FETCH_COLORS,
  MODIFY_SAMPLES,
  CHANGE_EXPORT_TYPE,
  CHANGE_CURRENT_LINK,
} from './types';

export function colorChange(color) {
  return {
    type: COLOR_CHANGE,
    payload: color,
  };
}

export function textColorChange(c) {
  const color = c;
  let textColor = 'rgb(0, 0, 0)';
  if (color.slice(1, 2) < 4) {
    textColor = 'rgb(255, 255, 255)';
  }

  return {
    type: TEXT_COLOR_CHANGE,
    payload: textColor,
  };
}

export function toggleBackground(key) {
  return {
    type: TOGGLE_BACKGROUND,
    payload: key,
  };
}


export function selectSample(sample) {
  return {
    type: SELECT_SAMPLE,
    payload: sample,
  };
}

export function selectAllSamples(samples) {
  return {
    type: SELECT_ALL_SAMPLES,
    payload: samples,
  };
}

export function removeSelection(id) {
  return {
    type: REMOVE_SELECTION,
    payload: id,
  };
}

export function toggleColorPickerVisibility() {
  return {
    type: TOGGLE_COLOR_PICKER_VISIBILITY,
  };
}

export function mixerColorChange(c) {
  return {
    type: MIXER_COLOR_CHANGE,
    payload: c,
  };
}

export function fetchColors() {
  const url = './colors.json';
  const request = axios.get(url);
  return {
    type: FETCH_COLORS,
    payload: request,
  };
}

export function modifySamples(samples) {
  return {
    type: MODIFY_SAMPLES,
    payload: samples,
  };
}

export function changeExportType(type) {
  return {
    type: CHANGE_EXPORT_TYPE,
    payload: type,
  };
}

export function changeCurrentLink(link) {
  return {
    type: CHANGE_CURRENT_LINK,
    payload: link,
  };
}

function cutHex(h) { return (h.charAt(0) === '#') ? h.substring(1, 7) : h; }
function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16); }
function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16); }
function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16); }
function componentToHex(b) {
  const hex = b.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

export function changeExamples(c) {
  const examples = [];
  const R = hexToR(c);
  const G = hexToG(c);
  const B = hexToB(c);
  const Max = Math.max(R, G, B);
  for (let i = 1; i < 11; i++) {
    const r = Math.max((R - Max + 25 * i), 0);
    const g = Math.max((G - Max + 25 * i), 0);
    const b = Math.max((B - Max + 25 * i), 0);

    const currentColor = rgbToHex(r, g, b);
    examples.push(currentColor);
  }

  return {
    type: CHANGE_EXAMPLES,
    payload: examples,
  };
}

export function changeMixerExamples(baseColor, mixerColor) {
  const examples = [];

  const R1 = hexToR(baseColor);
  const G1 = hexToG(baseColor);
  const B1 = hexToB(baseColor);
  const R2 = hexToR(mixerColor);
  const G2 = hexToG(mixerColor);
  const B2 = hexToB(mixerColor);

  for (let i = 1; i < 11; i++) {
    const r = Math.floor((R1 - i * (R1 - R2) / 10));
    const g = Math.floor((G1 - i * (G1 - G2) / 10));
    const b = Math.floor((B1 - i * (B1 - B2) / 10));

    const currentColor = rgbToHex(r, g, b);
    examples.push(currentColor);
  }

  return {
    type: CHANGE_MIXER_EXAMPLES,
    payload: examples,
  };
}

