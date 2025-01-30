class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom vroom");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "orange");
const vehicle = new Vehicle("red");
car.startDriving();
console.log(vehicle.color);
