const singleNumber = (nums: number[]): number => nums.reduce((acc, num) => acc ^ num, 0)

export default singleNumber