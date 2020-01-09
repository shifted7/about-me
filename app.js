'use strict'

var questions = ['Is my name Andrew?', 'Am I younger than 25 years old?', 'Is green my favorite color?', 'Have I lived in China?', 'Does my family have a cat named Tucker?'];
var answers = ['Yes', 'No', 'Yes', 'Yes', 'No'];
var incorrect = ['No', 'Yes', 'No', 'No', 'Yes'];
var correctMsg = ['Correct!','Correct! I am 27.','Correct!', 'Correct! I lived there for a year.', 'Correct! Tucker is a dog, not a cat :)']
var incorrectMsg = ['Incorrect.', 'Incorrect, I am 27.', 'Incorrect.', 'Incorrect. I lived there for a year.', 'Incorrect. Tucker is a dog, not a cat :)']
var invalidMsg = 'Invalid response. Please respond with yes or no.'
var userResponse = ''
var userScore = 0

var userName = prompt('Please enter your name:');
alert('Hello '+userName+', welcome to my About Me project quiz!')

var i = 0
while(i<questions.length) {
    userResponse = prompt('Question '+(i+1)+': '+ questions[i]);
    console.log(i);
    switch(userResponse.toUpperCase()){
        case answers[i].toUpperCase(): // Checks for exact match correct response
            userScore++;
            alert(correctMsg[i]);
            i++;
            break;
        case answers[i].toUpperCase().charAt(0): // Checks for y or n correct response
            userScore++;
            alert(correctMsg[i]);
            i++;
            break;
        case incorrect[i].toUpperCase(): // Checks for exact match incorrect response
            alert(incorrectMsg[i]);
            i++;
            break;
        case incorrect[i].toUpperCase().charAt(0): // Checks for y or n incorrect response
            alert(incorrectMsg[i]);
            i++;
            break;
        default:
            alert(invalidMsg);
            break;
    }
}
console.log(i);
questions.push('How many siblings do I have?');
var siblings = 1;
answers.push(siblings);
correctMsg.push('Correct, I have 1 younger sister!');
var attempts = 4;
var highNumberMsg = 'Incorrect, I have fewer siblings than you guessed.';
var lowNumberMsg = 'Incorrect, I have more siblings than you guessed.';
var invalidNumMsg = 'Invalid response. Please respond with a number.';
var outOfAttemptsMsg = 'Sorry, but you are out of guesses. I have one sibling, a younger sister.';
while (attempts > 0) {
    userResponse = prompt(questions[i]+' (You have '+ attempts +' guesses left.)');
    console.log(userResponse);
    console.log(answers[i]);
    if (userResponse == answers[i]){
        userScore++;
        alert(correctMsg[i]);
        break;
    } else if (userResponse > answers[i]) {
        attempts--;
        alert(highNumberMsg);
    } else if (userResponse < answers[i]) {
        attempts--;
        alert(lowNumberMsg);
    } else {
        alert(invalidNumMsg);
    }
    if (attempts <= 0) {
        alert(outOfAttemptsMsg);
    }
}

i++;
console.log(i);
questions.push('What is a city I have lived in besides Seattle?');
var citiesLivedNoSea = ['Mercer Island', 'Pittsburgh', 'Dongguan'];
var citiesString = 'Seattle, WA, Mercer Island, WA, Pittsburgh, PA, and Dongguan, China.'
var match = false;
correctMsg.push('Correct! I have lived in '+ citiesString);
var incorrectGuessMsg = 'Incorrect.';
outOfAttemptsMsg = 'Sorry, but you are out of guesses. I have lived in ' + citiesString;

attempts = 6;
while (attempts > 0) {
    userResponse = prompt(questions[i]+' (You have '+ attempts +' guesses left.)');
    for(var j=0; j<citiesLivedNoSea.length; j++) {
        if(userResponse.toLowerCase() === citiesLivedNoSea[j].toLowerCase()){
            match = true;
            console.log('Match found.')
        }
    }
    if (match===true){
        userScore++;
        alert(correctMsg[i]);
        break;
    } else {
        alert(incorrectGuessMsg);
        attempts--;
    }
    if (attempts<=0){
        alert(outOfAttemptsMsg);
    }

}


alert('Thanks for taking my About Me quiz, '+userName+'! You guessed '+userScore+' questions correctly out of '+questions.length);
