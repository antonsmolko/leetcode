const maxProfit = (prices: number[]): number => {
    let hold = -Infinity
    let rest = 0
    let sold = 0

    for (let i = 0; i < prices.length; i += 1) {
        const price = prices[i]

        hold = Math.max(hold, rest - price)
        rest = Math.max(rest, sold)
        sold = hold + price
    }

    return Math.max(rest, sold)
}

export default maxProfit