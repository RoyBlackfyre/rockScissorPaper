
humanScore = 0
computerScore = 0

function showScore(){
    console.table({"humano":humanScore,"computadora":computerScore})
}
function playGame(){
    for(let round = 1; round<=5; round++){
        playRound()
    }
    showScore()
}
function playRound(){
    humanChoice = getHumanChoice()
    computerChoice = getCumputerChoice()
    console.log(`Human chioce: ${humanChoice}`)
    console.log(`Computer chioce: ${computerChoice}`)
    if(humanChoice!=null){
        result = battle(humanChoice,computerChoice)
        if(result=="win"){
            humanScore++
        } else if(result=="lose") {
            computerScore++
        }
        console.log(result)

    } else {
        console.log("Try Again")
    }
    
}

function getHumanChoice(){
    choice = prompt("Input r(rock), s(scissor), p(paper) ")
    if(choice==="r"||choice==="R"){
        return "rock"
    } else if(choice==="s"||choice==="S") {
        return "scissor"
    } else if(choice==="p"||choice==="P"){
        return "paper"
    } else{
        console.log("Invalid choice")
        return null;
    }
}

function getCumputerChoice(){
    choice = Math.floor(Math.random()*3 + 1)
    if(choice===1){
        return "rock"
    } else if(choice===2) {
        return "scissor"
    } else {
        return "paper"
    }
}

function battle(human,computer){
    if(human==computer){
        return "tie"
    } else if(human=="rock"){
        return computer=="scissor" ?  "win" :  "lose"
    } else if(human=="scissor"){
        return computer=="paper" ? "win" : "lose"
    } else if(human=="paper"){
        return computer=="rock" ? "win" : "lose"
    }
}