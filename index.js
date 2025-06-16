// expecting time to be a string in the format like '8:15' or '12:30'
const numberWords = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "thirty"
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  } else {
    const parts = time.split(':');
    if (parts.length === 2) {
      return convertHoursMinutes(parts[0], parts[1])
    } else {
      console.error('invalid string')
    }
  }
}

function convertHoursMinutes(hours, minutes) {
  const minutesInt = Number(minutes);
  if (minutesInt > 0 && minutesInt <= 30) {
    const connector = 'past';
    return concatenateParts(minutes, connector, hours);
  } else if (minutesInt > 30 && minutesInt < 60) {
    const connector = 'to';
    return concatenateParts(String(60 - minutesInt), connector, hours);
  } else if (minutesInt === 0) {
    const hoursWord = numberWords[hours];
    return hoursWord + "o'clock";
  } else {
    console.error()
  }
}

function concatenateParts(minutes, connector, hours) {
  const hoursWord = numberWords[hours];
  const minutesWord = numberWords[minutes];
  return minutesWord + connector + hoursWord;
}

module.exports = { convertTimeToWords };