const {Animal,Dog,Cat, Home} = require('../src/animals')
describe('class Animal',()=>{
let dog = new Animal('Dog')
let cat = new Animal('Cat')
it('should make sound',()=>{
    expect(dog.sound()).toBe('Dog make sound')
    expect(cat.sound()).toBe('Cat make sound')
})
it('should eat',()=>{
    expect(dog.eat()).toBe('Dog eats')
    expect(cat.eat()).toBe('Cat eats')
})
})
describe('class Home',()=>{
    let home = new Home()
    it('should have all animal sounds',()=>{
        expect(home.makeAllSounds).toBeDefined()
    })
    it('should adopt pets',()=>{
        expect(home.adoptPet).toBeDefined()
    })
})