export function changeLongCount(index, value) {
  return {
    type: 'LONGCOUNT_CHANGED',
    index,
    value
  };
}

export function changeConstant(value) {
  return {
    type: 'CONSTANT_CHANGED',
    value
  }
}

export function changeGregorian(index, value) {
  return {
    type: 'GREGORIAN_CHANGED',
    index,
    value
  }
}

export function changeJulian(index, value) {
  return {
    type: 'JULIAN_CHANGED',
    index,
    value
  }
}