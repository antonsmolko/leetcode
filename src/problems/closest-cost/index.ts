/**
 * Найти ближайшую стоимость десерта
 */
const closestCost = (baseCosts: number[], toppingCosts: number[], target: number): number => {
  const maxToppingCount = 2
  const getClosestCost = (desertCost: number, previousClosestCost: number, targetCost: number): number => {
    const desertClosest = Math.abs(desertCost - targetCost)
    const previousClosest = Math.abs(previousClosestCost - targetCost)

    if (desertClosest < previousClosest || (desertClosest === previousClosest && desertCost < previousClosestCost)) {
      return desertCost
    }

    return previousClosestCost
  }

  const closestPrice = [baseCosts[0]]
  const _closestCost = (desertPrice: number, startIndex: number = 0): void => {
    closestPrice[0] = getClosestCost(desertPrice, closestPrice[0], target)

    if (desertPrice > target || startIndex === toppingCosts.length) return

    for (let toppingCount = 0; toppingCount <= maxToppingCount; toppingCount += 1) {
      _closestCost(desertPrice + toppingCount * toppingCosts[startIndex], startIndex + 1)
    }
  }

  for (let i = 0; i < baseCosts.length; i += 1) {
    _closestCost(baseCosts[i])
  }

  return closestPrice[0]
}

export default closestCost
