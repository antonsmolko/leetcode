const partition = (s: string): string[][] => {
    const palindromes: string[][] = []

    const isPalindrome = (s: string, start: number, end: number): boolean => {
        while (start < end) {
            if (s[start] !== s[end]) return false
            start += 1
            end -= 1
        }
        return true
    }

    const iter = (setCandidate: string[] = [], startIndex: number = 0) => {
        if (startIndex === s.length) {
            palindromes.push([...setCandidate])
            return
        }

        for (let i = startIndex; i < s.length; i += 1) {
            if (!isPalindrome(s, startIndex, i)) continue

            setCandidate.push(s.slice(startIndex, i + 1))
            iter(setCandidate, i + 1)
            setCandidate.pop()
        }
    }

    iter()

    return palindromes
}

export default partition
