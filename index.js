// Your Code Here
let userName = window.prompt("what is your name");
let point = 0;
let playAgain = true;
function playGame() {
  window.alert("Welcome " + userName + " lets begin");
  for (i = 0; i < questions.length; i++) {
    let question = questions[i];
    let userAnswer = window.prompt(question.text);
    if (userAnswer.toUpperCase() === question.correctAnswer) {
      point = point + 10;
    }
  }
  window.alert(point);
}
while (playAgain === true) {
    playGame()
    let userchosie = window.prompt("do you want to play again. Yes/ No");
    if (userchosie === "yes") {
        playAgain = true;
    } else {
        playAgain = false;
        window.alert("Thanks for playing");
    }
}
