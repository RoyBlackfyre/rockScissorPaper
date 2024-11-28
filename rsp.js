
humanScore = 0
computerScore = 0

function showScore(){
    console.table([{"humano":humanScore,"computadora":computerScore}]
    )
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

function getHumanChoice(){
    choice = prompt("Input r(rock), s(scissor), p(paper) ")
    if(choice==="r"){
        return "rock"
    } else if(choice==="s") {
        return "scissor"
    } else if(choice==="p"){
        return "paper"
    } else{
        console.log("Invalid choice")
        return null;
    }
}

function play(){
    humanChoice = getHumanChoice()
    computerChoice = getCumputerChoice()
    console.log(`Human chioce: ${humanChoice}`)
    console.log(`Computer chioce: ${computerChoice}`)
    if(humanChoice!=null){
        result = battle(humanChoice,computerChoice)
        console.log(result)
    } else {1
        console.log("Try Again")
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