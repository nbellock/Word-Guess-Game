

//=======================================================================
// Variables for holding data

var wordOptions = ["ed", "taylor", "matt","harry"]
var selectedWord= "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



//Functions 
//=======================================================================

function startGame () {
    selectedWord= wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord= selectedWord.split("");
    numBlanks = lettersinWord.length;

    //Reset
    guessesLeft=(" " +9);
    wrongLetters=[];
    blanksAndSuccesses = [];

    //populate blanks and successes with right number of blanks
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    //Testing
    console.log(numBlanks);
    }
    

    //change html to show counts
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;




//testing
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    //check if letter exists in code at all
}

function checkLetters(letter){
    //does it exist anywhere in the word
    var isLetterInWord=false;
    for( var i=0; i<numBlanks; i++){
        if(selectedWord[i]==letter){
        isLetterInWord = true;
        
        }
    }


//check where letter is in word and populate the blanksandsuccesses array

if(isLetterInWord) {
   for(var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter){
                  
        blanksAndSuccesses[i] = letter;

        }
    }
}
//letter not found
else{
    wrongLetters.push(letter);
    guessesLeft--;
}
//Testing
    console.log (blanksAndSuccesses);
}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + "| Guesses Left: " + guessesLeft);

//update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");



//Check if user won
if(lettersinWord.toString() ==blanksAndSuccesses.toString()) {
    winCount++;
    alert("you won!");
    
//Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML=winCount;
    
startGame();

}

//check if user lost

else if(guessesLeft ==0) {
    lossCount++;
    alert("you lost");
//update the loss counter in the HTML
    document.getElementById("lossCounter").innerHTML=lossCount;

    startGame();
}
}

//Call the function
//=======================================================================

startGame();

//Key Clicks
document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    roundComplete();
    //Testing
    console.log(lettersGuessed)
}
