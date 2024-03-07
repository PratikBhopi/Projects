const btn=document.querySelector("#numequal");
const output=document.getElementById("display");
const del=document.getElementById("delete");


btn.addEventListener("click",()=>{
    const calculation=output.value;
    // console.log(calculation);
    output.value="";
    const result=eval(calculation);
    output.value=result;
})
del.addEventListener("click",()=>{
    output.value=output.value.toString().slice(0,-1)
    // slice -1 will remove the string elements or character from the last one by one
})



