//animals
var wordBank = ["lion","tiger","dragon","dog","cat","fish","elephant","kangaroo","crocodile","human"]
var chosenWord ="";
var lettersInChosenWord = [];
var numBlanks = 0;
var dashes = "";
var blanksAndSuccesses = [];
var wrongGuesses = [];
var wins = 0;
var losses = 0;
var numGuesses = 6;

//computer comes up a word (array)
//computer displays blanks for all letters
//initialize value of life
//player press on a key to start (eventListener.onkeyup)
//computer checks 
    //if the letter is in the word (if yes, check position)
         //computer displays the letter 
    //if the letter is not in the word
        //computer displays the letter in letter used
        //life -1
//player continues guessing
chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    numBlanks = lettersInChosenWord.length
    for (var j = 0; j < numBlanks; j ++){
        dashes = dashes + "_ "
    }
    document.getElementById("title").innerHTML = dashes; //textContext
    document.onkeyup = function(event) {
    var keyGuessed = event.key;
    if(chosenWord.includes(keyGuessed)){
        for(var k = 0; k < chosenWord.length; k ++){
            if(keyGuessed == chosenWord[k]){
                document.getElementById()
            }
        }
    }

    
  };





