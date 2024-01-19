const searchInRotated = (nums: number[], target: number): number => {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        const medium = Math.trunc((start + end) / 2)
        const num = nums[medium]

        if (num === target) return medium

        if (nums[start] <= num) {
            if (nums[start] <= target && target < num) {
                end = medium - 1
            } else {
                start = medium + 1
            }
        } else {
            if (num <= target && target <= nums[end]) {
                start = medium + 1
            } else {
                end = medium - 1
            }
        }
    }

    return -1
}

export default searchInRotated