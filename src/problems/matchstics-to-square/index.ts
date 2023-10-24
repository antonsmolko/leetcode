/**
 * You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick.
 * You want to use all the matchsticks to make one square.
 * You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.
 * Return true if you can make this square and false otherwise.
 */
const makeSquare = (matchsticks: number[]): boolean => {
    let perimeter = 0

    for (let i = 0; i < matchsticks.length; i += 1) {
        perimeter += matchsticks[i]
    }

    if (perimeter % 4) return false

    const size = perimeter / 4
    const square: [number, number, number, number] = [0, 0, 0, 0]

    const sortedMatchsticks = matchsticks.slice().sort()
    const lastMatchsticksIndex = matchsticks.length - 1

    const _makeSquare = (endIndex: number = lastMatchsticksIndex): boolean => {
        if (endIndex === -1) return true

        const stick = sortedMatchsticks[endIndex]

        for (let i = 0; i < 4; i += 1) {
            if (i > 0 && square[i - 1] === square[i]) continue
            if (square[i] + stick > size) continue

            square[i] += stick
            if (_makeSquare(endIndex - 1)) return true
            square[i] -= stick
        }

        return false
    }

    return _makeSquare()
}

export default makeSquare
