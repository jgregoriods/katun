const initialState = 584286;

export default function(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_CONSTANT':
      return action.value;
    default:
      return state; 
  }
}