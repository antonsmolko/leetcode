const isAnagram = (s: string, t: string): boolean => {
    // return s.split('').sort().join() === t.split('').sort().join()

    if (s.length !== t.length) return false

    const map = s.split('').reduce((acc, char) => {
        acc[char] ||= 0
        acc[char] += 1

        return acc
    }, {} as { [char: string]: number })

    for (let i = 0; i < t.length; i += 1) {
        const char = t[i]
        if (map[char]) {
            map[char] -= 1
            if (map[char] < 0) return false
        } else {
            return false
        }
    }

    return true
}

export default isAnagram