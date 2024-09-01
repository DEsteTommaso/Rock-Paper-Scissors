
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    console.log("------------------------------------------");

    //print choice
    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    if(humanChoice.toLowerCase() == computerChoice.toLowerCase()){
        humanScore++;
        computerScore++;
    }
    else if((humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") || (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") || (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper")){
        humanScore++;
        console.log("Human win");
    }
        
    else if(computerChoice.toLowerCase() == "rock" && humanChoice.toLowerCase() == "scissors" || (computerChoice.toLowerCase() == "paper" && humanChoice.toLowerCase() == "rock") || (computerChoice.toLowerCase() == "scissors" && humanChoice.toLowerCase() == "paper")){
        computerScore++;
        console.log("Computer win");
    }

    console.log("Human point: " + humanScore);
    console.log("Computer point: " + computerScore);

    console.log("------------------------------------------");

}


function getComputerChoice(){
    let v = Math.floor(Math.random() * 3);
    if(v == 0)
        return rock;
    else if(v == 1)
        return paper;
    else 
        return scissors;
}

function getHumanChoice(){
    let v = prompt("Rock paper or scissors?");
    return v;
}

function playGame(){
    for(let i = 0; i < 5; ++i){
        playRound(getHumanChoice(),getComputerChoice());
    }
   
}

playGame();