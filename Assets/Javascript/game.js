var LettersToBeGuessed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var guess = [];

document.onkeyup = function (event) {
  var UserGuess = event.key;

  guess.push(UserGuess);

  var ComputerGuess = LettersToBeGuessed[Math.floor(Math.random() * LettersToBeGuessed.length)];

  if (UserGuess === ComputerGuess) {
    Wins++;
    guessesLeft = 8;
  }

  else {
    guessesLeft--;
  }

  if (guessesLeft === 0) {
    Losses++;
    guessesLeft = 8;
  }



  var html = "<h4>Guess What Letter I'm thinking Of:</h4>" +
    "<p>Wins: " + Wins + "</p>" +
    "<p>Losses: " + Losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses So Far: " + guess.join(', ') + "</p>";

  document.getElementById("GuessPlease").innerHTML = html;
}