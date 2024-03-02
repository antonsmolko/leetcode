const maxSequence = (length: number, partitions: number[][]): [number | null, number | null] => {
    const size = 10_000

    /**
     * Создаем матрицу
     * [
     *     [0,0,0,0,0],
     *     [0,0,0,0,0],
     *     [0,0,0,0,0],
     *     [0,0,0,0,0],
     *     [0,0,0,0,0]
     * ]
     */
    const matrix = Array(size).fill(null).map(() => Array(size).fill(0))

    /**
     * Заполняем матрицу
     * [
     *     [1,0,0,0,0],
     *     [0,0,1,1,0],
     *     [0,1,1,1,1],
     *     [1,0,1,1,0],
     *     [0,0,1,1,0],
     * ]
     */
    for (let i = 0; i < partitions.length; i += 1) {
        const [row, position] = partitions[i]
        matrix[row - 1][position - 1] = 1
    }

    /**
     * Определяем начальные значения
     */
    const result: [row: number | null, offset: number | null] = [null, null]
    let countDown = length
    let maxLength = 0
    let currentLength = 0

    /**
     * Определяет максимальную длину последовательности и задает значения в result
     * @param row
     * @param offset
     */
    const checkMaxSequence = (row: number, offset: number) => {
        if (currentLength === 0) return

        if (maxLength < currentLength || result[1] === null || offset < result[1]) {
            result[0] = row
            result[1] = offset
            maxLength = currentLength
        }
        currentLength = 0
    }

    /**
     * Обходим матрицу по строчно
     * в цикле обходим все значения каждой строки
     * обрабатываем крайний случай с помощью checkMaxSequence
     */
    for (let i = 0; i < size; i += 1) {
        /**
         * Обходим значения i-той строки
         */
        for (let j = 0; j < size; j += 1) {
            /**
             * Если значение ячейки равно 1, то увеличиваем длину последовательности на 1
             * уменьшаем счетчик оставшихся частиц (countDown) на 1
             * переходим на следующую итерацию
             */
            if (matrix[i][j] === 1) {
                currentLength += 1
                countDown -= 1
                continue
            }

            /**
             * Иначе, если значение ячейки равно 0 - без частицы
             */

            /**
             * Если частиц осталось меньше, чем максимальная последовательность
             * заканчиваем выполнение функции и возвращаем результат
             */
            if (countDown < maxLength) return result

            /**
             * Если мы на первой итерации или максимальная последовательность больше чем текущая
             * то обнуляем текущую последовательность и переходим к следующей итерации
             */
            if (j === 0 || maxLength > currentLength) {
                currentLength = 0
                continue
            }

            /**
             * Иначе определяем максимальную длину последовательности и задаем новый результат
             */
            checkMaxSequence(i + 1, Math.min(i, size - i + 1, size - j, j - currentLength))
        }

        /**
         * Обрабатываем последнюю итерацию в строке
         */
        checkMaxSequence(i + 1, 0)
    }

    /**
     * Обрабатываем последнюю итерацию в матрице
     */
    checkMaxSequence(size, 0)

    return result
}

export default maxSequence