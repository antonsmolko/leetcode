const maximumBobPoints = (numArrows: number, aliceArrows: number[]): number[] => {
    let bobArrows: number[] = []
    let maxPoints = 0

    const iter = (
        bobArrowsCandidate: number[] = Array(aliceArrows.length).fill(0),
        lastIndex: number = aliceArrows.length - 1,
        restArrows: number = numArrows,
        bobPoints: number = 0
    ) => {
        if (lastIndex === 0) {
            if (bobPoints > maxPoints) {
                maxPoints = bobPoints
                bobArrows = [...bobArrowsCandidate]
                bobArrows[0] += restArrows
            }
            return
        }

        const arrowsCountToBeatAlice = aliceArrows[lastIndex] + 1

        if (restArrows >= arrowsCountToBeatAlice) {
            bobArrowsCandidate[lastIndex] = arrowsCountToBeatAlice
            iter(bobArrowsCandidate, lastIndex - 1, restArrows - arrowsCountToBeatAlice, bobPoints + lastIndex)
            bobArrowsCandidate[lastIndex] = 0
        }

        iter(bobArrowsCandidate, lastIndex - 1, restArrows, bobPoints)
    }

    iter()

    return bobArrows
}

export default maximumBobPoints