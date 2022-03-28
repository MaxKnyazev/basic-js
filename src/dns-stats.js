const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = new Map();
  
  for (let domain of domains) {
    let reverseDomain = `${domain.split('.').reverse().join('.')}.`;
    let domainElements = '.'

    for (let i = 0; i < reverseDomain.length; i++) {
      if (reverseDomain[i] === '.') {
        result.has(domainElements)
          ? result.set(domainElements, result.get(domainElements) + 1)
          : result.set(domainElements, 1);
      } 
      domainElements += reverseDomain[i];
    }
  }

  return Object.fromEntries(result)
}

module.exports = {
  getDNSStats
};
