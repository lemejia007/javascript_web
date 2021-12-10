
// Car constructor
function Car(make, model, year, color, passengers, convertible, mileage) {

  // Member variables
  this.make        = make;
  this.model       = model;
  this.year        = year;
  this.color       = color; 
  this.passengers  = passengers; 
  this.convertible = convertible; 
  this.mileage     = mileage; 
  this.started     = false;

}

// Include the functions start(), stop(), and drive() in Car prototype

// Start function
Car.prototype.start = function() {
  this.started = true; 
};

// Stop function
Car.prototype.stop = function() {
  this.started = false; 
};

// Drive function
Car.prototype.drive = function() { 
  if (this.started) {
  console.log("Zoom zoom!"); 
  } else {
  console.log("You need to start the engine first."); 
  }
};

// Include specific type
Car.prototype.coupe = "coupe";



// Instantiate & Construct 5 different cars with their own values.
var porsche  = new Car("Porsche",   "911",      2012, "Grey",  2, true,  60210);
var bmw      = new Car("BMW",       "2 Series", 2021, "Blue",  2, false, 1892);
var lexus    = new Car("Lexus",     "RC",       2019, "Pink",  2, false, 341); 
var corvette = new Car("Chevrolet", "Corvette", 2017, "Black", 2, true,  43000);
var g35      = new Car("Infinity",  "G35",      2006, "Black", 2, false, 190000);

// Cars array
var cars  = [porsche, bmw, lexus, corvette, g35];

// Iterate over the cars array using a for loop and call the functions start, drive (2x), stop,
// and alerting that car's constructor
for(var i = 0; i < cars.length; i++) { 
  cars[i].start();
  cars[i].drive();
  cars[i].drive();
  cars[i].stop(); 
}