
// Need an array of 4 or more passengers with name, paid status: true or false, and ticket type (firstclass, premium, and coach)
var passengers = [  { name: "Mr. Pickles",    paid: true,  ticket: "premium"    },
                    { name: "Isaiah Rashad",  paid: true,  ticket: "firstclass" },
                    { name: "Joe Rogan",      paid: true,  ticket: "firstclass" },
                    { name: "Max Bernard",    paid: true,  ticket: "coach"      },
                    { name: "Josefina Gomez", paid: true,  ticket: "premium"    },
                    { name: "Moby Kim",       paid: true,  ticket: "firstclass" },
                    { name: "Alfred Wright",  paid: true,  ticket: "coach"      },
                    { name: "Kimberly Kim",   paid: true,  ticket: "premium"    },
                    { name: "Mark Anthony",   paid: true,  ticket: "coach"      },
                    { name: "Tego Calderon",  paid: true,  ticket: "firstclass" },
                    { name: "Brandon Lupian", paid: true,  ticket: "coach"      },
                    { name: "Megan Brown",    paid: true,  ticket: "coach"      },
                    { name: "Tyler Morgan",   paid: true,  ticket: "firstclass" },
                    { name: "Dr. Evel",       paid: false, ticket: "firstclass" }];


// Need a function to process the passengers. Iterate over the length of the 
// array and call the function on each passenger. If the passenger fails the 
// test, they can't fly. (either they haven't paid or they are on the no fly list)
function processPassengers(passengers, testFunction) {  
  for(var i = 0; i < passengers.length; i++) {
    if(testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}


// Put Dr. Evel on the No Fly List because he is Evil! Spelling and case must 
// match the name that you put in the array. If you want to put me on the no 
// fly list instead of Dr. Evel, go for it.... LOL 
function checkNoFlyList(passenger) {  
  return (passenger.name === "Dr. Evel"); 
}

// Check to see who hasn't paid... it will get that from the array.
function checkNotPaid(passenger) {  
  return (!passenger.paid);
}

// This will print out who has and has not paid using string concatenation into 
// a var called message. If the passenger has paid then the message will read 
// message + " has paid"
function printPassenger(passenger) { 
  if(passenger.paid) {
    console.log(passenger.name + " has paid."); 
  }
}

// Plane can only fly if every passenger is on the fly flist
var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {  
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

// Plane can only fly if every passenger has paid
var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) { 
  console.log("The plane can't take off: not everyone has paid.");
}
 
// We don't care about the result here; we're just using 
// ProcessPassengers to display the passenger list
processPassengers(passengers, printPassenger);

// First class gets a cocktail or wine, premium gets wine, cola, 
// or water, and coach gets cola or water.
function createDrinkOrder(passenger) { 
  var orderFunction;

  if(passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like a cocktail or wine?"); 
    }
  } else if(passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Would you like wine, cola, or water."); 
    }
  } else {
    orderFunction = function() {
      alert("Your choice is cola or water."); 
    }
  }
  return orderFunction;
}

// First class gets chicken or pasta, premium gets a snack box or 
// cheese plate, and coach gets peanuts or pretzels.
function createDinnerOrder(passenger) {  
  var orderFunction;

  if(passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like a chicken or pasta?"); 
    }
  } else if(passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Would you like a snack box or a cheese plate?"); 
    }
  } else {
    orderFunction = function() {
      alert("Your choice is peanuts or pretzels."); 
    }
  }
  return orderFunction;
}

// Alert window to pick up the trash
function pickupTrash() {  
  alert("Pick up the trash.")
}

// Alert window show movie
function showMovie() {
  alert("Show movie.")
}

// Serve customer will serve drinks, get dinner order, and pick up trash.
function serveCustomer(passenger) {  
  var getDrinkOrderFunction  = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger)
  getDrinkOrderFunction();
  getDinnerOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  showMovie();
  getDrinkOrderFunction();
  pickupTrash();
}

// This will iterate over the customers, serving them one by one.
function servePassengers(passengers) {  
  for(var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}
 
// Of course we need to call servePassengers() with passengers as a parameter 
// below.
servePassengers(passengers);