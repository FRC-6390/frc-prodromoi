//UpperHubnum.innerText = UpperHubNumber;
//console.log(TarmacD.checked);
//var points = 0;
document.addEventListener('load',init()) 
function init(){
    document.getElementById("foulSpacer").style.height = document.getElementById("auto").offsetHeight  + "px";
    console.log(document.getElementById("auto").offsetHeight);
}

function btnAdd(buttonId){ 
    document.getElementById(buttonId).innerHTML++;
    document.getElementById("submit"+buttonId).innerHTML = document.getElementById(buttonId).innerHTML;
}

function btnSub(buttonId){ 
    document.getElementById(buttonId).innerHTML--;
    document.getElementById("submit"+buttonId).innerHTML = document.getElementById(buttonId).innerHTML;
}

function resetTabs(){
    if(!document.getElementById("auto").classList.replace("visible", "invisible")) document.getElementById("auto").classList += " invisible";
    if(!document.getElementById("tele").classList.replace("visible", "invisible")) document.getElementById("tele").classList += " invisible";
    if(!document.getElementById("end").classList.replace("visible", "invisible")) document.getElementById("end").classList += " invisible";
    if(!document.getElementById("submit").classList.replace("visible", "invisible")) document.getElementById("submit").classList += " invisible";
   document.getElementById("autoTab").classList = "sm:px-12 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";
   document.getElementById("teleTab").classList = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";
   document.getElementById("endTab").classList = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";
   document.getElementById("submitTab").classList = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-400 hover:text-gray-900 tracking-wider";

}

function switchTab(sectionId){
    resetTabs();
    let section = document.getElementById(sectionId);
    let tab = document.getElementById(sectionId+"Tab")
    tab.classList.replace("border-gray-400","border-gray-800")
    tab.classList.replace("hover:text-gray-900","text-gray-800");
    section.classList.replace("invisible", "visible");
    document.getElementById("foulSpacer").style.height = section.offsetHeight + 5 + "px";
    console.log(section.offsetHeight)
}   

function checkPressed(id){
    let checkbox = document.getElementById(id);
    let html = checkbox.outerHTML;
    if(html.includes('checked=""'))html = html.replace(`checked="">`,">");
    else html = html.replace(">",'checked="">');
    checkbox.outerHTML = html;
    document.getElementById("submit"+id).innerHTML = document.getElementById(id).checked;
}

function selectChange(id) {
    document.getElementById("submit"+id).innerHTML = document.getElementById(id).value;
}

function numberInputChange(id) {
    document.getElementById("submit"+id).innerHTML = document.getElementById(id).value;
}

function submit() {
    let values = {
        Match_Type:document.getElementById("submitMatchType").innerHTML,
        Match_Number:document.getElementById("submitMatchNumber").innerHTML,
        Team_Number:document.getElementById("submitTeamNumber").innerHTML,
        Team_Colour:document.getElementById("submitTeamColour").innerHTML,
        Auto:{
            Left_Tarmac:document.getElementById("submitAutoLeftTarmac").innerHTML,
            Quintet:document.getElementById("submitAutoQuintet").innerHTML,
            Human_Scored:document.getElementById("submitAutoHumanScored").innerHTML,
            Upper_Hub:document.getElementById("submitAutoUpperHub").innerHTML,
            Lower_Hub:document.getElementById("submitAutoLowerHub").innerHTML
        },
        Tele:{
            Upper_Hub:document.getElementById("submitTeleUpperHub").innerHTML,
            Lower_Hub:document.getElementById("submitTeleLowerHub").innerHTML
        },
        End_Game: {
            Hanger_Rung:document.getElementById("submitEndgameHangerRung").innerHTML,
            Result:document.getElementById("submitEndgameResult").innerHTML,
            Score:document.getElementById("submitEndgameScore").innerHTML
        },
        Other: {
            Fouls:document.getElementById("submitOtherFouls").innerHTML,
            Tech_Fouls:document.getElementById("submitOtherTechFouls").innerHTML,
            Yellow_Card:document.getElementById("submitOtherYellowCard").innerHTML,
            Red_Card:document.getElementById("submitOtherRedCard").innerHTML,
            Disabled:document.getElementById("submitOtherDisabled").innerHTML,
            Disqualifed:document.getElementById("submitOtherDisqualifed").innerHTML
        } 
    }
    let fileName = `${values["Match_Type"]} ${values["Match_Number"]}: ${values["Team_Number"]}, ${values["End_Game"]["Result"]}`;
    write("Matches/"+fileName, JSON.parse(JSON.stringify(values)));
    switchPage('../page/scouting.html', 'scouting')
}