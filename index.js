 // Generate random numbers for the dice
var number1 = Math.floor(Math.random() * 6) + 1;
var number2 = Math.floor(Math.random() * 6) + 1;

// Generate URLs for the dice images
var URL1 = "images/dice" + number1 + ".png";
var URL2 = "images/dice" + number2 + ".png";

// Log the URLs
console.log(URL1);
console.log(URL2);

// Set the images
document.querySelector(".img1").setAttribute("src", URL1);
document.querySelector(".img2").setAttribute("src", URL2);

// Function to update the heading
function print() {
    if (number1 === number2) {
        document.querySelector("h1").innerHTML = "Draw";
    } else if (number1 > number2) {
        document.querySelector("h1").innerHTML = "Player 1 won!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 won!";
    }
}

// Call the function to update the heading
print();
