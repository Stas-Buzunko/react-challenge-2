import axios from 'axios';

export const COLOR_CHANGE = 'COLOR_CHANGE';
export const CHANGE_EXAMPLES = 'CHANGE_EXAMPLES';
export const TEXT_COLOR_CHANGE = 'TEXT_COLOR_CHANGE';
export const TOGGLE_BACKGROUND = 'TOGGLE_BACKGROUND';
export const SELECT_SAMPLE = 'SELECT_SAMPLE';
export const SELECT_ALL_SAMPLES = 'SELECT_ALL_SAMPLES';
export const REMOVE_SELECTION = 'REMOVE_SELECTION';
export const TOGGLE_COLOR_PICKER_VISIBILITY = 'TOGGLE_COLOR_PICKER_VISIBILITY';
export const MIXER_COLOR_CHANGE = 'MIXER_COLOR_CHANGE';
export const CHANGE_MIXER_EXAMPLES = 'CHANGE_MIXER_EXAMPLES';
export const FETCH_COLORS = 'FETCH_COLORS';
export const MODIFY_SAMPLES ='MODIFY_SAMPLES';
export const CHANGE_EXPORT_TYPE ='CHANGE_EXPORT_TYPE';
export const CHANGE_CURRENT_LINK = 'CHANGE_CURRENT_LINK';

export function colorChange(color) {
	return {
		type: COLOR_CHANGE,
		payload: color
	};
}

export function textColorChange(c) {
	const color = c;
	if (color.slice(1,2) < 4) {
		const textColor='rgb(255, 255, 255)';
		return {
			type: TEXT_COLOR_CHANGE,
			payload: textColor
		};
	} else {
		const textColor='rgb(0, 0, 0)';
		return {
			type: TEXT_COLOR_CHANGE,
			payload: textColor
		};
	}	
}

export function toggleBackground(key) {
	return {
		type: TOGGLE_BACKGROUND,
		payload: key
	};
}


export function selectSample(sample){
	return {
		type: SELECT_SAMPLE,
		payload: sample
	};
}

export function selectAllSamples(samples){
	return {
		type: SELECT_ALL_SAMPLES,
		payload: samples
	}
}

export function removeSelection(id){
	return {
		type: REMOVE_SELECTION,
		payload: id
	};
}

export function toggleColorPickerVisibility(){
	return {
		type: TOGGLE_COLOR_PICKER_VISIBILITY
	}
}

export function mixerColorChange(c) {
	return {
		type: MIXER_COLOR_CHANGE,
		payload: c
	};
}

export function fetchColors(){
	const url = './colors.json';
	const request = axios.get(url);
	return {
		type: FETCH_COLORS,
		payload: request
	}
}

export function modifySamples(samples){
	return {
		type:MODIFY_SAMPLES,
		payload: samples
	}
}

export function changeExportType(type){
	return {
		type: CHANGE_EXPORT_TYPE,
		payload: type
	}
}

export function changeCurrentLink(link){
	return {
		type: CHANGE_CURRENT_LINK,
		payload: link
	}
}

export function changeExamples(c){
	const examples = [];
	function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
	function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
	function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
	function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
	const R = hexToR(c);
	const G = hexToG(c);
	const B = hexToB(c);
	const Max =  Math.max(R,G,B);
		for (let i = 1; i < 11; i++) {
			let r = Math.max((R-Max+25*i), 0);
			let g = Math.max((G-Max+25*i), 0);
			let b = Math.max((B-Max+25*i), 0);
			function componentToHex(c) {
    		var hex = c.toString(16);
    		return hex.length == 1 ? "0" + hex : hex;
			}

			function rgbToHex(r, g, b) {
			    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
			}
			let currentColor = rgbToHex(r,g,b);
			examples.push(currentColor);
		}

	return {
		type: CHANGE_EXAMPLES,
		payload: examples
	};
}

export function changeMixerExamples(baseColor, mixerColor) {
	const examples = [];
	function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
	function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
	function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
	function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
	const R1 = hexToR(baseColor);
	const G1 = hexToG(baseColor);
	const B1 = hexToB(baseColor);
	const R2 = hexToR(mixerColor);
	const G2 = hexToG(mixerColor);
	const B2 = hexToB(mixerColor);
		for (let i = 1; i < 11; i++) {
			let r = Math.floor((R1-i*(R1-R2)/10));
			let g = Math.floor((G1-i*(G1-G2)/10));
			let b = Math.floor((B1-i*(B1-B2)/10))
			function componentToHex(c) {
    		var hex = c.toString(16);
    		return hex.length == 1 ? "0" + hex : hex;
			}

			function rgbToHex(r, g, b) {
			    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
			}
			let currentColor = rgbToHex(r,g,b);
			examples.push(currentColor);
		}
	return {
		type: CHANGE_MIXER_EXAMPLES,
		payload: examples
	};
}