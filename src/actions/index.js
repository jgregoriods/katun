export const CHANGE_LONGCOUNT = 'CHANGE_LONGCOUNT';
export const CHANGE_CONSTANT = 'CHANGE_CONSTANT';
export const UPDATE_WESTERN = 'UPDATE_WESTERN';
export const CHANGE_GREGORIAN = 'CHANGE_GREGORIAN';
export const TOGGLE_GREG_ERA = 'TOGGLE_GREG_ERA';
export const UPDATE_MAYA = 'UPDATE_MAYA';
export const UPDATE_JULIAN = 'UPDATE_JULIAN';
export const CHANGE_JULIAN = 'CHANGE_JULIAN';
export const TOGGLE_JUL_ERA = 'TOGGLE_JUL_ERA';
export const UPDATE_GREGORIAN = 'UPDATE_GREGORIAN';

export function changeLongCount(index, value) {
  return {
    type: CHANGE_LONGCOUNT,
    index,
    value
  };
}

export function changeConstant(value) {
  return {
    type: CHANGE_CONSTANT,
    value
  }
}

export function updateWestern(mayaDate, constant) {
  return {
    type: UPDATE_WESTERN,
    mayaDate,
    constant
  }
}

export function changeGregorian(index, value, era) {
  return {
    type: CHANGE_GREGORIAN,
    index,
    value,
    era
  }
}

export function toggleGregorianEra() {
  return {
    type: TOGGLE_GREG_ERA
  }
}

export function updateMaya(gregorianDate, constant) {
  return {
    type: UPDATE_MAYA,
    gregorianDate,
    constant
  }
}

export function updateJulian(gregorianDate) {
  return {
    type: UPDATE_JULIAN,
    gregorianDate
  }
}

export function changeJulian(index, value, era) {
  return {
    type: CHANGE_JULIAN,
    index,
    value,
    era
  }
}

export function toggleJulianEra() {
  return {
    type: TOGGLE_JUL_ERA
  }
}

export function updateGregorian(julianDate) {
  return {
    type: UPDATE_GREGORIAN,
    julianDate
  }
}