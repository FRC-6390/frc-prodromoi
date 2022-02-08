
let autoD = document.getElementById("auto")
let TeleD = document.getElementById("TeleOp")
let EndGAmeD = document.getElementById("end")
let submitD = document.getElementById("submit")
let TarmacD = document.getElementById("AutoLeftTarmacCheckBox")
var UpperHubNumber = 0;
//UpperHubnum.innerText = UpperHubNumber;
//console.log(TarmacD.checked);

function btnAdd(buttonId){ 
    document.getElementById(buttonId).innerHTML++;
}

function btnSub(buttonId){ 
    document.getElementById(buttonId).innerHTML--;
}

function resetTabs(){
    submitD.classList.replace("visible", "invisible");
    autoD.classList.replace("invisible", "visible");
    EndGAmeD.classList.replace("visible", "invisible");
   TeleD.classList.replace("visible", "invisible");6
}

function switchTab(tabId){
    let selectedTab = document.getElementById(tabId);
    selectedTab.classList = "sm:px-12 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 text-gray-800 tracking-wider rounded-t";
    

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


