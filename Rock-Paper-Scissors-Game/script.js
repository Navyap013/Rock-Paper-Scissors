let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mssgPara = document.querySelector("#msg");
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame = () => {
    console.log("Draw");
     mssgPara.innerText = "Draw , Play again";
};

const showWinner = (userWin) => {
    if(userWin){
        console.log("You win");
        mssgPara.innerText = "You win";
    }
    else{
        console.log("You lose");
        mssgPara.innerText = "You lose";
    }
};
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin =  compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else  {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        } 
        showWinner(userWin);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

