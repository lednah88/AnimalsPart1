class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return `${this.name} make sound`;
  }
  eat() {
    return `${this.name} eats`;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    return `Dog barks`;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    return `Cat meows`;
  }
}
class Home {
  constructor() {
    this.anyAnimal = [];
  }
  adoptPet(animal) {
    this.anyAnimal.push(animal);
  }
  makeAllSounds() {
    for (let i = 0; i < this.anyAnimal.length; i++) {
      this.anyAnimal[i].sound();
    }
  }
}
module.exports = { Animal, Home };
