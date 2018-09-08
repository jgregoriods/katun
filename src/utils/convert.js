import MayaDate from './MayaDate';

/**
* Converts a vigesimal number in the Maya system to its decimal equivalent.
* @param {Array} vigesimalNumber The vigesimal Maya number to be converted. Must be an array of length 5.
* @returns {number} A number in the decimal system.
*/
export const toDecimal = (vigesimalNumber) => {
  const vigesimalPlaces = [144000, 7200, 360, 20, 1];
  let decimalNumber = 0;

  for (let i = 0; i < vigesimalPlaces.length; i++) {
    decimalNumber += vigesimalNumber[i] * vigesimalPlaces[i];
  }

  return decimalNumber;
};

/**
 * Converts a decimal number to its equivalent in the Maya vigesimal system.
 * @param {number} decimalNumber The number to be converted.
 * @returns {Array} A Maya vigesimal number as an array of length 5.
 */
export const toVigesimal = (decimalNumber) => {
  const vigesimalPlaces = [144000, 7200, 360, 20, 1];
  const vigesimalNumber = [];

  let remainder = decimalNumber;
  for (let i = 0; i < vigesimalPlaces.length; i++) {
    vigesimalNumber.push(Math.floor(remainder / vigesimalPlaces[i]));
    remainder %= vigesimalPlaces[i];
  }

  return vigesimalNumber;
};

/**
 * Converts a Maya date to the Gregorian calendar.
 * @param {Object} mayaDate The Maya date to be converted. Must be an object of class MayaDate.
 * @param {number} constant The correlation constant to perform the conversion.
 * @returns {Date} A date object.
 */
export const mayaToGreg = (mayaDate, constant) => {
  const daysFromJulianZero = toDecimal(mayaDate.getLongCount()) + constant;

  // Initially set the Gregorian Date to Julian Day Number Zero
  const gregorianDate = new Date (-4713, 10, 24);
  gregorianDate.setDate(gregorianDate.getDate() + daysFromJulianZero);

  return gregorianDate;
};

/**
 * Converts a Gregorian date to the Maya calendar.
 * @param {Date} gregorianDate The date to be converted. Must be a Date object.
 * @param {number} constant The correlation constant to perform the conversion.
 * @returns {Object} An object of class MayaDate.
 */
export const toMaya = (gregorianDate, constant) => {
  const julianZero = new Date (-4713, 10, 24);
  const daysFromJulianZero = Math.round((gregorianDate - julianZero) / 86400000);
  const daysFromMayaZero = daysFromJulianZero - constant;

  return new MayaDate(toVigesimal(daysFromMayaZero));
};

/**
 * Converts a Gregorian date to the Julian calendar.
 * @param {Date} gregorianDate The date to be converted. Must be a Date object.
 * @returns {Date} A Date object representing a date in the Julian calendar.
 */
export const toJulian = (gregorianDate) => {
  // Last alignment between Gregorian and Julian calendars
  const calendarBase = new Date(200, 2, 1);

  const daysFromBase = (gregorianDate - calendarBase) / 86400000;
  const centuriesFromBase = Math.floor(daysFromBase / 36524);
  const extraLeapYears = Math.floor((centuriesFromBase + 2) / 4);
  const daysToShift = centuriesFromBase - extraLeapYears;

  const julianDate = new Date(gregorianDate.getFullYear(), gregorianDate.getMonth(), gregorianDate.getDate());
  julianDate.setFullYear(gregorianDate.getFullYear());
  julianDate.setDate(gregorianDate.getDate() - daysToShift);

  return julianDate;
};

/**
 * Converts a Julian date to the Gregorian calendar.
 * @param {Date} julianDate The date to be converted. Must be a Date object.
 * @returns {Date} A Date object representing a date in the Gregorian calendar.
 */
export const julianToGreg = (julianDate) => {
  // Last alignment between Gregorian and Julian calendars
  const calendarBase = new Date(200, 2, 1);

  const daysFromBase = (julianDate - calendarBase) / 86400000;
  const centuriesFromBase = Math.floor(daysFromBase / 36524);
  const extraLeapYears = Math.floor((centuriesFromBase + 2) / 4);
  const daysToShift = centuriesFromBase - extraLeapYears;

  const gregorianDate = new Date(julianDate.getFullYear(), julianDate.getMonth(),
  julianDate.getDate());
  gregorianDate.setFullYear(julianDate.getFullYear());
  gregorianDate.setDate(julianDate.getDate() + daysToShift);

  return gregorianDate;
};
