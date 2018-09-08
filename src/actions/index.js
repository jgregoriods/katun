export function changeLongCount(index, value) {
  return {
    type: 'CHANGE_LONGCOUNT',
    index,
    value
  };
}

export function changeConstant(value) {
  return {
    type: 'CHANGE_CONSTANT',
    value
  }
}

export function updateWestern(mayaDate, constant) {
  return {
    type: 'UPDATE_WESTERN',
    mayaDate,
    constant
  }
}

export function changeGregorian(index, value, era) {
  return {
    type: 'CHANGE_GREGORIAN',
    index,
    value,
    era
  }
}

export function toggleGregorianEra() {
  return {
    type: 'TOGGLE_GREG_ERA'
  }
}

export function updateMaya(gregorianDate, constant) {
  return {
    type: 'UPDATE_MAYA',
    gregorianDate,
    constant
  }
}

export function updateJulian(gregorianDate) {
  return {
    type: 'UPDATE_JULIAN',
    gregorianDate
  }
}

export function changeJulian(index, value, era) {
  return {
    type: 'CHANGE_JULIAN',
    index,
    value,
    era
  }
}

export function toggleJulianEra() {
  return {
    type: 'TOGGLE_JUL_ERA'
  }
}

export function updateGregorian(julianDate) {
  return {
    type: 'UPDATE_GREGORIAN',
    julianDate
  }
}