const {Animal,Dog,Cat, Home} = require('../src/animals')
var dog = new Dog("Rax")
dog.eat()
dog.sound()
var cat = new Cat("Stormy")
cat.eat()
cat.sound()
describe('Animal',()=>{
    it('should make a sound',()=>{
        expect(dog.sound()).toBe('Dog barks')
    })
})