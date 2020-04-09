import {ADD_COLOR, COLOR_VALUE} from '../actions';



const initialState = {
  colorValue: '',
  colors: [
    {id: 1, value:"Red"}, 
    {id: 2, value: "Green"}, 
    {id: 3, value:"Blue"},
    {id: 4, value:"Gold"},
  ]
}

function rootReducers(state=initialState, action){
  switch(action.type){
    case ADD_COLOR:
      const value = action.payload;
      return {
        ...state,
        colors:  [value, ...state.colors] 
      }
    case COLOR_VALUE:
      return {
        ...state,
        colorValue: action.payload
      }
      default: 
        return state
  }
}

export default rootReducers;