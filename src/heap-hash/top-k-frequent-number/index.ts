const topKFrequent = (nums: number[], k: number): number[] => {
    const hash: { [num: number]: number } = {}

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]
        hash[num] ??= 0
        hash[num] += 1
    }

    return Object.keys(hash).map(Number).sort((a, b) => hash[b] - hash[a]).slice(0, k)
}

export default topKFrequent