"use strict";
const question1 = document.querySelector(".question-1");
const answer1 = document.querySelector(".answer-1");
const question2 = document.querySelector(".question-2");
const answer2 = document.querySelector(".answer-2");
const question3 = document.querySelector(".question-3");
const answer3 = document.querySelector(".answer-3");
const question4 = document.querySelector(".question-4");
const answer4 = document.querySelector(".answer-4");
const question5 = document.querySelector(".question-5");
const answer5 = document.querySelector(".answer-5");

function showAnswer1() {
  answer1.classList.toggle("answer");
  question1.classList.toggle("answer-active");
}
function showAnswer2() {
  answer2.classList.toggle("answer");
  question2.classList.toggle("answer-active");
}
function showAnswer3() {
  answer3.classList.toggle("answer");
  question3.classList.toggle("answer-active");
}
function showAnswer4() {
  answer4.classList.toggle("answer");
  question4.classList.toggle("answer-active");
}
function showAnswer5() {
  answer5.classList.toggle("answer");
  question5.classList.toggle("answer-active");
}

question1.addEventListener("click", showAnswer1);
question2.addEventListener("click", showAnswer2);
question3.addEventListener("click", showAnswer3);
question4.addEventListener("click", showAnswer4);
question5.addEventListener("click", showAnswer5);

// Hi lo-agency :) i know this isn't the best solution but it works for now, I'm gonna come back to it and improve my JavaScript code later.
// -Mobina
