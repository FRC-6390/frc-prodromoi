var teams = []

$(load)

function load(){
  var ul = document.getElementById("ranked");
  ul.innerHTML = "";
   readDirectory("stats").then(file => file.forEach((element, index) => {
    read("stats", element["name"]).then(function(data){
      console.log(data)
      teams.push(JSON.parse(data))
      if(index == file.length-1) refresh();
    })}))
}

function refresh() {
  changeFilter();
  filter();
}

function filter(){
    let teamNumber = document.getElementById("team").value;
    console.log(teamNumber);
    var ul = document.getElementById("ranked");
    var li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      let name = li[i].getElementsByTagName("h1")[0].innerHTML;
      console.log(name);
      li[i].style.display = teamNumber != null ? name.includes(" "+teamNumber) ? "" : "none" : "none";
    }
}

function changeFilter() {
  let type = document.getElementById("type").value;
  switch (type) {
    case "Carry":
      populate(teams.sort(carrySort), "Carry", true)
      break;
      case "Points":
      populate(teams.sort(overallSort), "Points",false)
      break;
      case "Hanger Climb":
      populate(teams.sort(climbSort), "Climb",false)
      break;
      case "Wins":
      populate(teams.sort(winSort), "Wins",true)
      break;
      case "Auto":
      populate(teams.sort(autoSort  ), "Auto",false)
      break;
      case "Auto - Upper Hub":
      populate(teams.sort(autoHighSort), "Auto_Upper_Hub",false)
      break;
      case "Auto - Lower Hub":
      populate(teams.sort(autoLowSort), "Auto_Lower_Hub",false)
      break;
      case "Tele":
      populate(teams.sort(teleSort), "Tele",false)
      break;
      case "Tele - Upper Hub":
      populate(teams.sort(teleHighSort), "Tele_Upper_Hub",false)
      break;
      case "Tele - Lower Hub":
      populate(teams.sort(teleLowSort), "Tele_Lower_Hub",false)
      break;
    default:
      break;
  }
}

function populate(sortedTeam, sortBy, isPrecent) {
  var ul = document.getElementById("ranked");
    ul.innerHTML = "";
  sortedTeam.forEach((team, index) => {
    ul.innerHTML += `<li class="container px-5 py-2 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start py-2 mx-auto border-b-2 hover:bg-yellow-300 mix-blend-overlay rounded-lg">
                <div class="w-full">
                    <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">${index+1}. ${team["Team"]} - Average ${isPrecent ? "%" : ""}${isPrecent?(team["Averages"][sortBy]*100).toFixed(2) : team["Averages"][sortBy].toFixed(2)}</h1>
                </div>
            </div>
        </li>`;
  })
}

function winSort(a, b) {
  let aVal = a["Averages"]["Wins"]
  let bVal = b["Averages"]["Wins"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}

function autoLowSort(a, b) {
  let aVal = a["Averages"]["Auto_Lower_Hub"]
  let bVal = b["Averages"]["Auto_Lower_Hub"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}

function autoHighSort(a, b) {
  let aVal = a["Averages"]["Auto_Upper_Hub"]
  let bVal = b["Averages"]["Auto_Upper_Hub"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}
function teleHighSort(a, b) {
  let aVal = a["Averages"]["Tele_Upper_Hub"]
  let bVal = b["Averages"]["Tele_Upper_Hub"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}
function teleLowSort(a, b) {
  let aVal = a["Averages"]["Tele_Lower_Hub"]
  let bVal = b["Averages"]["Tele_Lower_Hub"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}
function autoSort(a, b) {
  let aVal = a["Averages"]["Auto"]
  let bVal = b["Averages"]["Auto"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}
function teleSort(a, b) {
  let aVal = a["Averages"]["Tele"]
  let bVal = b["Averages"]["Tele"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}
function climbSort(a, b) {
  let aVal = a["Averages"]["Climb"]
  let bVal = b["Averages"]["Climb"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}
function carrySort(a, b) {
  let aVal = a["Averages"]["Carry"]
  let bVal = b["Averages"]["Carry"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}
function overallSort(a, b) {
  let aVal = a["Averages"]["Points"]
  let bVal = b["Averages"]["Points"]
  return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
}