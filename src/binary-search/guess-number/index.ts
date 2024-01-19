/**
 * Forward declaration of guess API.
 * @param {number} n   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guessNumber = (n: number): number => {
    let s = 1
    let e = n

    while (s <= e) {
        let m = Math.floor((s + e) / 2)
        if (guess(m) === -1) {
            e = m - 1
        } else if (guess(m) === 1) {
            s = m + 1
        } else {
            return m
        }
    }

    return -1
}

export default guessNumber