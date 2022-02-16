// let entry = ` <div class="container px-5 py-2 mx-auto">
// <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start py-2 mx-auto border-b-2">
//   <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Qualifier 1: 6390 - 40:23 - Win</h1>
//   <button class="font-extrabold bg-gray-300 rounded-lg py-5 px-5"> View</button>      </div>
// </div>`

document.addEventListener('load',init()) 

function init(){
  var ul = document.getElementById("savedMatches");
   readDirectory("matches").then(data => data.forEach(element => {
    ul.innerHTML += ` <li class="container px-5 py-2 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start py-2 mx-auto border-b-2">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">${element["name"]}</h1>
      <button class="font-extrabold bg-gray-300 rounded-lg py-5 px-5" onclick="openViewer('${element["name"]}')"> View</button>      </div>
      </li>`
   }));
}

function filter(){
  let gameType = document.getElementById("matchType").value;
  let teamNumber = document.getElementById("teamNumber").value;
  var ul = document.getElementById("savedMatches");
  var li = ul.getElementsByTagName('li');
  console.log(teamNumber);
  for (i = 0; i < li.length; i++) {
    let name = li[i].getElementsByTagName("h1")[0].innerHTML;
    li[i].style.display = gameType != "All" ? name.includes(gameType+" - ") ? name.includes(" "+gameType+" - ") ? "none" : "" : "none" : "" ;
    li[i].style.display = li[i].style.display == "" ? teamNumber != null ? name.includes("Team "+teamNumber) ? "" : "none" : "none" : "none";
  }
}

function openViewer(fileName) {
  
}
//inp.files.length;
 