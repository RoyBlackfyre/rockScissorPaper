
humanScore = 0
computerScore = 0

const roca = document.querySelector("#rock")
const papel = document.querySelector("#paper")
const tijera = document.querySelector("#sccisor")
const contador = document.querySelector("#contador")
const elecciones = document.querySelector("#elecciones")
const resultado = document.querySelector("#resultado")



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

        result = battle(humanChoice,computerChoice)
        if(result=="win"){
            humanScore++
        } else if(result=="lose") {
            computerScore++
        }

        elecciones.innerText = `You ${emojify(humanChoice)} Vs ${emojify(computerChoice)} AI`
        contador.innerText = `${humanScore} : ${computerScore}`
        resultado.innerText = result
    }

function emojify (opcion) {
    if(opcion=="rock"){
        return "🪨"
    } else if (opcion =="paper"){
        return "📜"
    } else {
        return "✂️"
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