

function createFeed(newsFeed = []){
    var html = `
    `;
    for (let index = 0; index < newsFeed.length; index++) {
        const elements = newsFeed[index];
        html += newsTab(elements[0],elements[1],elements[2]);
    }
    html += "</div></div>"
    var feed = document.getElementById('news');
    feed.classList += "";
    feed.innerHTML += html;
   
}

const title = "Prodromoi";
const subtext = "Team Hephaestus#6390 most powerful scouting app";

function createLogin(){
    var content = document.getElementById('content');
    content.classList += "" ;
    content.innerHTML = ``;

    var nav = document.getElementById('login');
    nav.classList += "text-white body-font w-full";
    nav.innerHTML += `<div class="container py-24 mx-auto ">
    <div class="flex flex-col text-center mb-12">
      <h1 class="text-5xl font-medium title-font mb-5 text-gray-500">${title}</h1>
      <p class="lg:w-2/3 w-auto mx-auto leading-relaxed text-base">${subtext}</p>
    <div class="mx-auto py-10 content-center w-full">
      <div class="flex flex-wrap w-full">
      <img src="svg/logo.svg" class="px-16 mx-auto" />
        <div class="w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <button onclick="onLogin();" class="flex mx-auto text-white bg-gray-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">Login</button>
        </div>
    </div>
  </div>`;
}
