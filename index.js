const tab1=document.getElementById("tab1");
const tab2=document.getElementById("tab2");
const tabBtn=document.getElementById("tabBtn");
const box=document.getElementById("box");
const photoContainer=document.getElementById("photo-container");
tabBtn.onclick=function(){
    if(tab2.checked){
        box.style.display="flex"
    }else if(tab1.checked){
        box.style.display="none"
    }
}








const overtext=document.getElementById("overtext");
const userText=document.getElementById("userText");
const submitBtn=document.getElementById("submitBtn");

submitBtn.onclick=function(){
    overtext.textContent=userText.value;
}
