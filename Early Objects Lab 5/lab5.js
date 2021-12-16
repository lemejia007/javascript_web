var fiat = {

  //fiat properties go here

  make:        "Fiat",
  model:       "500",
  year:        1957,
  color:       "Medium Blue",
  passengers:  2,
  convertible: false,
  mileage:     88000,
  started:     false,
  fuel:        0,
  
  // Start car function
  start: function() {
    if(this.fuel > 0) {
      this.started = true;
      console.log("The vehicle is turned on.")
    } else {
      console.log("You need to add some fuel!");
    }
  },
  
  // Stop car function
  stop: function() {
    this.started = false;
    console.log("The vehicle has been turned off.")
  },
  
  // Drive car functuon
  drive: function() {
    if(this.started && this.fuel > 0)  {
      console.log(this.make + " " + this.model + " goes zoom zoom!"); 
      this.fuel--;
      if(this.fuel = 0) {
        fiat.stop();
        console.log("Oh dear, you have ran out of fuel!");
      }
    } else {
      console.log("You need to start the engine first.");
    }
  },
  
  // Add fuel to car function
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  },
  
   
  
  }; //end object class
  
   
  //now call the functions - see bottom pg 211
  
  //start the car
  fiat.start();

  //drive the car
  fiat.drive();
  
  //add some fuel
  fiat.addFuel(5);
  
  //start the car again
  fiat.start();
  
  //drive the car 
  fiat.drive();
  
  //drive the car
  fiat.drive();
  
  //drive the car
  fiat.drive();
  
  //stop the car
  fiat.stop();