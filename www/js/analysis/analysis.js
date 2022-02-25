// let entry = ` <div class="container px-5 py-2 mx-auto">
// <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start py-2 mx-auto border-b-2">
//   <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Qualifier 1: 6390 - 40:23 - Win</h1>
//   <button class="font-extrabold bg-gray-300 rounded-lg py-5 px-5"> View</button>      </div>
// </div>`

document.addEventListener('load',load()) 

function load(data){
  var ul = document.getElementById("savedMatches");
  ul.innerHTML = "";
   readDirectory("matches").then(file => file.forEach(element => {
    ul.innerHTML += ` <li class="container px-5 py-2 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start py-2 mx-auto border-b-2 hover:bg-yellow-300 mix-blend-overlay rounded-lg">
      <div class="w-full">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900" onclick="openViewer('${element["name"]}')" >${element["name"]}</h1>
      </div>
      <button class="font-extrabold bg-red-500 rounded-lg py-5 px-5 mr-2" onclick="confirmRemoveMatch('${element["name"]}')"> Delete</button>      
      </div>
      </li>`
   }));
   if(data){
    document.getElementById("matchType").selectedIndex = data["gameType"]
    $("#teamNumber").val (data["teamNumber"]);
    filter();
   }
}



function filter(){
  let gameType = document.getElementById("matchType").value;
  let teamNumber = document.getElementById("teamNumber").value;
  var ul = document.getElementById("savedMatches");
  var li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    let name = li[i].getElementsByTagName("h1")[0].innerHTML;
    li[i].style.display = gameType != "All" ? name.includes(gameType+" - ") ? name.includes(" "+gameType+" - ") ? "none" : "" : "none" : "" ;
    li[i].style.display = li[i].style.display == "" ? teamNumber != null ? name.includes("Team "+teamNumber) ? "" : "none" : "none" : "none";
  }
}


function openViewer(fileName) {
  read("matches", fileName).then(data => switchPage("analysis/analysisViewer.html", "analysis", data));
}

function confirmRemoveMatch(filename) {
  let warningText = `Are you sure you want to delete ${filename}?`
  
  if(cordova.platformId == "browser"){
   let prompt = confirm(warningText);
    if (prompt) {
      let data = {gameType: document.getElementById("matchType").selectedIndex, teamNumber : document.getElementById("teamNumber").value}
      remove("matches", filename).finally(switchPage('analysis.html', 'analysis', data));
    }
  }
}

//inp.files.length;
 