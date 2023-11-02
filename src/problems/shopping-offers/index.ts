const shoppingOffers = (price: number[], special: number[][], needs: number[]): number => {
    const getBasePrice = (needs: number[]): number => {
        let basePrice = 0
        for (let i = 0; i < needs.length; i += 1) {
            basePrice += needs[i] * price[i]
        }
        return basePrice
    }

    let minPrice = getBasePrice(needs)

    const localNeeds = [...needs]

    const needsLimitExceeded = (needs: number[]) => {
        for (let i = 0; i < needs.length; i += 1) {
            if (needs[i] < 0) return true
        }
        return false
    }
    const needsEmpty = (needs: number[]) => {
        for (let i = 0; i < needs.length; i += 1) {
            if (needs[i] !== 0) return false
        }
        return false
    }

    const applyPromotion = (needs: number[], promotion: number[]) => {
        for (let i = 0; i < needs.length; i += 1) {
            needs[i] = needs[i] - promotion[i]
        }
    }

    const cancelPromotion = (needs: number[], promotion: number[]) => {
        for (let i = 0; i < needs.length; i += 1) {
            needs[i] = needs[i] + promotion[i]
        }
    }

    const iter = (candidate: number = 0, specialIndex: number = 0, iterNeeds: number[] = localNeeds) => {
        if (needsLimitExceeded(iterNeeds)) return
        if (needsEmpty(iterNeeds)) {
            minPrice = Math.min(minPrice, candidate)
            return
        }

        for (let i = specialIndex; i < special.length; i += 1) {
            const iterBasePrice = candidate + getBasePrice(iterNeeds)
            minPrice = Math.min(minPrice, iterBasePrice)

            const promo = special[i]
            const promoPrice = promo[promo.length - 1]
            const newPrice = candidate + promoPrice
            if (newPrice >= minPrice) continue

            applyPromotion(iterNeeds, promo)
            iter(newPrice, i, iterNeeds)
            cancelPromotion(iterNeeds, promo)
        }
    }

    iter()

    return minPrice
}

export default shoppingOffers
