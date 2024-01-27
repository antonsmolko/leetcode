const maximumSum = (nums: number[]): number => {
    const getSumNumbers = (num: number) => {
        let sum = 0

        while (num > 0) {
            sum += num % 10
            num = ~~(num / 10)
        }

        return sum
    }

    const map = nums.reduce((acc, num) => {
        const sum = getSumNumbers(num)
        acc[sum] ??= []
        acc[sum].push(num)

        return acc
    }, Array(81).fill(null))

    let maxSum = -1

    for (let i = 0; i < map.length; i += 1) {
        const set = map[i]
        if (!set || set.length < 2) continue

        if (set.length > 2) {
            set.sort((a: number, b: number) => b - a)
        }

        const [num1, num2] = set
        maxSum = Math.max(maxSum, num1 + num2)
    }

    return maxSum
}

export default maximumSum