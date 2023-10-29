const numTilePossibilities = (tiles: string): number => {
  const sortedTiles = tiles.split('').sort()

  const _numTilePossibilities = (tile: string[] = [], letters: string[]): number => {
    let count = 1

    for (let i = 0; i < letters.length; i += 1) {
      const letter = letters[i]
      if (i > 0 && letter === letters[i - 1]) continue

      const trimmedLetters = letters.filter((_, index) => index !== i)

      tile.push(letter)
      count += _numTilePossibilities(tile, trimmedLetters)
      tile.pop()
    }

    return count
  }

  return _numTilePossibilities([], sortedTiles) - 1
}

export default numTilePossibilities
