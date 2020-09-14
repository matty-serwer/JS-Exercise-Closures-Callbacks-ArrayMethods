// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
stringList = ["one", "two"];

function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

const stringDouble = function (string) {
  return string + string;
};

// console.log(processFirstItem(stringList, stringDouble));
// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * counter 1 uses a nested function.
 *
 * 2. Which of the two uses a closure? How can you tell?
 * counter 1 uses a closure, so that the function counter() can access the count variable.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * counter one is prefereable if you want to keep the count variable in the function scope. in counter 2 the count is on the global scope and is more accessible but less secure.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

const inning = function () {
  return Math.floor(Math.random() * 3);
};

// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, numberInnings) {
  let home = 0;
  let away = 0;

  for (let i = 0; i < numberInnings; i++) {
    home += inning();
    away += inning();
  }
  return `Home: ${home},\nAway: ${away}`;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning, numInnings) {
  let home = 0;
  let away = 0;
  let scorecard = '';

  for (let i = 0; i < numInnings; i++) {
    home += inning();
    away += inning();
    scorecard += getInningScore(home, away, i);
  }
  scorecard += `\nFinal Score: ${away} - ${home}`;
  return scorecard;
}

let getInningScore = function (home, away, thisInning) {
  if(thisInning === 0) {
      return `1st inning ${thisInning + 1}: ${away} - ${home}\n`;
  } else if(thisInning === 1){
    return `2nd inning ${thisInning + 1}: ${away} - ${home}\n`;
  } else if(thisInning === 2){
    return `3rd inning ${thisInning + 1}: ${away} - ${home}\n`;
  } else if(thisInning >= 3){
    return `${thisInning + 1}th inning ${thisInning + 1}: ${away} - ${home}\n`;
  }
};

console.log(scoreboard(getInningScore, inning, 9));
