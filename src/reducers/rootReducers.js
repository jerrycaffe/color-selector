import {ADD_COLOR, INPUT_VALUE, INPUT_NAME} from '../actions';

const initialState = {
  newValue: "",
  newName: "",
  colors: [
    {id: 1, name: 'Red', value:"Red"}, 
    {id: 2, name: 'Green', value: "Green"}, 
    {id: 3, name: 'Blue', value:"Blue"},
    {id: 4, name: 'Gold', value:"Gold"},
  ]
}

function rootReducers(state=initialState, action){
  switch(action.type){
    case ADD_COLOR:
      const id = Math.floor(Math.random()*1000)
      const newColor = {id, name: action.name, value: action.value};
      
      return {
        ...state,
        colors:  [newColor, ...state.colors] 
      }
    case INPUT_VALUE:
      return {
        ...state,
        newValue: action.payload
      }
      case INPUT_NAME:
      return {
        ...state,
        newName: action.payload
      }
      default: 
        return state
  }
}

export default rootReducers;