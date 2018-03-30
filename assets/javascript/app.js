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
var unanswered = 0;
//Time remaining
var remainingTime;
var correctanswer;
var answer;


//var intervalID; // = setInterval(countdown, 1000);
var ticker = 0;

// // Create an audio element with JavaScript
var audioElement = document.createElement("audio");

// // Set it's source to the location

audioElement.setAttribute("src", "assets/audio/gang-starr-check-the-technique-instrumental.mp3");
audioElement.play();


function startcountdown() {
  remainingTime = maxTimer;
  intervalID = setInterval(countdown, 1000);
}


//pass function as the first parameter, time as the second parameter
function countdown() {
  console.log("this is remaining time" + remainingTime);
  if (remainingTime == 0) {
    clearInterval(intervalID);
    //  stop(intervalID);
    console.log("Times Up!");
    console.log(correctanswer);
    $("#timerDisplay").html("<h2>" + " Times Up!" + "</h2>");
    $("#timerDisplay").empty();
    reveal();
    return;
  }
  $("#timerDisplay").html("<h2>" + remainingTime + " seconds" + "</h2>");
  remainingTime--;
  console.log("time in the countdown function is " + remainingTime);
}

function Questions() {
  $("#questions").empty();
  $("<h2>").empty();
  if (ticker == 20) {
    endgame();
  } else {
    console.log(questions[ticker]);

    $("#questions").append(questions[ticker].question);
    var questionText = questions[ticker].question;
    var answer = questions[ticker].answer;

    console.log("The answer  " + answer + " to the question  " + questions[ticker].question);

    var choicea = $("<div id='choicea' class='choices'>");
    var choiceb = $("<div id='choiceb' class='choices'>");
    var choicec = $("<div id='choicec' class='choices'>");
    var choiced = $("<div id='choiced' class='choices'>");
    correctanswer = $("<div id='answer' class='answer'>");

    choicea.append(questions[ticker].choices[0]);
    choiceb.append(questions[ticker].choices[1]);
    choicec.append(questions[ticker].choices[2]);
    choiced.append(questions[ticker].choices[3]);

    // correctanswer.append(answer);
    // console.log("correctanswer is " + answer);

    $("#questions").append(choicea, choiceb, choicec, choiced);

    startcountdown();

    $("#choicea").click(function () {
      console.log(answer);
      console.log(questions[ticker].choices[0]);
      if (answer == questions[ticker].choices[0]) {
        console.log("you are correct");
        correct++
        console.log("the number correct is " + correct);
      //  ticker++;
        console.log("the ticker is " + ticker);
        reveal();
      } else {
        console.log("this is the wrong answer");
        incorrect++
        console.log("the number incorrect is " + incorrect);
    //    ticker++;
        console.log(ticker);
        reveal();
      }
    });
    $("#choiceb").click(function () {
      console.log(answer);
      console.log(questions[ticker].choices[1]);
      if (answer == questions[ticker].choices[1]) {
        console.log("you are correct");
        correct++
        console.log("the number correct is " + correct);
       // ticker++;
        console.log("the ticker is " + ticker);
        reveal();
       // nextQuestion();
      } else {
        console.log("this is the wrong answer");
        incorrect++
        console.log("the number incorrect is " + incorrect);
      //  ticker++;
        console.log(ticker);
      //  nextQuestion();
        reveal();
      }
    });

    $("#choicec").click(function () {
      console.log(answer);
      console.log(questions[ticker].choices[2]);
      if (answer == questions[ticker].choices[2]) {
        console.log("you are correct");
        correct++
        console.log("the number correct is " + correct);
     //   ticker++;
        console.log("the ticker is " + ticker);
    //    nextQuestion();
    reveal();
      } else {
        console.log("this is the wrong answer");
        incorrect++
        console.log("the number incorrect is " + incorrect);
       // ticker++;
        console.log(ticker);
      //  nextQuestion();
      reveal();
      }


    });

    $("#choiced").click(function () {
      console.log(answer);
      console.log(questions[ticker].choices[3]);
      if (answer == questions[ticker].choices[3]) {
        console.log("you are correct");
        correct++
        console.log("the number correct is " + correct);
    //    ticker++;
        console.log("the ticker is " + ticker);
      //  nextQuestion();
      reveal();
      } else {
        console.log("this is the wrong answer");
        incorrect++
        console.log("the number incorrect is " + incorrect);
     //   ticker++;
        console.log(ticker);
     //   nextQuestion();
        reveal();
      }
    });

  }
};

function reveal() {
  clearInterval(intervalID);
  $("<h2>").empty();
  $("#questions").empty();
  $("#timerDisplay").empty();
  //display the question and correct answer
  $("#questions").html(questions[ticker].question);
  $("#questions").html(questions[ticker].question + "<p>" + "<h1 id='answer'>" + questions[ticker].answer  + "</h1>" + "</p>"); 
  //add the picture of the answer
  var answerImage = $("<answerImage>");
  var answerPic = $("<img>");
  answerPic.attr("src", questions[ticker].image); 
  $("#questions").append(answerPic);
 //set timer for length of time before moving on
  setTimeout(nextQuestion, 3000);
  ticker++;
}


Questions();


function nextQuestion() {
  clearInterval(intervalID);
  Questions();
}

//Summary should display number of correct Answers,incorrect Answers
function endgame() {
  console.log("this is the end game function");

  $("#questions").empty();

  $("#timerDisplay").empty();

  var CorrectAnswers = $("<div id='correct' class='results'>")
  var IncorrectAnswers = $("<div id='incorrect' class='results'>")
  var NotAnswered = $("<div id='unanswered' class='results'>")

  CorrectAnswers.append("<p>" + "Total Correct Answers: " + correct + "<p>");
  IncorrectAnswers.append("<p>" + "Total Incorrect Answers:  " + incorrect + "<p>");
  NotAnswered.append("Total Unanswered Questions:  " + unanswered);


  $("#questions").append(CorrectAnswers, IncorrectAnswers);

  if (correct > incorrect) {
    audioElement.setAttribute("src", "assets/audio/flavor-flavs-best-yeah-boy.mp3"); 
    audioElement.play();
  }
  if (incorrect > correct){
    audioElement.setAttribute("src", "assets/audio/ice-t-you-played-short.mp3"); 
    audioElement.play();
  }
  }; 
       
 



//   CorrectAnswers.append("Questions answered Cor


// function startgame() {
//   if (ticker <= 10) {
//     console.log(ticker);
//     Questions();
//   } else
//     console.log("The game is over")
//   //  endgame();
// };

// startgame();






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




//Do you want to play again