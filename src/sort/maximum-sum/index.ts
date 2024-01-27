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
    }, {} as { [sum: number]: number[] })

    const values = Object.values(map)

    if (values.every(({ length }) => length === 1)) return -1

    let maxSum = 0

    for (let i = 0; i < values.length; i += 1) {
        if (values[i].length < 2) continue

        const [num1, num2] = values[i].sort((a, b) => b - a)
        maxSum = Math.max(maxSum, num1 + num2)
    }

    return maxSum
}

export default maximumSum