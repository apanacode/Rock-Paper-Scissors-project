let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
 
const you = document.getElementById("user-score");
const comp = document.getElementById("comp-score");


const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomId=Math.floor(Math.random()*3);
    return options[randomId];
}

const drawGame = () =>{
  
     msg.innerHTML="Game draw play again";
     msg.style.backgroundColor="blue";
    // console.log("game was drawn");

};

const showWinner = (userWin,userchoice,computerChoice)=>{
    // console.log("userwin t or f :",userWin);
    if (userWin === true){
        userScore++;
        you.innerText=userScore;
        // console.log("userscore is :",userScore);
        msg.innerHTML=`you win! your ${userchoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp.innerText = compScore;
    //    console.log("computerscore is :",compScore);
        msg.innerText=`you lost.beats ${computerChoice} your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) =>{
    // console.log("userchoice = ", userchoice);
    //generate compuert choice
    const computerChoice = genComputerChoice();
    console.log("computerChoice =",computerChoice);
    if(userchoice === computerChoice )
    {
       //drawGame
       drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock"){
           //paper,scissors
           userWin = computerChoice === "paper"?false:true;
        }
        else if (userchoice === "paper"){
            //rock , scissors
            userWin = computerChoice === "scissors"?false:true;
        }
        else{
            //rock,paper
            userWin = computerChoice === "rock"?false:true;
        }
        showWinner(userWin,userchoice,computerChoice);

    }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        // console.log("rock paper sciccors",userchoice);
        playgame(userchoice);
    })
})