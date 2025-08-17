let userScore =0;
let compScore =0;

const  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreFinal = document.querySelector("#user-score");
const compScoreFinal = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
     })
})

// for generating random computer choice
let compChoice =()=>{
 let options = ["rock","paper","scissors"];
 let randomNumber = Math.floor(Math.random()*3);
 return options[randomNumber];
}

//fucntion for draw case
const draw =() =>{
    console.log("It's a draw !!");
    msg.innerHTML = " It's a DRAW !";
    msg.style.backgroundColor = "rgba(15, 11, 31, 1);";
}

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScoreFinal.innerHTML = userScore;
        console.log(" You Win...!!!");
        msg.innerHTML = `Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
       
    }
    else{
        compScore++;
        compScoreFinal.innerHTML = compScore;
        console.log("Computer Wins...!!!");
        msg,innerHTML = ` ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
}
const playgame = (userChoice)=>{
let computerChoice = compChoice(); 
if(userChoice === computerChoice){
    draw();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        // comp choice will be either paper or scissors
       userWin = computerChoice === "scissors" ? true : false ;
    }
    else if(userChoice === "paper"){
        // computer choice will be either rock or scissors
        userWin = computerChoice === "rock"? true : false ;
    }
    else {
        //now user have only last option = scissors
        userWin = computerChoice === "paper" ? true : false ;
    }
    showWinner(userWin,userChoice,computerChoice);
}
}