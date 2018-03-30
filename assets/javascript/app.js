//Notes do not refresh the game, Reset the page
$(document).ready(function () {});

//Define global Variables
//Timers starting value (60s)
var maxTimer = 30;
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

// Create an audio element with JavaScript
var audioElement = document.createElement("audio");

// Set background audio
audioElement.setAttribute("src", "assets/audio/gang-starr-check-the-technique-instrumental.mp3");
audioElement.play();


function startcountdown() {
  remainingTime = maxTimer;
  intervalID = setInterval(countdown, 1000);
}


//pass function as the first parameter, time as the second parameter
function countdown() {
  if (remainingTime == 0) {
    clearInterval(intervalID);
    $("#timerDisplay").html("<h2>" + " Times Up!" + "</h2>");
    $("#timerDisplay").empty();
    unanswered++;
    reveal();
    return;
  }
  $("#timerDisplay").html("<h2>" + remainingTime + " seconds" + "</h2>");
  remainingTime--;
}

function Questions() {
  $("#questions").empty();
  $("<h2>").empty();
  if (ticker == 20) {
    endgame();
  } else {

    $("#questions").append(questions[ticker].question);
    var questionText = questions[ticker].question;
    var answer = questions[ticker].answer;

    var choicea = $("<div id='choicea' class='choices'>");
    var choiceb = $("<div id='choiceb' class='choices'>");
    var choicec = $("<div id='choicec' class='choices'>");
    var choiced = $("<div id='choiced' class='choices'>");
    correctanswer = $("<div id='answer' class='answer'>");

    choicea.append(questions[ticker].choices[0]);
    choiceb.append(questions[ticker].choices[1]);
    choicec.append(questions[ticker].choices[2]);
    choiced.append(questions[ticker].choices[3]);

    $("#questions").append(choicea, choiceb, choicec, choiced);

    startcountdown();

    $("#choicea").click(function () {
      if (answer == questions[ticker].choices[0]) {
        correct++
        reveal();
      } else {
        incorrect++
        reveal();
      }
    });
    $("#choiceb").click(function () {
      if (answer == questions[ticker].choices[1]) {
        correct++
        reveal();
      } else {
        incorrect++
        reveal();
      }
    });

    $("#choicec").click(function () {
      if (answer == questions[ticker].choices[2]) {
        correct++
        reveal();
      } else {
        incorrect++
        reveal();
      }
    });

    $("#choiced").click(function () {
      if (answer == questions[ticker].choices[3]) {
        correct++
        reveal();
      } else {
        incorrect++
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
  $("#questions").html(questions[ticker].question + "<p>" + "<h1 id='answer'>" + questions[ticker].answer + "</h1>" + "</p>");
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

  $("#questions").empty();

  $("#timerDisplay").empty();

  var CorrectAnswers = $("<div id='correct' class='results'>")
  var IncorrectAnswers = $("<div id='incorrect' class='results'>")
  var NotAnswered = $("<div id='unanswered' class='results'>")

  CorrectAnswers.append("<p>" + "Total Correct Answers: " + correct + "<p>");
  IncorrectAnswers.append("<p>" + "Total Incorrect Answers:  " + incorrect + "<p>");
  NotAnswered.append("Total Unanswered Questions:  " + unanswered);


  $("#questions").append(CorrectAnswers, IncorrectAnswers, NotAnswered);

  if (correct > incorrect) {
    audioElement.setAttribute("src", "assets/audio/flavor-flavs-best-yeah-boy.mp3");
    audioElement.play();
    $("#questions").append("<h1 id='win'>" + "You know Hip Hop!" + "</h1>");
  }
  if (incorrect > correct || unanswered > correct && unanswered > incorrect) {
    audioElement.setAttribute("src", "assets/audio/youplayedyourself.mp3");
    audioElement.play();
    $("#questions").append("<h1 id='lose'>" + "Better Luck Next Time!" + "</h1>");
  }
};