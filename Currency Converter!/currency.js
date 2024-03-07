const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdown1=document.querySelector(".select1")
const dropdown2=document.querySelector(".select2")
const btn=document.getElementById("exchange")
const exchangerate=document.getElementById("exchange-rates")
const output=document.querySelector(".result")

const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")

const addoption=(dropdown)=>{
    for(currCode in countryList){
        let NewOption= document.createElement("option")
        NewOption.innerText=currCode;
        NewOption.value=currCode;
        dropdown.append(NewOption);
        if(dropdown.name==="to" && currCode==="INR") NewOption.selected="selected"
        if(dropdown.name==="from" && currCode==="USD") NewOption.selected="selected"
        
    }
}
addoption(dropdown1);
addoption(dropdown2);

const updateFlag=(element)=>{
    let currCode=element.value;
    // here value is the value given tothe option
    let countrycode=countryList[currCode]
    // console.log(countrycode)
    let newSrc=`https://flagsapi.com/${countrycode}/shiny/64.png`

    let image=element.parentElement.querySelector("img");
    image.src=newSrc;
};

dropdown1.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
dropdown2.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});

btn.addEventListener("click", async (evtt)=>{
    evtt.preventDefault();
    let amount=document.getElementById("in-amount")
    let amntVal=amount.value;
    if(amntVal==="" || amntVal<1){
    amntVal=1;
    amount.value="1"
    };
    // console.log(fromCurr.value,toCurr.value)
    // the values or codes of country are in upper case and the api needs lower case so we will use to lower method of strings
    const URL= `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    // console.log(URL)


    let response = await fetch(URL);
    // console.log(response)
    let data  = await response.json()
    let rate = data[toCurr.value.toLowerCase()]
    // console.log(rate)

    let totalamount=rate*amntVal;
    exchangerate.innerText=`1 ${fromCurr.value} = ${rate} ${toCurr.value}`
    output.innerText=`${amntVal} ${fromCurr.value} = ${totalamount} ${toCurr.value}`


    


});