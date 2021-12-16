
// Cards array
const IMAGES = document.querySelectorAll(".gameCard");

// Flag for if a card has been flipped or not
var flipped = false;

// User starts with four lives
var lives = 4;
// Cards matched
var cardMatches = 0;

// Matching cards
var cardOne;
var cardTwo;

// turnImage() function
function turnImage() {
  // This refers to object being clicked/target
  this.classList.add('turn');
  if(!flipped) {
    // First time user clicks this card
    flipped = true;
    cardOne = this;
  } else { // This is the second time
    flipped = false;
    cardTwo = this;

    // If card one and card two match
    if(cardOne.dataset.memory === cardTwo.dataset.memory) {
      // Remove event listener
      cardOne.removeEventListener('click', turnImage);
      cardTwo.removeEventListener('click', turnImage);
      cardMatches++;
      messageArea = document.getElementById("messageArea");
      if(cardMatches === 6) {
        messageArea.innerHTML = "You win!";
      } else {
        messageArea.innerHTML = "Nice, you have matched " + cardMatches + " cards!";
      }
    } else {
      lives--;
      setTimeout(() => {
        cardOne.classList.remove('turn');
        cardTwo.classList.remove('turn');
     }, 5000);
      messageArea = document.getElementById("messageArea");
      if(lives === 0) {
        messageArea.innerHTML = "You lose!";
      } else {
        messageArea.innerHTML = "Uh-Oh, you have " + lives + " lives left!";
      }
      

    }
  }


}

// Add event listener to each card
IMAGES.forEach((image) => {
  image.addEventListener('click', turnImage)
});