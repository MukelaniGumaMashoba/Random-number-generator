// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to handle the button click event
function generateRandomNumber() {
    const min = 1; // Minimum number
    const max = 100; // Max number
    const randomNumber = getRandomNumber(min, max);

    // Display the random number on the HTML page
    const randomNumberElement = document.getElementById('randomNumber');
    randomNumberElement.textContent = randomNumber;
}

// Add a click event listener to the button
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateRandomNumber);


// MukelaniGumaMashoba