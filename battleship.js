/*
*
* Name:  Luis Mejia
* Class: CIS-14A-48590
* Due:   10/02/2021
*

*
* Main program
* Description: This is a quick, browser, Battleship game. 
*/

//----------------------------------------------------------------

// Declare program variables
var randomLoc = Math.floor(Math.random() * 5);  // generate a random number
var location1 = randomLoc;                      // ship's location 1
var location2 = location1 + 1;                  // ship's location 2
var location3 = location2 + 1;                  // ship's location 3

var guess;                                      // holds the user's current guess
var hits      = 0;                              // holds the number of hits
var guesses   = 0;                              // holds the number of user guesses

var isSunk    = false;                          // keeps track of ship's sunk status

// Begin while loop
while(isSunk == false) {

    guess = prompt("Ready, aim, fire! (enter a number 0-6 :");
    if(guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else { 
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;

            if(hits == 3) {
                isSunk = true; 
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + 
            "which means your shooting accuracy was " + (3/guesses);

alert(stats);