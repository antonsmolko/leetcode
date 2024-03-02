/**
 * Реализуйте класс реализующий паттерн наблюдатель
 */

class Observer {
    private _data = {
        // someKey: 'someString',
        // anotherKey: 'anotherString',
    }

    listeners = []

    set data(obj) {
        this._data = obj
        this.notify()
    }

    get data() {
        return this._data
    }

    subscribe(fnc) {
        this.listeners.push(fnc)
    }

    unsubscribe(fnc) {
        this.listeners = this.listeners.filter((listener) => listener !== fnc)
    }

    notify() {
        this.listeners.forEach((listener) => listener(this.data))
    }
}
const observer = new Observer()
const firstSubscriber = (data) => console.log('first', data)
const secondSubscriber = (data) => console.log('second', data)
observer.subscribe(firstSubscriber)
observer.subscribe(secondSubscriber)

observer.data = {newKey: 'newString'}
// CONSOLE
// first { newKey: 'newString' }
// second { newKey: 'newString' }
observer.unsubscribe(firstSubscriber)
observer.data = {lastKey: 'lastKey'}
// CONSOLE
// second { lastKey: 'lastKey' }