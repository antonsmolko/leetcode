const maxProfit = (prices: number[]): number => {
    let lowerCost = prices[0]
    let profit = 0

    for (let i = 1; i < prices.length; i += 1) {
        const price = prices[i]
        lowerCost = Math.min(price, lowerCost)
        profit = Math.max(profit, price - lowerCost)
    }

    return profit
}

export default maxProfit