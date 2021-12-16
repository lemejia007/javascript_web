function lieDetectorTest() { 
  var lies = 0;

  var stolenDiamond = { }; 
  if (stolenDiamond) { // This if statement is true because stoleDiamond exists
      console.log("You stole the diamond"); 
      lies++;
  } 
  var car = {
      keysInPocket: null 
  };
  if (car.keysInPocket) { // This if statement is false because null is falseee
      console.log("Uh oh, guess you stole the car!");
      lies++;
  } 
  if (car.emptyGasTank) { // This if statement is false because emptyGasTank is undefined which is false
      console.log("You drove the car after you stole it!");
      lies++;
  } 
  var foundYouAtTheCrimeScene = [ ]; 
  if (foundYouAtTheCrimeScene) { // This if statement is true because foundYouAtTheCrimeScene exists
    console.log("A sure sign of guilt"); 
    lies++;
  } 
  if (foundYouAtTheCrimeScene[0]) {               // This if statement is false becasue although the array 
      console.log("Caught with a stolen item!");  // foundYouAtTheCrimeScene exists, foundYouAtTheCrimeScene[0] 
      lies++;                                     // is undefined which is false
  } 
  var yourName = " "; 
  if (yourName) {                                     // This if statement is true because although it looks empty, 
      console.log("Guess you lied about your name");  // this string actually contains a space and as long as a string 
      lies++;                                         // is not empty, it will be true. 
  } 
  return lies;
} 
var numberOfLies = lieDetectorTest(); 
console.log("You told " + numberOfLies + " lies!"); 
if (numberOfLies >= 3) {                              // This if statement is true becasue the number of lies told was 3
  console.log("Guilty as charged");                   // and 3 is greater than or equal to 3. 
}