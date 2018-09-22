import { CHANGE_DISTANCE_NUMBER } from '../actions/index';

const initialState = [0, 0, 0, 0, 0]

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_DISTANCE_NUMBER:
      const newDistanceNumber = [...state];
      newDistanceNumber[action.index] = action.value;
      return newDistanceNumber;
    default:
      return state;
  }
};