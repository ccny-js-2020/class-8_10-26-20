/*

Rules of the dice game:
1. Two Players
2. Both players have three dice.
3. Whoever rolls the highest sum of the dice wins.

Instructions (Option One):
1. Create 6 variables representing dice rolls
  - Three are for playerOne
  - Three are for playerTwo
2. Sum up the total of the dice rolls for each player
3. Alert who won or if there was a tie

Instructions (Option Two):
1. Create objects representing player one and player two instead of variables
  - The objects should have three dice each
2. Sum up the total of the dice rolls for each player
3. Alert who won or if there was a tie

*/
/*
  If you don't understand the variables, then console.log them
  Run this game yourself and try to understand every line
*/

//Option 1

//setting values of the three playerOne dice with a random number between 1 to 6
var playerOneDiceOne = Math.ceil(Math.random() * 6);
var playerOneDiceTwo = Math.ceil(Math.random() * 6);
var playerOneDiceThree = Math.ceil(Math.random() * 6);

//setting values of the three playerTwo dice with a random number between 1 to 6
var playerTwoDiceOne = Math.ceil(Math.random() * 6);
var playerTwoDiceTwo = Math.ceil(Math.random() * 6);
var playerTwoDiceThree = Math.ceil(Math.random() * 6);

//the sum of player one's dice
var playerOneTotal = playerOneDiceOne + playerOneDiceTwo + playerOneDiceThree;
//the sum of player two's dice
var playerTwoTotal = playerTwoDiceOne + playerTwoDiceTwo + playerTwoDiceThree;

//creating a function that when invoked will run option one
function runOptionOne(){
  //alerting the player one totals and player two totals
  alert("Player One Total: " + playerOneTotal + ", Player Two Total: " + playerTwoTotal);

  //setting the logic to see who the winner is
  if(playerOneTotal > playerTwoTotal){
    alert("Player One Wins");
  } else if(playerOneTotal < playerTwoTotal) {
    alert("Player Two Wins")
  } else {
    alert("TIE!")
  }
}

//Option 2

//setting values of the three playerOne dice with a random number between 1 to 6
var playerOne = {
  diceOne: Math.ceil(Math.random() * 6),
  diceTwo: Math.ceil(Math.random() * 6),
  diceThree: Math.ceil(Math.random() * 6),
  total: undefined
}

var playerTwo = {
  diceOne: Math.ceil(Math.random() * 6),
  diceTwo: Math.ceil(Math.random() * 6),
  diceThree: Math.ceil(Math.random() * 6),
  total: undefined
}

//the sum of player one's dice
playerOne.total = playerOne.diceOne + playerOne.diceTwo + playerOne.diceThree;
//the sum of player two's dice
playerTwo.total = playerTwo.diceOne + playerTwo.diceTwo + playerTwo.diceThree;

//creating a function that when invoked will run option two
function runOptionTwo(){
  //alerting the player one totals and player two totals
  alert("Player One Total: " + playerOne.total + ", Player Two Total: " + playerTwo.total);

  //setting the logic to see who the winner is
  if(playerOne.total > playerTwo.total){
    alert("Player One Wins");
  } else if(playerOneTotal < playerTwoTotal) {
    alert("Player Two Wins")
  } else {
    alert("TIE!")
  }
}
