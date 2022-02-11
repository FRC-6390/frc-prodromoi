//UpperHubnum.innerText = UpperHubNumber;
//console.log(TarmacD.checked);
//var points = 0;

function btnAdd(buttonId){ 
    document.getElementById(buttonId).innerHTML++;
   
}

function btnSub(buttonId){ 
    document.getElementById(buttonId).innerHTML--;
}

function resetTabs(){
    if(!document.getElementById("auto").classList.replace("visible", "invisible")) document.getElementById("auto").classList += "invisible";
    if(!document.getElementById("tele").classList.replace("visible", "invisible")) document.getElementById("tele").classList += "invisible";
    if(!document.getElementById("end").classList.replace("visible", "invisible")) document.getElementById("end").classList += "invisible";
    if(!document.getElementById("submit").classList.replace("visible", "invisible")) document.getElementById("submit").classList += "invisible";
   document.getElementById("autoTab").classList = "sm:px-12 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";
   document.getElementById("teleTab").classList = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";
   document.getElementById("endTab").classList = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";
   document.getElementById("submitTab").classList = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";

}

function switchTab(sectionId){
    resetTabs();
    document.getElementById(sectionId+"Tab").classList.replace("border-gray-400","border-gray-800")
    document.getElementById(sectionId+"Tab").classList.replace("hover:text-gray-900","text-gray-800");
    document.getElementById(sectionId).classList.replace("invisible", "visible");
}