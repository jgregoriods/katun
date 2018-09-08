const initialState = 584286;

export default function(state = initialState, action) {
  switch(action.type) {
    case 'CONSTANT_CHANGED':
      return action.value;
  }
  return state;
}