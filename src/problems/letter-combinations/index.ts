/**
 * Полный перебор. Maximum Product of the Length of Two Palindromic Subsequences
 * Найти максимальное произведение длин полиндромных подпоследовательностей
 */
const letterCombination = (digits: string): string[] => {
    const combinations: string[] = []

    if (!digits) return combinations

    const charsMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const getDigitChars = (digs: string): string[] => {
        const digitChars: string[] = []

        for (let i = 0; i < digs.length; i += 1) {
            const index = parseInt(digs[i])
            digitChars.push(charsMap[index])
        }

        return digitChars
    }

    const digitsChars = getDigitChars(digits)

    const _letterCombination = (combinationCandidate: string[] = [], startIndex: number = 0): void => {
        if (combinationCandidate.length === digitsChars.length) {
            combinations.push(combinationCandidate.join(''))
            return
        }

        const chars = digitsChars[startIndex]

        for (let i = 0; i < chars.length; i += 1) {
            const char = chars[i]
            combinationCandidate.push(char)
            _letterCombination(combinationCandidate, startIndex + 1)
            combinationCandidate.pop()
        }
    }

    _letterCombination()

    return combinations
}

export default letterCombination
