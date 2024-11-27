
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