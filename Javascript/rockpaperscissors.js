let playerOne = prompt("Rock, Paper Scissors");
let computer = Math.random(Math.floor);


// Rock beats Scissors, Scissors beats Paper, Paper beats Rock.

if (playerOne === computer) {
    console.log("Game Tied")
} else if (playerOne === "Rock" && computer === "Scissors") {
    console.log("Player wins")
}else if (playerOne === "Rock" && computer === "Paper") {
    console.log("Computer wins")
}else if (playerOne === "Scissors" && computer === "Paper") {
    console.log("Player wins")
}else if (playerOne === "Scissors" && computer === "Rock") {
    console.log("Computer wins")
}else if (playerOne === "Paper" && computer === "Rock") {
    console.log("Player wins")
}else if (playerOne === "Paper" && computer === "Scissors") {
    console.log("Computer wins")
}