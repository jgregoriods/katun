export default function(state = {
  longCount: [9, 8, 9, 13, 0],
  tzolkin: [9, 'Ahau'],
  haab: [13, 'Pop'],
  lordOfNight: 9
}, action) {
  switch(action.type) {
    case 'LONGCOUNT_CHANGED':
      const newLongCount = [...state.longCount];
      newLongCount[action.index] = action.value;
      return {
        longCount: newLongCount,
        tzolkin: state.tzolkin,
        haab: state.haab,
        lordOfNight: state.lordOfNight
      };
  }
  return state;
}