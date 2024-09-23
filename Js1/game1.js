// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Function to check if the player's guess is too low, too high, or correct
function checkGuess(playerGuess, correctNumber) {
  if (playerGuess < correctNumber) {
      return "Too low!";
  } else if (playerGuess > correctNumber) {
      return "Too high!";
  } else {
      return "Correct!";
  }
}

// Function to calculate score based on attempts
function calculateScore(attempts) {
  const maxScore = 100; // Maximum score for guessing on the first try
  const pointsPerAttempt = 10; // Lose 10 points for each additional attempt
  let score = maxScore - ((attempts - 1) * pointsPerAttempt);
  return score < 0 ? 0 : score; // Ensure the score doesn't go below 0
}

// Global variables to store game state
let correctNumber;
let attempts;
let maxAttempts = 10;
let gameActive = true;

// Function to start a new game
function startGame() {
  correctNumber = generateRandomNumber(); // Generate the random number
  attempts = 0; // Reset attempts
  gameActive = true; // Reset the game state
  console.log("Welcome to the Number Guessing Game!");
  console.log(`You have ${maxAttempts} attempts to guess the number between 1 and 100.`);
  console.log("Type makeGuess(yourNumber) in the console to make a guess.");
}

// Function to make a guess (this will be called by the player in the console)
function makeGuess(playerGuess) {
  if (!gameActive) {
      console.log("The game is over. Start a new game by calling startGame().");
      return;
  }

  // Validate the input: it must be a number, an integer, and between 1 and 100
  if (typeof playerGuess !== 'number' || isNaN(playerGuess) || !Number.isInteger(playerGuess)) {
      console.log("Invalid input. Please enter a valid integer.");
      return;
  }
  if (playerGuess < 1 || playerGuess > 100) {
      console.log("Invalid input. Please enter a number between 1 and 100.");
      return;
  }

  attempts++;
  const result = checkGuess(playerGuess, correctNumber); // Check the guess
  console.log(result);

  if (result === "Correct!") {
      const score = calculateScore(attempts); // Calculate score based on attempts
      console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
      console.log(`Your score is: ${score}`);
      gameActive = false; // End the game
  } else if (attempts < maxAttempts) {
      console.log(`You have ${maxAttempts - attempts} attempts left.`);
  } else {
      console.log(`Game over! You've used all ${maxAttempts} attempts. The correct number was ${correctNumber}.`);
      gameActive = false; // End the game
  }
}

// Start the game when the script loads
startGame();
