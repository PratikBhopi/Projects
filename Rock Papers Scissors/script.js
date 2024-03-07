let paperbtn=document.getElementById("paper")
let rockbtn=document.getElementById("rock")
let scissorbtn=document.getElementById("scissor")
let resultmsg=document.querySelector(".result")
let theme=document.getElementById("theme")
let restartbtn=document.getElementById("restart")

let currmode="light";



theme.addEventListener("click",()=>{
    if(currmode=="light"){
    document.body.style.backgroundColor="#101415"
    document.body.style.color="aliceblue"
    theme.innerText="Light"
    theme.style.color="aliceblue"
    currmode="dark"
    resultmsg.style.color="aliceblue"
}
    else{
        theme.innerText="Dark"
        document.body.style.backgroundColor="#F8F8FF"
        document.body.style.color="#222"
        theme.style.color="#222"
        currmode="light"
        resultmsg.style.color="#222"

    }
})


        







let User_Choice, Com_Choice;
let user_score=0;
let comp_score=0;

document.querySelector("#my-score").innerHTML=`${user_score}`
document.querySelector("#comp-score").innerHTML=`${user_score}`


// score updator ========================================================
const userscoreupdate=()=>{
    user_score++;
    document.querySelector("#my-score").innerHTML=`${user_score}`
}
const comscoreupdate=()=>{
    comp_score++;
    document.querySelector("#comp-score").innerHTML=`${comp_score}`
}

// check the winner======================================================
function winningCondition(){
    // user score===================================
    if(User_Choice=="rock" && Com_Choice=="scissor"){
        userscoreupdate();
        resultmsg.innerText="You Won by taking Rock🪨"
    }
    if(User_Choice=="paper" && Com_Choice=="rock"){
        userscoreupdate();
        resultmsg.innerText="You Won by taking Paper🗞️"

    }
    if(User_Choice=="scissor" && Com_Choice=="paper"){
        userscoreupdate();
        resultmsg.innerText="You Won by taking scissors✂️"

    }
    // computer score================================
    if(Com_Choice=="rock" && User_Choice=="scissor"){
        comscoreupdate();
        resultmsg.innerText="Computer Won by taking Rock🪨"
    }
    if(Com_Choice=="paper" && User_Choice=="rock"){
        comscoreupdate();
        resultmsg.innerText="Computer Won by taking Paper🗞️"

    }
    if(Com_Choice=="scissor" && User_Choice=="paper"){
        comscoreupdate();
        resultmsg.innerText="Computer Won by taking scissors✂️"

}
}

// generate computer choices=============================================
const  compChoice = ()=>{
    let generateChoice=Math.random()*100;
    // console.log(generateChoice)
    if(generateChoice<33){
       Com_Choice="rock"
    }
    if(generateChoice<=66 && generateChoice>33){
        Com_Choice="paper"
    }
    if(generateChoice<=100 && generateChoice>66){
        Com_Choice="scissor"
    }
}



// selection of user=====================================================
paperbtn.addEventListener("click",()=>{
    User_Choice="paper";
    compChoice();
    winningCondition();
})
rockbtn.addEventListener("click",()=>{
    User_Choice="rock";
    compChoice();
    winningCondition();
})
scissorbtn.addEventListener("click",()=>{
    User_Choice="scissor";
    compChoice();
    winningCondition();
})

restartbtn.addEventListener("click",()=>{
    resultmsg.innerHTML="";
    document.querySelector("#my-score").innerHTML=`0`
document.querySelector("#comp-score").innerHTML=`0`

})