
humanScore = 0
computerScore = 0

const roca = document.querySelector("#rock")
const papel = document.querySelector("#paper")
const tijera = document.querySelector("#sccisor")

document.addEventListener("click",(e)=>{
    if(e.target.id =="scissor" || e.target.id =="paper" || e.target.id =="rock"){
        playRound(e.target.id)
    }
})

function showScore(){
    console.table({"humano":humanScore,"computadora":computerScore})
}

function playRound(humanChoice){
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

function resetScore(){
    humanScore=0
    computerScore=0
}