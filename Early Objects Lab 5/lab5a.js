// This program creates a new car object and outputs a message to the console

/**
 * Function name: makeCar();
 * 
 * Description: This function creates a car object and returns 
 *              the created car object.
 */
function makeCar() {
  var makes       = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  var models      = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years       = [1955, 1957, 1948, 1954, 1961];
  var colors      = ["red", "blue", "tan", "yellow", "white"];
  var convertable = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertable: convertable[rand6],
    mileage: 0
  }

  return car;
}

/**
 * Function name: displayCar();
 * 
 * Description: This function takes in a car object as an argument
 *              and displays a message about the car object to the 
 *              user. 
 */
function displayCar(car) {
  console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

// Assign new car object to carToSell
var carToSell = makeCar();

// Output new car object message
displayCar(carToSell);