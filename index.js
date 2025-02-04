const overtext=document.getElementById("overtext");
const userText=document.getElementById("userText");
const submitBtn=document.getElementById("submitBtn");

submitBtn.onclick=function(){
    overtext.textContent=userText.value;
}