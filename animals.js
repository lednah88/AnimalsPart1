class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} make sound`);
    }
    eat() {
        console.log(`${this.name} eats`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        console.log(`Dog barks`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        console.log(`Cat meows`);
    }
}

var dog = new Dog("Rax")
dog.eat()
dog.sound()
var cat = new Cat("Stormy")
cat.eat()
cat.sound()
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
var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();
home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();
home.adoptPet(cat);
home.makeAllSounds();
home.adoptPet(dog2);
home.makeAllSounds();