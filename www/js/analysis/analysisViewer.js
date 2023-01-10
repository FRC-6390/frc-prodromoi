//UpperHubnum.innerText = UpperHubNumber;
//console.log(TarmacD.checked);
//var points = 0;
$(load);

function load(){
    switchTab("submit");
    document.getElementById("foulSpacer").style.height = document.getElementById("submit").offsetHeight  + "px";
    cacheRead().then(function(data) {
        console.log(data);
        data = JSON.parse(data)
        document.getElementById("submitMatchType").innerHTML = data["Match_Type"];
        document.getElementById("submitMatchNumber").innerHTML = data["Match_Number"];
        document.getElementById("submitTeamNumber").innerHTML = data["Team_Number"];
        document.getElementById("submitTeamColour").innerHTML = data["Team_Colour"];
        document.getElementById("AutoLeftTarmac").checked = data["Auto"]["Left_Tarmac"] == "true" ? true : false
        document.getElementById("AutoQuintet").checked = data["Auto"]["Quintet"] == "true" ? true : false
        document.getElementById("AutoHumanScored").checked = data["Auto"]["Human_Scored"] == "true" ? true : false
        document.getElementById("AutoUpperHub").innerHTML = data["Auto"]["Upper_Hub"];
        document.getElementById("AutoLowerHub").innerHTML = data["Auto"]["Lower_Hub"];
        document.getElementById("TeleUpperHub").innerHTML = data["Tele"]["Upper_Hub"];
        document.getElementById("TeleLowerHub").innerHTML = data["Tele"]["Lower_Hub"];
        document.getElementById("EndgameHangerRung").value = data["End_Game"]["Hanger_Rung"];
        document.getElementById("EndgameResult").value = data["End_Game"]["Result"];
        document.getElementById("EndgameScore").value = data["End_Game"]["Score"];
        document.getElementById("OtherFouls").innerHTML = data["Other"]["Fouls"]
        document.getElementById("OtherTechFouls").innerHTML = data["Other"]["Tech_Fouls"]
        document.getElementById("OtherYellowCard").checked = data["Other"]["Yellow_Card"] == "true" ? true : false
        document.getElementById("OtherRedCard").checked = data["Other"]["Red_Card"] == "true" ? true : false
        document.getElementById("OtherDisabled").checked = data["Other"]["Disabled"] == "true" ? true : false
        document.getElementById("OtherDisqualifed").checked = data["Other"]["Disqualifed"] == "true" ? true : false
        refresh();
    })
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

function refresh() {
    // document.getElementById("submitMatchType").innerHTML = document.getElementById("MatchType").value;
    // document.getElementById("submitMatchNumber").innerHTML = document.getElementById("MatchNumber").value
    // document.getElementById("submitTeamNumber").innerHTML = document.getElementById("TeamNumber").value
    // document.getElementById("submitTeamColour").innerHTML = document.getElementById("TeamColour").value
    document.getElementById("submitAutoLeftTarmac").innerHTML = document.getElementById("AutoLeftTarmac").checked
    document.getElementById("submitAutoQuintet").innerHTML = document.getElementById("AutoQuintet").checked
    document.getElementById("submitAutoHumanScored").innerHTML = document.getElementById("AutoHumanScored").checked
    document.getElementById("submitAutoUpperHub").innerHTML = document.getElementById("AutoUpperHub").innerHTML
    document.getElementById("submitAutoLowerHub").innerHTML = document.getElementById("AutoLowerHub").innerHTML
    document.getElementById("submitTeleUpperHub").innerHTML = document.getElementById("TeleUpperHub").innerHTML
    document.getElementById("submitTeleLowerHub").innerHTML = document.getElementById("TeleLowerHub").innerHTML
    document.getElementById("submitEndgameHangerRung").innerHTML = document.getElementById("EndgameHangerRung").value
    document.getElementById("submitEndgameResult").innerHTML = document.getElementById("EndgameResult").value
    document.getElementById("submitEndgameScore").innerHTML = document.getElementById("EndgameScore").value
    document.getElementById("submitOtherFouls").innerHTML = document.getElementById("OtherFouls").innerHTML
    document.getElementById("submitOtherTechFouls").innerHTML = document.getElementById("OtherTechFouls").innerHTML
    document.getElementById("submitOtherYellowCard").innerHTML = document.getElementById("OtherYellowCard").checked
    document.getElementById("submitOtherRedCard").innerHTML = document.getElementById("OtherRedCard").checked
    document.getElementById("submitOtherDisabled").innerHTML = document.getElementById("OtherDisabled").checked
    document.getElementById("submitOtherDisqualifed").innerHTML = document.getElementById("OtherDisqualifed").checked
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
    let fileName = `${values["Match_Type"]} - ${values["Match_Number"]}: Team ${values["Team_Number"]}`;
    write("matches",fileName, JSON.parse(JSON.stringify(values)));
    switchPage('../page/analysis/analysisViewer.html', 'analysis')
}