const topKFrequent = (words: string[], k: number): string[] => {
    const hash: { [word: string]: number } = {}

    for (let i = 0; i < words.length; i += 1) {
        const word: string = words[i]
        hash[word] ||= 0
        hash[word] += 1
    }

    return Object.keys(hash).sort((a, b) => hash[b] - hash[a] || a.localeCompare(b)).slice(0, k)
}

export default topKFrequent