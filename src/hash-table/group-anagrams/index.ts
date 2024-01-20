const groupAnagrams = (strs: string[]): string[][] => {
    const map = new Map<string, string[]>()

    const sort = (str: string) => {
        return str.split('').sort().join()
    }

    for (let i = 0; i < strs.length; i += 1) {
        const str = strs[i]
        const sortedStr = sort(str)

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