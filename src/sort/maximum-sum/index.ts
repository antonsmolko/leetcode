const maximumSum = (nums: number[]): number => {
    const getSumNumbers = (num: number) => {
        let sum = 0

        while (num > 0) {
            sum += num % 10
            num = ~~(num / 10)
        }

        return sum
    }

    let max = -1

    const map: { [sum: number]: number } = {}

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]
        const sum = getSumNumbers(num)

        if (map[sum]) {
            max = Math.max(max, num + map[sum])
        }

        map[sum] ??= 0
        map[sum] = Math.max(map[sum], num)
    }

    return max
}

export default maximumSum