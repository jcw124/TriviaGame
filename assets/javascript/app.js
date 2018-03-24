//Notes do not refresh the game, Reset the page


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
 var remainingTime=maxTimer;
 



 var intervalID = setInterval(countdown, 1000);

//pass function as the first parameter, time as the second parameter
function countdown(){
  if (remainingTime < 1){
    clearInterval(intervalID);
    console.log("Times Up!");
    $("#timerDisplay").html("<h2>" +  " Times Up!" + "</h2>");
    return;
  }
  $("#timerDisplay").html("<h2>" + remainingTime + " seconds" + "</h2>");
  remainingTime --;
  console.log("time in the countdown function is " + remainingTime);
}






// while  (remainingTime != 0){
 
// } else
// console.log("Times Up!");

//Define array of questions and answers 20 questions
// arrays
//    -question
//    -choices
//    -answer

//    random (i)

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
