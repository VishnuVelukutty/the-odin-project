let playerScore=0;
let computerScore=0;


function computerPlay(){
    let options=["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random() * options.length);
    return options[random];
    }


function playRound(playerSelection, computerSelection) {
    let humanInput=playerSelection.toLowerCase();
    console.log(humanInput,computerSelection);

    if (humanInput == computerSelection.toLowerCase()){
        alert("This is a tie");
        alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" " +computerScore);
    }
    else if (humanInput == "rock" && computerSelection == "Paper"){
        alert("Computer wins");
        computerScore++;
        alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" " +computerScore);
        return;
    }
    else if (humanInput == "rock" && computerSelection == "Scissors"){
        alert("You win");
        playerScore++;
        alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" " +computerScore);
        return;
    }
    else if (humanInput == "paper" && computerSelection == "Scissors"){
        alert("Computer wins");
        computerScore++;
        alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" " +computerScore);
        return;
    }
    else if (humanInput == "paper" && computerSelection == "Rock" ){
        alert("You win");
        playerScore++;
        alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" " +computerScore);
        return;   
    }
    else if (humanInput == "scissors" && computerSelection == "Rock"){
        alert("Computer wins");
        computerScore++;
        alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" " +computerScore);
        return;  
    }
    else if (humanInput == "scissors" && computerSelection == "Paper"){
        alert("You win");
        playerScore++;
        alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" " +computerScore);
        return;  
    }
    else{
        alert("Wrong Options Enter either rock, paper or scissors");
        game();
    }    
  }


function game(){
for(i=0;i<=5;i++){
    let playerSelection=prompt("Enter a option from either rock, paper or scissors");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}
}


function round(){

    game();

    let rematch = prompt("Wanna Rematch ? y/n")

    if (rematch == "n" || rematch == "N" ) {
        if (playerScore>computerScore) {
            alert("We need you Neo") 
        }
        else{
            alert("Agents have taken over!!!")
        }      
    }
    else{
        game();
    }



alert("Player Score:"+" "+playerScore +" "+"Computer Score:"+" "+computerScore);

if (playerScore>computerScore){
    alert("We have a human winner"+" " +playerScore);
}
else{
    alert("the computer has won"+" " +computerScore);
}
}


round();

// five rounds of the game then ask for rematch 
