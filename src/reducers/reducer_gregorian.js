const initialState = new Date(1988, 10, 7);

export default function(state = initialState, action) {
  let newDate;
  switch(action.type) {
    case 'GREGORIAN_CHANGED':
      const dateArgs = [state.getFullYear(), state.getMonth(), state.getDate()];
      if (action.index === 0 && action.era === false) dateArgs[0] = (action.value - 1) * -1;
      else dateArgs[action.index] = action.value;
      newDate = new Date(dateArgs[0], dateArgs[1], dateArgs[2])
      newDate.setFullYear(dateArgs[0]);
      return newDate;
    case 'GREGORIAN_ERA_CHANGED':
      const newYear = (state.getFullYear() -1) * -1;
      newDate = new Date(newYear, state.getMonth(), state.getDate());
      newDate.setFullYear(newYear);
      return newDate;
  }
  return state;
}