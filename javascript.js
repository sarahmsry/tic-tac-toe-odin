let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    if(num == 0){
        return "rock"
    } else if(num == 1){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let userInp = prompt("Type your selection (rock/paper/scissors)")
    userInp = userInp.toLowerCase()
    if(userInp === "rock"){
        return userInp
    } else if(userInp === "paper"){
        return userInp
    } else if(userInp === "scissors") {
        return userInp
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("It's a tie!")
    }else if(humanChoice != computerChoice){
        if(humanChoice == "paper"){
            if(computerChoice == "rock"){
                console.log("You win! Paper beats rock")
                humanScore++
            }else if(computerChoice == "scissors"){
                console.log("You lose! Scissors beats paper")
                computerScore++
            }

        }else if(humanChoice == "rock"){
            if(computerChoice == "paper"){
                console.log("You lose! Paper beats rock")
                computerScore++
            }else if(computerChoice == "scissors"){
                console.log("You win! Rock beats scissors")
                humanScore++
        }

        }else if(humanChoice == "scissors"){
            if(computerChoice == "rock"){
                console.log("You lose! Rock beats scissors")
                computerScore++
            }else if(computerChoice == "paper"){
                console.log("You win! Scissors beats paper")
                humanScore++
            }
        }
    }
}


function playGame(){
    for(let round = 1; round <= 5; round++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
        console.log("Current round: " + round)
        console.log("Your score: " + humanScore)
        console.log("Computer score: " + computerScore)
    }

    if(computerScore > humanScore){
        console.log("Computer Wins!")
    }else if(humanScore > computerScore){
        console.log("You win!")
    }else{
        ("It's a tie!")
    }
}

console.log(playGame())