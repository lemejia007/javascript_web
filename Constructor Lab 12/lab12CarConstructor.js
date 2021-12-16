
// 1. Create a car constructor with parameters for make, model, year, color, passengers, convertible, and mileage.

// Car constructor
function Car(make, model, year, color, passengers, convertible, mileage) {

  // 2. Use this keyword to link the parameters to the constructor. 

  // Member variables
  this.make        = make;
  this.model       = model;
  this.year        = year;
  this.color       = color; 
  this.passengers  = passengers; 
  this.convertible = convertible; 
  this.mileage     = mileage; 
  this.started     = false;

  // Include the functions start (), stop (), and drive ()

  // Start car member function
  this.start = function() {
    this.started = true; 
  };

  // Stop stop car member function
  this.stop = function() {
    this.started = false; 
  };

  // Drive car member function
  this.drive = function() { 
    if (this.started) {
    alert("Zoom zoom!"); 
    } else {
    alert("You need to start the engine first."); 
    }
  };

}

// 3. Instantiate & Construct 5 different cars with their own values.
var chevy    = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi     = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi     = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341); 
var fiat     = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
var infinity = new Car("Infinity", "G35", 2006, "black", 4, false, 190,000);

// 4.  Put the cars in an array.
var cars = [chevy, cadi, taxi, fiat, infinity];

// 5. Iterate over the array using a for loop and call the functions start, drive (2x), and stop.
for(var i = 0; i < cars.length; i++) { 
  cars[i].start();
  cars[i].drive();
  cars[i].drive();
  cars[i].stop(); 
}