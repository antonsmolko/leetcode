/**
 * Реализуйте метод Object.create(). Объясните код
 * @param protoObject
 * @returns {F}
 */

const objectCreate = function(protoObject) {
    function F() {}
    F.prototype = protoObject;

    return new F();
}

const b = { name: 'Anton' }
const a = objectCreate(b)

console.log(a.name)
console.log(Object.getPrototypeOf(a))