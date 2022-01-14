const root = "../../www";
const homeLocation = `${root}/page/home.html`;
const scoutingLocation = `${root}/`;
const analysisLocation = `${root}/`;
const calculateLocation = `${root}/`;
const connectionLocation = `${root}/`;
const settingsLocation = `${root}/`;

const focusColour = "text-blue-500 outline-none"
const hoverColour = "bg-gray-700"

function createNav() {
    var content = document.getElementById('content')
    content.classList += "h-screen w-screen flex bg-gray-500";
    content.innerHTML = `<aside id="nav"></aside>` + content.innerHTML;

    var nav = document.getElementById('nav');
    nav.classList += "flex flex-col items-center bg-gray-800 text-white shadow h-full"
    nav.innerHTML += `
        <div class="h-16 flex items-center w-full hover:${hoverColour}">
        <a href="${homeLocation}" class="h-16 px-6 flex flex justify-center items-center w-full focus:${focusColour}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </a>
        </div>

        <ul>
        <li class="hover:${hoverColour}">
            <a href="${scoutingLocation}" class="h-16 px-6 flex flex justify-center items-center w-full focus:${focusColour}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            </a>
        </li>

        <li class="hover:${hoverColour}">
            <a href="${analysisLocation}" class="h-16 px-6 flex flex justify-center items-center w-full focus:${focusColour}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            </a>
        </li>

        <li class="hover:${hoverColour}">
            <a href="${calculateLocation}" class="h-16 px-6 flex flex justify-center items-center w-full focus:${focusColour}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>  
            </a>
        </li>

        <li class="hover:${hoverColour}">
            <a href="${connectionLocation}" class="h-16 px-6 flex flex justify-center items-center w-full focus:${focusColour}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            </a>
        </li>
        </ul>

        <div class="mt-auto h-16 flex items-center w-full hover:bg-gray-700">
        <a href="${settingsLocation}" class="h-16 px-6 flex flex justify-center items-center w-full focus:${focusColour}">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        </a>
        </div>`;
}

function newsTab(type, title, descripiton) {
    return `
    <div class="lg:w-1/3 sm:w-1/2 p-4">
    <div class="flex relative">
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${type}</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${title}</h1>
                <p class="leading-relaxed">${descripiton}</p>
              </div>
            </div>
            </div>
    `;
}

function createFeed(newsFeed = []){
    var html = `
    <div class="container px-5 py-5 mx-auto">
    <div class='flex flex-wrap -m-4'>`;
    for (let index = 0; index < newsFeed.length; index++) {
        const elements = newsFeed[index];
        html += newsTab(elements[0],elements[1],elements[2]);
    }
    html += "</div></div>"
    var feed = document.getElementById('news');
    feed.classList += "text-gray-600 body-font overflow-scroll";
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
