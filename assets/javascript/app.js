//Notes do not refresh the game, Reset the page
$(document).ready(function () {});

//Define global Variables
//Timers starting value (60s)
var maxTimer = 10;
//Questions & Answers Arrays
var questions;
//Correct Answers
var correct = 0;
//Incorrect Answers
var incorrect = 0;
// Total questions displayed
var totalQuestions;
//Unanswered 
var unanswered;
//Time remaining
var remainingTime = maxTimer;

var ticker = 0;


//pass function as the first parameter, time as the second parameter
function countdown() {
  var intervalID = setInterval(countdown, 1000);
  if (remainingTime < 1) {
    clearInterval(intervalID);
    console.log("Times Up!");
    $("#timerDisplay").html("<h2>" + " Times Up!" + "</h2>");
    return;
  }
  $("#timerDisplay").html("<h2>" + remainingTime + " seconds" + "</h2>");
  remainingTime--;
  console.log("time in the countdown function is " + remainingTime);
}

function Questions() {
  $("#questions").empty();

  console.log(questions[ticker]);

  $("#questions").append(questions[ticker].question);
  var questionText = questions[ticker].question;
  var answer = questions[ticker].answer

  console.log("The answer  " + answer + " to the question  " + questions[ticker].question);

  var choicea = $("<div id='choicea' class='choices'>")
  var choiceb = $("<div id='choiceb' class='choices'>")
  var choicec = $("<div id='choicec' class='choices'>")
  var choiced = $("<div id='choiced' class='choices'>")

  choicea.append(questions[ticker].choices[0]);
  choiceb.append(questions[ticker].choices[1]);
  choicec.append(questions[ticker].choices[2]);
  choiced.append(questions[ticker].choices[3]);

  $("#questions").append(choicea, choiceb, choicec, choiced);


  $("#choicea").click(function () {
    console.log(answer);
    console.log(questions[ticker].choices[0]);
    if (answer == questions[ticker].choices[0]) {
      console.log("you are correct");
      correct++
      console.log("the number correct is " + correct);
      ticker++;
      console.log("the ticker is " + ticker);
      Questions();
    } else {
      console.log("this is the wrong answer");
      incorrect++
      console.log("the number incorrect is " + incorrect);
      ticker++;
      console.log(ticker);
      Questions();
    }
  });
  $("#choiceb").click(function () {
    console.log(answer);
    console.log(questions[ticker].choices[1]);
    if (answer == questions[ticker].choices[1]) {
      console.log("you are correct");
      correct++
      console.log("the number correct is " + correct);
      ticker++;
      console.log("the ticker is " + ticker);
      Questions();
    } else {
      console.log("this is the wrong answer");
      incorrect++
      console.log("the number incorrect is " + incorrect);
      ticker++;
      console.log(ticker);
      Questions();
    }
  });

  $("#choicec").click(function () {
    console.log(answer);
    console.log(questions[ticker].choices[2]);
    if (answer == questions[ticker].choices[2]) {
      console.log("you are correct");
      correct++
      console.log("the number correct is " + correct);
      ticker++;
      console.log("the ticker is " + ticker);
      Questions();
    } else {
      console.log("this is the wrong answer");
      incorrect++
      console.log("the number incorrect is " + incorrect);
      ticker++;
      console.log(ticker);
      Questions();
    }
  });

  $("#choiced").click(function () {
    console.log(answer);
    console.log(questions[ticker].choices[3]);
    if (answer == questions[ticker].choices[3]) {
      console.log("you are correct");
      correct++
      console.log("the number correct is " + correct);
      ticker++;
      console.log("the ticker is " + ticker);
      Questions();
    } else {
      console.log("this is the wrong answer");
      incorrect++
      console.log("the number incorrect is " + incorrect);
      ticker++;
      console.log(ticker);
      Questions();
    }  
  });
  
};




//function endgame(){
//   console.log("this is the end game function");
//   $("#questions").empty();
//   var CorrectAnswers = $("<div id='correct' class='results'>")
//   var IncorrectAnswers = $("<div id='incorrect' class='results'>")
//   var NotAnswered = $("<div id='unanswered' class='results'>")

//   CorrectAnswers.append("Questions answered Correctly: " + correct);
//   IncorrectAnswers.append("Questions answered Incorrectly: " + incorrect);
//   NotAnswered.append("Questions not answered: " + unanswered);

// }

function startgame() {
  if (ticker <= 10) {
    console.log(ticker);
    Questions();
  } else
    console.log("The game is over")
  //  endgame();
};

startgame();






// $("#scores").html("Current Score: " + score);








// loop through 10 questions

// Clickable Button to begin the game


//Display directions of game with countdown to start

// display Timer

//display question

//display answer

//Verfications 
//if the timer expires go to the next question
//if an answer is selected check if its right or wrong
//increment the number of question displayed

//if the answer is right then display and imag
// increment the correct answers variable
//increment the number of question displayed
// go to the next question



// if the answer is wrong then show the correct answer and go to the next question
//increment the incorrect answers variable 
//go to the next question
//increment the number of question displayed


//if # of quesitons displayed is equal to ten  then go to summary 


//Summary should display 
//Total number of questions attempted
//Total number of correct Answers
//Total number of incorrect Answers
//Total number of unanswred Questions

//Do you want to play again





//Nice to haves once the basics are done
// images for the correct Answers
// audio for correct Answers
// audio for incorrect Answers
