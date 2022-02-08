
let autoD = document.getElementById("auto")
let TeleD = document.getElementById("TeleOp")
let EndGAmeD = document.getElementById("end")
let submitD = document.getElementById("submit")
let TarmacD = document.getElementById("AutoLeftTarmacCheckBox")
let UpperHubnum = document.getElementById("UpperHubNum")
var UpperHubNumber = 0;
//UpperHubnum.innerText = UpperHubNumber;
//console.log(TarmacD.checked);

function btnAdd(UpperHubNum){ 

UpperHubNumber == UpperHubNumber + 1;
UpperHubnum.innerText.replace("0", "testing?");

}

function btnSub(UpperHubNum){ 
    let label = document.getElementById(UpperHubNum);
    UpperHubNumber++;
    UpperHubnum.innerText.replaceAll(UpperHubNumber);
    
    
    }

function AutoCall(){

    submitD.classList.replace("visible", "invisible");
    autoD.classList.replace("invisible", "visible");
    EndGAmeD.classList.replace("visible", "invisible");
   TeleD.classList.replace("visible", "invisible");

}

function TeleCall(){
    submitD.classList.replace("visible", "invisible");
 autoD.classList.replace("visible", "invisible");
 EndGAmeD.classList.replace("visible", "invisible");
TeleD.classList.replace("invisible", "visible");

}

function EndCall(){
    submitD.classList.replace("visible", "invisible");
    autoD.classList.replace("visible", "invisible");
    EndGAmeD.classList.replace("invisible", "visible");
   TeleD.classList.replace("visible", "invisible");

}

function SubmitCall(){
    submitD.classList.replace("invisible", "visible");
    autoD.classList.replace("visible", "invisible");
    EndGAmeD.classList.replace("visible", "invisible");
   TeleD.classList.replace("visible", "invisible");


}


