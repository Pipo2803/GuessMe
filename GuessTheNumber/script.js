let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSumbit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();
// This line above uses the 'focus()' method to automatically put the text cursor into the <input> 


// functions start with function -> 'Name of the function' -> () -> {}, 
// inside the curly braces goes the code we want to run when we call the function.
// Further Explanation of the Code below, follows after the function syntax.
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous Guesses: ";
    }
}
guesses.textContent += `${userGuess} `;

if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You guessed the right answer!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
} else if (guessCount === 10) {
    lastResult.textContent = "!!!Game Over!!!"
    lowOrHi.textContent = ""; 
    setGameOver();
} else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was to low!";
    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was to high!";
    }


    guessCount++;
    guessField.value = "";
    guessField.focus();
} 
// First we declare a variable 'userGuess', we run this variable through the Number Constructor, to make sure the input is a number.
// Since we're not changing the variable, its declared with const.
// After declaring the variable, we build a conditional Codeblock (allows to run code selectively, depending on whether a certain
// condition is true or not.) The simplest form of conditional block starts with the keyword if
// If-Conditions always come with parentheses and after that with curly braces. Inside the parentheses we run a test, if its true we run the code
// inside the curly braces, if not we don't run the code and move on to the next conditional block.
// In this case the test is testing whether the guessCount variable is equal to 1 (that is whether this is the players first guess or not)
// If it is, we make the guesses paragraph's text content equal to 'Previous Guesses'. If not we don't
// Line 22 appends the current 'userGuess' value onto the end of the 'guesses' Paragraph, plus a blank space so there will be a space between each guess shown.
// The next block does a few checks:
// The first if checks whether the user's guess is equal to the 'randomNumber' if it is, the Game displays a 'Congratulations' text and clears the content of the Low/High guess box.
// and run's a function called 'setGameOver' 
// The else-if structure checks whether this turn is the user's last turn, if it is the code does the same thing as the previous block, except an 'Game Over' Message.
// The else structure contains code that is only run if neither of the previous code blocks return true. (the answer is not correct, but the player still got guesses left.)
// It also performs another test, to check if the guess was to high or to low.
// With 'guessCount++' we increment 1 to the 'guessCounter'
// With 'guessField.value = "";' we empty the value out of the form text field and focus it again.


// When we want to run the Code, we type the name of the function followed by parentheses. (Example next line)
// checkGuess();

// This Event listener is listening out for the 'click' event and the code we want to run when the event occurs (in this case 'check Guess')
// Note: We don't need to specify the parentheses when writing it inside the addEventListener()
guessSumbit.addEventListener("click", checkGuess);


// Describing the following 'setGameOver' function:
// The first two lines diasble the form text input and button by setting their disabled properties to 'true'
// The next three lines generate a new 'button' element to start a new Game.
// The final line sets an eventListener on our new button so that when it is clicked, a function called 'resetGame()' is run
function setGameOver() {
    guessField.disabled = true;
    guessSumbit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", restartGame);
}


// The following function resets the Game (further explanation below)
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for ( const resetParas of resetParas) {
        resetPara.textContent = "";
    }


resetButton.parentNode.removeChild(resetButton);

guessField.disabled = false;
guessSumbit.disabled = false;
guessField.value = "";
guessField.focus();

lastResult.style.backgroundColor = "white";

randomNumber = Math.floor(Math.random() * 100) + 1;
}
// Puts the guess Count back down to 1
// Empties all the text out of the information paragraphs. It selects all paragraphs inside the <div> element. 
// Then loop through each one, setting their 'textContent' to and empty string
// Removes the reset Button
// Enables the form elements 
// Removes the background color from the lastResult paragraph
// Generates a new random number so that you are not just guessing the same number again. 

// Explanation of the for...of loop inside the resetGame() function:
// This Code creates a variable containing a list of all the paragraphs inside <div class="resultParas"> 
// using the querrySelectorAll() method, then it loops through each one, removing the text content of each.
// Note: even though resetPara is a contant, we can change its internal properties like textContent.