const search = (nums: number[], target: number): number => {
    let l = 0, r = nums.length - 1

    while (l <= r) {
        const m = Math.trunc((l + r) / 2)
        const num = nums[m]

        if (num === target) return m
        if (num > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return -1
}

export default search