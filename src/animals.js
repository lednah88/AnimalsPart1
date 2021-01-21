class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `Food`;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    return `Barks`;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    return `Meow`;
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

module.exports = { Dog, Cat };
