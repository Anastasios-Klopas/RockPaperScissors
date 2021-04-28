let userScore = 0;
let computerScore = 0;
//DOM variables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function convertToWord(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissors";
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    //console.log(Math.floor(Math.random() * 3));
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//console.log(getComputerChoice());

function win(userChoice, computerChoice) {
    //console.log("Win");
    //const smallUserWord = "user".fontsize(3); //test na dw diaforetikh opsh
    //const smallUserWord = "user".fontsize(3).sub(); //test na dw diaforetikh opsh
    const smallComputerWord = "computer".fontsize(3).sup();
    const smallUserWord = "user".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Win!";
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallComputerWord}. You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 300);
}

//setTimeout(function () { console.log("hello") }, 3000);

function loose(userChoice, computerChoice) {
    //console.log("Loose");
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to ${convertToWord(computerChoice)}${smallComputerWord}. You Lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a Draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function () { userChoice_div.classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    //console.log(computerChoice);
    //console.log("computer choice =>" + computerChoice);
    //console.log("user choice =>" + userChoice);
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            //console.log("User Win!");
            win(userChoice, computerChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            //console.log("User loose!");
            loose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            //console.log("Draw");
            draw(userChoice, computerChoice);
            break;
        default:
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        //console.log("You click rock");
        game("rock");
    })
    paper_div.addEventListener('click', function () {
        //console.log("You click paper");
        game("paper");
    })
    scissors_div.addEventListener('click', function () {
        //console.log("You click scissors");
        game("scissors");
    })
}
main();