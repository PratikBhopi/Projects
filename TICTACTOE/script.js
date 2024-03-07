let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let result=document.getElementById("game-result");
let newgamebtn=document.querySelector("#newgame-btn")
let game=document.querySelector(".game");
let go_back=document.getElementById("back")
let startbtn=document.getElementById("startgame");

startbtn.addEventListener("click",()=>{
    document.querySelector(".start").style.display="none"
    game.classList.remove("game-hide")
    result.style.display="none";

})
go_back.addEventListener("click",()=>{
    game.classList.add("game-hide")
    document.querySelector(".start").style.display="flex"

})

let turnO=true //player O will be from starting!!

const enableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
        result.style.display="none";

    }
    }

// reset buttons:
const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    result.style.display="none";
}



let winningCombos=[[0,1,2],
                   [0,3,6],
                   [0,4,8],
                   [1,4,7],
                   [2,5,8],
                   [3,4,5],
                   [2,4,6],
                   [6,7,8]]

const disableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}

const  checkWinner=()=>{
    for (let pattern of winningCombos) {
        // pattern[i] ====  gives the winning pattern 
        // console.log(pattern[0],pattern[1],pattern[2]);

        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        // console.log(posval1,posval2,posval3)
        if(posval1!="" && posval2 != "" && posval3 != ""){
            if(posval1===posval2 && posval2===posval3){
                result.style.display="inline";
                result.innerText=`${posval1} is the Winner!!`
                disableBoxes();
            }
        }
    }
}


boxes.forEach(box => {
    box.addEventListener("click",()=>{
        // you write turnO === true or only turnO both are right as if it is true then only it will work
        if(turnO){
            // works only for player o
            box.innerText="O";
            turnO=false;
        }else{
            // works for player x
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
    })


resetbtn.addEventListener("click",resetGame)
newgamebtn.addEventListener("click",resetGame)



                