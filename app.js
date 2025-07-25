let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
//to genrate Ramdom choice by computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//function if game draw
const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw . Play Again"
    msg.style.backgroundColor = "#081b31";
}

// fucion to show who wins
const showWinner = (userWin ,compChoice ,userChoice) =>{
    if(userWin){
        // console.log("You Win!!");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Winn. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        // console.log("You Lose!!");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your
        ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    // console.log("user Choice =", userChoice);
    //generate computer Choices
    const compChoice = genCompChoice();
    // console.log("computer choice=", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //Scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , Scissors
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
       showWinner(userWin , compChoice , userChoice);  
    }
};

//to track the users move
choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was Clicked" ,userChoice);
        playGame(userChoice);
    })
}
)






