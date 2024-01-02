// Function to generate a random whole number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random whole number between 1 and 6
var randomNumber = getRandomNumber(1, 6);

// Get the image element by its ID
var imageElement = document.getElementById("img1");

// Check the value of the random number and set the image source accordingly
if (randomNumber === 1) {
    imageElement.src = "images/dice1.png";
} else if (randomNumber === 2) {
    imageElement.src = "images/dice1.png";
} else if (randomNumber === 3) {
    imageElement.src = "images/dice1.png";
} else if (randomNumber === 4) {
    imageElement.src = "images/dice1.png";
} else if (randomNumber === 5) {
    imageElement.src = "images/dice1.png";
} else {
    imageElement.src = "images/dice1.png";
}