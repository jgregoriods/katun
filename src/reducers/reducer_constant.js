export default function(state = 584286, action) {
  switch(action.type) {
    case 'CONSTANT_CHANGED':
      return action.value;
  }
  return state;
}