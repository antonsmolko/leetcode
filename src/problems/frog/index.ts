/**
 * Полный перебор. Лягушка
 * посчитать количество вариантов допрыгнуть до пола через 1 или 2 ступеньки
 */

type TFrog = (n: number) => string[]

const frog: TFrog = (n) => {
  const result: string[] = []
  const _frog = (candidate = '', steps = n) => {
    if (steps < 0) return result

    if (steps === 0) {
      result.push(candidate)
      return
    }

    _frog(candidate + '1', steps - 1)
    _frog(candidate + '2', steps - 2)
  }

  _frog()

  return result
}

export default frog
