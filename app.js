'use strict'

var questions = ['Is my name Andrew?', 'Am I younger than 25 years old?', 'Is green my favorite color?', 'Have I lived in China?', 'Does my family have a cat named Tucker?', 'How many siblings do I have?', 'What month was I born in?'];
var answers = ['Yes', 'No', 'Yes', 'Yes', 'No', 1, 'August'];
var incorrect = ['No', 'Yes', 'No', 'No', 'Yes'];
var correctMsg = ['Correct!','Correct! I am 27.','Correct!', 'Correct! I lived there for a year.', 'Correct! Tucker is a dog, not a cat :)', 'Correct! I have 1 younger sister.', ]
var incorrectMsg = ['Incorrect.', 'Incorrect, I am 27.', 'Incorrect.', 'Incorrect. I lived there for a year.', 'Incorrect. Tucker is a dog, not a cat :)']
var invalidMsg = 'Invalid response. Please respond with yes or no.'
var userResponse = ''
var userScore = 0

var userName = prompt('Please enter your name:');
alert('Hello '+userName+', welcome to my About Me project quiz!')

var i = 0
while(i<questions.length) {
    userResponse = prompt('Question '+(i+1)+': '+ questions[i]);
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
var qNum = 5;
var attempts = 4;
var highNumberMsg = 'Incorrect, I have fewer siblings than you guessed.'
var lowNumberMsg = 'Incorrect, I have more siblings than you guessed.'
var invalidNumMsg = 'Invalid response. Please respond with a number.'
while (attempts > 0) {
    userResponse = prompt(questions[qNum]+'(You have '+attempts+' left.)');
    if (userResponse === answers[qNum]){
        userScore++;
        alert(correctMsg(qNum));
        attempts = 0;
    } else if (userResponse > answers[qNum]) {
        attempts--;
        alert(highNumberMsg);
    } else if (userResponse < answers[qNum]) {
        attempts--;
        alert(lowNumberMsg);
    } else {
        attempts--;
        alert(invalidNumMsg);
    }
}

alert('Thanks for taking my About Me quiz, '+userName+'! You guessed '+userScore+' questions correctly out of '+questions.length);

/* var nameResponse = prompt('Question 1: Is my name Andrew?');
//normalize response
var nameResponseNorm = nameResponse.toUpperCase();
if(nameResponseNorm === 'Y'||nameResponseNorm === 'YES'){
    //console.log('Correct!');
    alert('Correct!');
} else if (nameResponseNorm === 'N'||nameResponseNorm === 'NO'){
    //console.log('Incorrect.');
    alert('Incorrect.');
} else {
    //console.log('Invalid response, please reload the page and respond yes or no.')
    alert('Invalid response, please reload the page and respond yes or no.');
}

var ageResponse = prompt('Question 2: Am I younger than 25 years old?');
//normalize response
var ageResponseNorm = ageResponse.toUpperCase();
if(ageResponseNorm === 'Y'||ageResponseNorm === 'YES'){
    //console.log('Incorrect, I am 27.');
    alert('Incorrect. I am 27.');
} else if (ageResponseNorm ==='N'||ageResponseNorm === 'NO'){
    //console.log('Correct! I am 27.');
    alert('Correct! I am 27.');
} else {
    //console.log('Invalid response, please reload the page and respond yes or no.');
    alert('Invalid response, please reload the page and respond yes or no.');
}

var colorResponse = prompt('Question 3: Is green my favorite color?');
//normalize response
var colorResponseNorm = colorResponse.toUpperCase();
if(colorResponseNorm === 'Y'||colorResponseNorm === 'YES'){
    //console.log('Correct!');
    alert('Correct!');
} else if (colorResponseNorm ==='N'||colorResponseNorm === 'NO'){
    //console.log('Incorrect.');
    alert('Incorrect.');
} else {
    //console.log('Invalid response, please reload the page and respond yes or no.');
    alert('Invalid response, please reload the page and respond yes or no.');
}

var chinaResponse = prompt('Question 4: Have I lived in China?');
//normalize response
var chinaResponseNorm = chinaResponse.toUpperCase();
if(chinaResponseNorm === 'Y'||chinaResponseNorm === 'YES'){
    //console.log('Correct! I lived there for a year.');
    alert('Correct! I lived there for a year.');
} else if (chinaResponseNorm ==='N'||chinaResponseNorm === 'NO'){
    //console.log('Incorrect. I lived there for a year.');
    alert('Incorrect. I lived there for a year.');
} else {
    //console.log('Invalid response, please reload the page and respond yes or no.');
    alert('Invalid response, please reload the page and respond yes or no.');
}

var tuckerResponse = prompt('Question 5: Does my family have a cat named Tucker?');
//normalize response
var tuckerResponseNorm = tuckerResponse.toUpperCase();
if(tuckerResponseNorm === 'Y'||tuckerResponseNorm === 'YES'){
    //console.log('Incorrect. Tucker is a dog, not a cat :)');
    alert('Incorrect. Tucker is a dog, not a cat :)');
} else if (tuckerResponseNorm ==='N'||tuckerResponseNorm === 'NO'){
    //console.log('Correct! Tucker is a dog, not a cat :)');
    alert('Correct! Tucker is a dog, not a cat :)');
} else {
    //console.log('Invalid response, please reload the page and respond yes or no.');
    alert('Invalid response, please reload the page and respond yes or no.');
}

*/
