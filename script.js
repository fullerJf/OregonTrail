class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }

  eat() {
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  }
  /*Consumes 1 unit of the traveler's food. If the traveler doesn't 
    have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
    */
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(Traveler) {
    if (this.getAvailableSeatCount() >= 1) {
      this.passengers.push(Traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      /////////this.passengers[0].isHealthy = true///////
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }
  totalFood() {
    let total = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      total += this.passengers[i].food;
    }
    return total;
  }
}
