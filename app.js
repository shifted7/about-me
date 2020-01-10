'use strict';

var questions = ['Is my name Andrew?', 'Am I younger than 25 years old?', 'Is green my favorite color?', 'Have I lived in China?', 'Does my family have a cat named Tucker?', 'How many siblings do I have?', 'What is a city I have lived in other than Seattle?'];
var answers = [['yes'], ['no'], ['yes'], ['yes'], ['no'], ['1'], ['mercer island', 'pittsburgh', 'dongguan']];
var correctMsgs = ['Correct!','Correct! I am 27.','Correct!', 'Correct! I lived there for a year.', 'Correct! Tucker is a dog, not a cat :)', 'Correct! I have a younger sister.', 'Correct! I have lived in Seattle, Mercer Island, Pittsburgh, and Dongguan, China'];
var attempts = [1, 1, 1, 1, 1, 4, 6];
var noAttemptsMsg = 'You are out of attempts!';
var userScore = 0;

var userName = prompt('Please enter your name:');
alert('Hello '+userName+', welcome to my About Me project quiz!');

function askQ(qIndex) {
  var question = questions[qIndex];
  var answer = answers[qIndex];
  var correctMsg = correctMsgs[qIndex];
  var attemptCt = attempts[qIndex];
  while (attemptCt > 0) {
    var userResponse = prompt('Question ' + (qIndex + 1) + ': ' + question);
    console.log('test');
    console.log(userResponse);
    if (answer.includes(userResponse.toLowerCase()) === true) {
      userScore++;
      alert(correctMsg);
      break;
    } else {
      attemptCt--;
      if (attemptCt <= 0) {
        if (attempts[qIndex] > 1) {
          alert('Incorrect. ' + noAttemptsMsg + ' The correct answer was ' + answer);
        }
        else {
          alert('Incorrect. The answer was ' + answer + '.');
        }
      } else {
        alert('Incorrect, please try again. You have ' + attemptCt + ' attempts left.');
      }
    }
  }
}

for (var i = 0; i < questions.length; i++) {
  askQ(i);
}

alert('Thanks for taking my About Me quiz, '+userName+'! You guessed '+userScore+' questions correctly out of '+questions.length);
