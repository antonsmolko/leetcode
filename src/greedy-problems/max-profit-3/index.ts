const maxProfit = (prices: number[], fee: number): number => {
    let cash = 0
    let hold = -Infinity

    for (let i = 0; i < prices.length; i += 1) {
        cash = Math.max(cash, hold + prices[i] - fee)
        hold = Math.max(hold, cash - prices[i])
    }

    return cash
}

export default maxProfit