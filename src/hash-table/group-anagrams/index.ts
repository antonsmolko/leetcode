const groupAnagrams = (strs: string[]): string[][] => {
    if (!strs.length) return []

    const map = new Map<string, string[]>()

    for (let i = 0; i < strs.length; i += 1) {
        const str = strs[i]
        const sortedStr = str.split('').sort().join()

        const anagram = map.get(sortedStr)
        if (anagram) {
            anagram.push(str)
        } else {
            map.set(sortedStr, [str])
        }
    }

    return [...map.values()]
}

export default groupAnagrams