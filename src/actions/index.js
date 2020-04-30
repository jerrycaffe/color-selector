export const ADD_COLOR = "ADD_COLOR";
export const INPUT_VALUE = "INPUT_VALUE";
export const INPUT_NAME = "INPUT_NAME";


export function addColor(name, value){
  return {
    type: ADD_COLOR,
    name,
    value
  }
}

export function inputChange(payload){
  return {
    type: INPUT_VALUE,
    payload
  }
}
export function inputName(payload){
  return {
    type: INPUT_NAME,
    payload
  }
}