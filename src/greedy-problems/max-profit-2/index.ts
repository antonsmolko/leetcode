const maxProfit = (prices: number[]): number => {
    let profit = 0

    for (let i = 1; i < prices.length; i += 1) {
        profit += Math.max(0, prices[i] - prices[i - 1])
    }

    return profit
}

export default maxProfit