class Car {
  #brand;
  #model;
  #speed = 150;
  isTrunkOpen;
  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
  }
  displayInfo() {
    return `${this.#brand} ${this.#model} ${this.#speed} km/h`;
  }
  go() {
    if (this.isTrunkOpen) {
      this.#speed = 0;
    } else {
      this.#speed += 5;
    }

    return this.#speed;
  }
  brake() {
    this.#speed -= 5;
    return this.#speed;
  }
  openTrunk() {
    if (this.#speed) {
      this.isTrunkOpen = false;
    } else {
      this.isTrunkOpen = true;
    }
    return this.isTrunkOpen;
  }
  closeTrunk() {
    return (this.isTrunkOpen = false);
  }
}

class RaceCar extends Car {
  accelaration;
  constructor(brand, model) {
    super(brand, model);
  }
  //   displayInfo() {
  //     return `${this.brand} ${this.model} ${this.speed} km/h`;
  //   }

  go() {
    this.speed += 300;
  }
}
const car1 = new Car("Toyata", "Corlla");
const car2 = new Car("Tesla", "Model3");
car1.go();
car2.brake();

const racecar1 = new RaceCar("McLaren", "F1");

console.log(car2.openTrunk(), car2.closeTrunk());
console.log(car1.displayInfo());
console.log(car2.displayInfo());
racecar1.go();
console.log(racecar1.displayInfo());
console.log(car1);
