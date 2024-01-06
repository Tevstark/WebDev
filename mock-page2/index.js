// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

// for (let i=1; i <= 10; i++){
//   console.log(i)
// }

// userName = prompt("What is your name? ")
// nameConfirmation = confirm(`Your name is ${userName}`)

// if (nameConfirmation == true){
//   console.log(userName)
// } else {
//   console.log("Please try again")
// }

//Calculator

// let age = prompt("How old are you? ")
// let accessAllowed = (35 > age > 18) ? alert(true):
//   (age > 35) ? alert("Elligible"):
//   (age > 45) ? alert("Target Market"):
//   "You're still welcome!";

function getComputerGuess(){
  let randomIndex = Math.floor(Math.random() * 3) + 1;
  let choices = ["rock", "paper", "scissors"];
  console.log(choices[randomIndex])
  return choices[randomIndex]
}

function getUserGuess(){
  prompt("Rock, Paper, or Scissors?").toLowerCase();
}
function rockPaperScissors(){
  let userGuess = getUserGuess()
  let computerGuess = getComputerGuess()
  if (userGuess === "rock" && computerGuess === "scissors"){
    return console.log("Rock beats Scissors, You Win!")
  } else if(userGuess === "paper" && computerGuess === "rock"){
    console.log("Paper beats rock, You Win!")
  } else if (userGuess === "scissors" && computerGuess === "paper"){
    console.log("Scissors beats Paper, You Win!")
  } else if (userGuess === computerGuess){
    console.log("Draw!")
  } else {
    console.log("You Lose!")
  }

}

rockPaperScissors();