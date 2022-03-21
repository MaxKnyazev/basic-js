const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const allowedCharacters = '0123456789.';
  const K = 0.693 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity !== 'string' || +sampleActivity === 0) return false;

  for (let i = 0; i < sampleActivity.length; i++) {
    if (!allowedCharacters.includes(sampleActivity[i])) return false;
  }

  if (+sampleActivity > MODERN_ACTIVITY) return false;

  let t = Math.log(MODERN_ACTIVITY / sampleActivity) / K;
  return Math.ceil(t);
}

module.exports = {
  dateSample,
};
