const longestSubarray = (nums: number[], limit: number): number => {
    const addToDecreasingQueue = (arr: number[], num: number) => {
        while (arr.length > 0) {
            if (num <= arr[arr.length - 1]) break
            arr.pop()
        }
        arr.push(num)
    }

    const addToIncreasingQueue = (arr: number[], num: number) => {
        while (arr.length > 0) {
            if (num >= arr[arr.length - 1]) break
            arr.pop()
        }
        arr.push(num)
    }

    let start = 0
    let end = 0
    let maxLength = 0
    const decreasingQueue: number[] = []
    const increasingQueue: number[] = []

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]

        addToDecreasingQueue(decreasingQueue, num)
        addToIncreasingQueue(increasingQueue, num)

        while (decreasingQueue[0] - increasingQueue[0] > limit) {
            const startNum = nums[start]
            if (startNum === decreasingQueue[0]) {
                decreasingQueue.shift()
            }

            if (startNum === increasingQueue[0]) {
                increasingQueue.shift()
            }
            start += 1
        }

        maxLength = Math.max(maxLength, end - start + 1)
        end += 1
    }

    return maxLength
}

export default longestSubarray