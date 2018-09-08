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

export function changeGregorian(index, value, era) {
  return {
    type: 'GREGORIAN_CHANGED',
    index,
    value,
    era
  }
}

export function toggleGregorianEra() {
  return {
    type: 'GREGORIAN_ERA_CHANGED'
  }
}

export function changeJulian(index, value, era) {
  return {
    type: 'JULIAN_CHANGED',
    index,
    value,
    era
  }
}

export function toggleJulianEra() {
  return {
    type: 'JULIAN_ERA_CHANGED'
  }
}