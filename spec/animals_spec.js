const { Dog, Cat } = require("../src/animals");

let dog = new Dog();
let cat = new Cat();
describe("The animal ", () => {
  it("Dog eats Food", () => {
    expect(dog.eat()).toBe("Food");
  });
  it("Dog does not eat food", () => {
    expect(dog.eat()).not.toBe("food");
  });
  it("Cat does not bark", () => {
    expect(cat.sound()).not.toBe("Bark");
  });
  it("Cat meows", () => {
    expect(cat.sound()).toBe("Meow");
  });
  it("Cat does not eat meat", () => {
    expect(cat.eat()).not.toBe("meat");
  });
  it("Cat eats Food", () => {
    expect(cat.eat()).toBe("Food");
  });
  it("Cat does not eat food", () => {
    expect(cat.eat()).not.toBe("food");
  });
});
