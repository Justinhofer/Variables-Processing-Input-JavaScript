var billEle = document.body.querySelector(".bill");
var taxEle = document.body.querySelector(".tax");
var billvalueEle = document.body.querySelector(".billvalue");
var tipEle = document.body.querySelector(".tip");
var finalEle = document.body.querySelector(".final");

//prompts return string values
// use Number() to convert value into a numerical value
var billPrompt = Number(prompt("How much is your bill?"));
var taxPrompt = Number(0.07);
var tipPrompt = Number(0.05);
// process

var billvalue = billPrompt * taxPrompt + billPrompt;
var final = billPrompt * tipPrompt + billvalue;

billvalueEle.innerHTML = "The bill with sales tax is " + billvalue;

finalEle.innerHTML = "The final bill including tip is " + final;