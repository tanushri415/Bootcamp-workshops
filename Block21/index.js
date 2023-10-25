class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return `${this.year} ${this.model} ${this.make}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    const carDescription = super.getDescription();
    return `${carDescription}, Range: ${this.range} miles`;
  }
}
const teslaModel = new ElectricCar('Tesla', 'Model S', 2019, 300);
const carInfo = teslaModel.getDescription();

console.log(carInfo);
