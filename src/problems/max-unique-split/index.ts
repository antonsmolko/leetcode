const maxUniqueSplit = (s: string): number => {
    let max = 0
    const set: Set<string> = new Set()
    const iter = (startIndex: number = 0) => {
        if (startIndex === s.length) return set.size

        for (let i = startIndex; i < s.length; i += 1) {
            const lettersLeft = s.length - i
            if (max >= set.size + lettersLeft) return max

            const candidate = s.slice(startIndex, i + 1)

            if (set.has(candidate)) continue

            set.add(candidate)
            max = Math.max(max, iter(i + 1))
            set.delete(candidate)
        }

        return max
    }

    return iter()
}

export default maxUniqueSplit
