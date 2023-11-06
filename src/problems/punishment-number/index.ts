const punishmentNumber = (n: number): number => {
    const checkSubsetsSum = (num: number, square: number): boolean => {
        const squareStr = String(square)
        const iter = (candidate: number = 0, startIndex: number = 0): boolean => {
            if (startIndex === squareStr.length) return candidate === num
            if (candidate > num) return false

            for (let i = startIndex; i < squareStr.length; i += 1) {
                const num = parseInt(squareStr.slice(startIndex, i + 1))
                if (iter(candidate + num, i + 1)) return true
            }

            return false
        }

        return iter()
    }

    /**
     * Optimized checkSubsetsSum
     * const checkSubsetsSum = (num: number, square: number): boolean => {
     *     const iter = (candidate: number = 0, digits: number = square): boolean => {
     *         if (digits === 0) return candidate === num
     *
     *         let divisor = 10
     *         let trimmedDigits = digits
     *
     *         while (trimmedDigits !== 0) {
     *             const lastNum = digits % divisor
     *             trimmedDigits = Math.trunc(digits / divisor)
     *             if (iter(candidate + lastNum, trimmedDigits)) return true
     *
     *             divisor *= 10
     *         }
     *
     *         return false
     *     }
     *
     *     return iter()
     * }
     */

    let sum = 0

    for (let num = 1; num <= n; num += 1) {
        const square = num ** 2
        if (checkSubsetsSum(num, square)) {
            sum += square
        }
    }

    return sum
}

export default punishmentNumber
