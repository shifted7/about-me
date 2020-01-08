'use strict'

var nameResponse = prompt('Welcome to my about me. Question 1: Is my name Andrew?');
//normalize response
var nameResponseNorm = nameResponse.toUpperCase();
if(nameResponseNorm === 'Y'||nameResponseNorm === 'YES'){
    console.log('Correct!');
} else if (nameResponseNorm === 'N'||nameResponseNorm === 'NO'){
    console.log('Incorrect.');
} else {
    console.log('Invalid response, please reload the page and respond yes or no.')
}

var ageResponse = prompt('Question 2: Am I younger than 25 years old?');
//normalize response
var ageResponseNorm = ageResponse.toUpperCase();
if(ageResponseNorm === 'Y'||ageResponseNorm === 'YES'){
    console.log('Incorrect, I am 27.');
} else if (ageResponseNorm ==='N'||ageResponseNorm === 'NO'){
    console.log('Correct! I am 27.');
} else {
    console.log('Invalid response, please reload the page and respond yes or no.');
}

var colorResponse = prompt('Question 3: Is green my favorite color?');
//normalize response
var colorResponseNorm = colorResponse.toUpperCase();
if(colorResponseNorm === 'Y'||colorResponseNorm === 'YES'){
    console.log('Correct!');
} else if (colorResponseNorm ==='N'||colorResponseNorm === 'NO'){
    console.log('Incorrect.');
} else {
    console.log('Invalid response, please reload the page and respond yes or no.');
}

var chinaResponse = prompt('Question 4: Have I lived in China?');
//normalize response
var chinaResponseNorm = chinaResponse.toUpperCase();
if(chinaResponseNorm === 'Y'||chinaResponseNorm === 'YES'){
    console.log('Correct! I lived there for a year.');
} else if (chinaResponseNorm ==='N'||chinaResponseNorm === 'NO'){
    console.log('Incorrect. I lived there for a year.');
} else {
    console.log('Invalid response, please reload the page and respond yes or no.');
}

var tuckerResponse = prompt('Question 5: Does my family have a cat named Tucker?');
//normalize response
var tuckerResponseNorm = tuckerResponse.toUpperCase();
if(tuckerResponseNorm === 'Y'||tuckerResponseNorm === 'YES'){
    console.log('Incorrect. Tucker is a dog, not a cat :)');
} else if (tuckerResponseNorm ==='N'||tuckerResponseNorm === 'NO'){
    console.log('Correct! Tucker is a dog, not a cat :)');
} else {
    console.log('Invalid response, please reload the page and respond yes or no.');
}