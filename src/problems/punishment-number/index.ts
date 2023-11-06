const punishmentNumber = (n: number): number => {
    const checkSubsetsSum = (num: number, square: number): boolean => {
        const squareStr = String(square)
        const iter = (candidate: number = 0, startIndex: number = 0): boolean => {
            if (startIndex === squareStr.length) {
                return candidate === num
            }
            if (candidate > num) return false

            for (let i = startIndex; i < squareStr.length; i += 1) {
                const num = parseInt(squareStr.slice(startIndex, i + 1))
                const check = iter(candidate + num, i + 1)

                if (check) return true
            }

            return false
        }

        return iter()
    }

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
