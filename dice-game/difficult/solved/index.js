/*
  Rules of the dice game:
  1. Create two players
  2. Both players have three dice.
  3. Whoever rolls the highest sum of the three dice wins.
  4. Play up until 9

  Instructions:
  1. Create two objects representing players:
    - it should have their name
    - the values of their dice
    - amount of wins they have
  2. Also have a variable for:
    - the number of rounds
    - the amount of ties
  3. Create a while loop that will stop when the number of rounds is 9
  4. Inside the while loop:
    - alert the sum of the dice roll for each player
    - alert who won the round or if it was a tie
    - increment either a player one win, player two win, or a tie per round
    - alert the current score of the game
    - reset the values of the player one dice totals, player two dice totals, player One dice values, player two dice values
  5. After the while loop, report who won the game or if it was tied
*/
/*
  If you don't understand the variables, then console.log them
  Run this game yourself and try to understand every line
*/

//setting a playerOne object that includes values that pertains to them
var playerOne = {
  "name": "Jack",
  "diceOne": Math.ceil(Math.random() * 6),
  "diceTwo": Math.ceil(Math.random() * 6),
  "diceThree": Math.ceil(Math.random() * 6),
  "wins": 0
}
//setting a playerTwo object that includes values that pertains to them
var playerTwo = {
  "name": "Jill",
  "diceOne": Math.ceil(Math.random() * 6),
  "diceTwo": Math.ceil(Math.random() * 6),
  "diceThree": Math.ceil(Math.random() * 6),
  "wins": 0
}

// if you want to be more object oriented, you can do this too
var game = {
  currentRound: 0,
  ties: 0
}
//setting a variable to indicate which round the game is at
// var currentRound = 0;
//setting a variable to indicate how many ties there are
// var ties = 0;

function runDiceGame(){
  //while the round number is less than 9, meaning there will only be 9 rounds in this game
  //this while loop will stop when round number gets to 9
  while(game.currentRound < 9){
    //setting playerOne's dice total to the sum of all 3 dice totals
    //the dice total property is being added to the player one object
    playerOne.diceTotal = playerOne.diceOne + playerOne.diceTwo + playerOne.diceThree;
    //setting playerTwo's dice total to the sum of all 3 dice totals
    //the dice total property is being added to the playerTwo object
    playerTwo.diceTotal = playerTwo.diceOne + playerTwo.diceTwo + playerTwo.diceThree;

    //alerting playerOne and playerTwo's dice rolls totals
    alert(playerOne.name + " rolls " + playerOne.diceTotal + ", " + playerTwo.name + " rolls " + playerTwo.diceTotal);

    //setting the logic to see who won the dice roll
    if(playerOne.diceTotal > playerTwo.diceTotal){
      //alerting that playerOne won since their total waas greater than playerTwo's
      alert("Player One Wins the round");
      //incrementing playerOne wins by 1
      playerOne.wins++;
    } else if(playerOne.diceTotal < playerTwo.diceTotal) {
      //alerting that playerTwo won since their total waas greater than playerOne's
      alert("Player Two Wins the round")
      //incrementing playerTwo wins by 1
      playerTwo.wins++;
    } else {
      //alerting that there was a ties
      alert("TIE this round");
      //incrementing the ties variable by 1
      game.ties++;
    }

    //alerting the current score of the game
    alert("Score is: " + playerOne.name + " " + playerOne.wins + " - " + playerTwo.name + " " + playerTwo.wins + " , Ties: " + game.ties);

    resetPlayersValues();

    //incrementing round number by 1, keeping the while loop going
    game.currentRound++;
  }

  whoWonTheGame();

}

//creating a function to reset players values
function resetPlayersValues(){
  //resetting the values of playerOne & playerTwo for the next round
  //this can be done in a function as well
  //what will happen if we don't reset the values?
  playerOne.diceTotal = 0;
  playerTwo.diceTotal = 0;
  playerOne.diceOne = Math.ceil(Math.random() * 6);
  playerOne.diceTwo = Math.ceil(Math.random() * 6);
  playerOne.diceThree = Math.ceil(Math.random() * 6);
  playerTwo.diceOne = Math.ceil(Math.random() * 6);
  playerTwo.diceTwo = Math.ceil(Math.random() * 6);
  playerTwo.diceThree = Math.ceil(Math.random() * 6);
}

//writing a function for the end logic of the game
function whoWonTheGame(){
  //setting the logic to show who won after the while loop ended
  if(playerOne.wins > playerTwo.wins){
    alert(playerOne.name + " Wins the game");
  } else if(playerOne.wins < playerTwo.wins) {
    alert(playerTwo.name + " Wins the game");
  } else {
    alert("Y'all tied. nobody wins");
  }
}

runDiceGame();
