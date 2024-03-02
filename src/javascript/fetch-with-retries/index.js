/**
 *  Сделать обертку над fetch, которая в случае ошибки будет повторять запрос еще раз, но не более limit раз
 */

const fetchWithRetries = async (limit = 0, ...args) => {
    try {
        const result = await fetch(...args)

        if (result.ok) return result

        throw result.error
    } catch (error) {
        if (limit > 0) {
            return fetchWithRetries(limit - 1, ...args)
        }

        throw error
    }
}