import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var i = 0;
    array.forEach(element => {
        i+=element
    });
    return i
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let n = array.length/2
    let a = [...array].sort((a, b) => a - b)
    if (a.length % 2 === 0) {
        return (a[n] + a[n-1]) / 2
    }
    return a[n]
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    let median = getMedian(array)
    let length = array.length
    let mean = getSum(array)/array.length
    let changed = [length]
    for(let i = 0; i < length; i++) {
        changed[i] = (array[i] - mean) * (array[i] - mean)
    }
    let variance = getSum(changed) / (length)
    let sum = getSum(array)
    let standard_deviation = Math.sqrt(variance)
    return {length, sum, mean, median, min, max, variance, standard_deviation}
}

