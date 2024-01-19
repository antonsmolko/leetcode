const twoSum = (nums: number[], target: number): number[] => {
    const map: { [num: number]: number} = {}

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]
        const num2Index: number = map[target - num]

        if (num2Index !== undefined) return [num2Index, i]

        map[num] = i
    }

    return []
}

export default twoSum