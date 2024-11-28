
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
    }
}

