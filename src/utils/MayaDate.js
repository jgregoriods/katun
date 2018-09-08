import * as convert from './convert';

const tzolkinNames = ['Imix', 'Ik', 'Akbal', 'Kan', 'Chicchan', 'Cimi', 'Manik', 'Lamat', 'Muluc', 'Oc', 'Chuen', 'Eb', 'Ben', 'Ix', 'Men', 'Cib', 'Caban', 'Edznab', 'Cauac', 'Ahau'];

const haabNames = ['Pop', 'Uo', 'Zip', 'Zotz', 'Tzec', 'Xul', 'Yaxkin', 'Mol', 'Chen', 'Yax', 'Zac', 'Ceh', 'Mac', 'Kankin', 'Muan', 'Pax', 'Kayab', 'Cumku', 'Uayeb'];

export default class MayaDate {
  constructor(longCount) {
    this.longCount = longCount;
  }

  setLongCount(longCount) {
    this.longCount = longCount;
  }
  
  getLongCount() {
    return this.longCount;
  }

  calcTzolkin() {
    const numberOfDays = convert.toDecimal(this.longCount);
  
    // An offset of 4 to account for the base date of 4 Ahau
    let tzolkinNumber = (numberOfDays + 4) % 13;
    if (tzolkinNumber === 0) tzolkinNumber = 13;
  
    // An offset of 19 to account for the base date of 4 Ahau
    const tzolkinName = tzolkinNames[(numberOfDays + 19) % 20];
  
    this.tzolkin = [tzolkinNumber, tzolkinName];
  }

  getTzolkin() {
    return this.tzolkin;
  }
  
  calcHaab() {
    const numberOfDays = convert.toDecimal(this.longCount);
  
    // An offset of 348 is due to the base date of 8 Cumku
    const dayOfYear = (numberOfDays + 348) % 365;
    let haabNumber;
    let haabName;

    if (dayOfYear < 361) {
      haabNumber = (dayOfYear % 20);
      haabName = haabNames[Math.floor(dayOfYear / 20)];
    } else {
      haabNumber = dayOfYear - 360;
      haabName = 'Uayeb';
    }

    this.haab = [haabNumber, haabName];
  }
  
  getHaab() {
    return this.haab;
  }

  calcLordOfNight() {
    const numberOfDays = convert.toDecimal(this.longCount);
    if (numberOfDays % 9 === 0) {
      this.lordOfNight = 9;
    } else {
      this.lordOfNight = numberOfDays % 9;
    }
  }

  getLordOfNight() {
    return this.lordOfNight;
  }
};
