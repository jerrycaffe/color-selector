export const ADD_COLOR = "ADD_COLOR";
export const COLOR_VALUE = "COLOR_VALUE";

export function addColor(payload){
  return {
    type: ADD_COLOR,
    payload
  }
}

export function colorValue(payload){
  return {
    type: COLOR_VALUE,
    payload
  }
}