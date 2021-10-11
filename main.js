const correctAnswer = true;
// const correctAnswer = false;

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Do you want a coffee break?";

/* document.querySelector(".yes").onclick = function () {
  alert("Super!");
};

document.querySelector(".no").onclick = function () {
  alert("Dummkopf!");
}; */

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    alert("Super!");
  } else {
    alert("Dummkopf");
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    alert("Super!");
  } else {
    alert("Dummkopf!");
  }
};
