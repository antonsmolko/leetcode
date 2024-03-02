/**
 * Реализовать функцию для кэширования результата выполнения асинхронной функции
 */

const memoize = (fn, time) => {
    let expired = 0
    let cache = null

    return async () => {
        if (!cache || expired <= Date.now()) {
            cache = await fn()
            expired = Date.now() + time
        }
        return cache
    }
}

