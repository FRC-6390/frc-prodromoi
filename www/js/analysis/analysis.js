// let entry = ` <div class="container px-5 py-2 mx-auto">
// <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start py-2 mx-auto border-b-2">
//   <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Qualifier 1: 6390 - 40:23 - Win</h1>
//   <button class="font-extrabold bg-gray-300 rounded-lg py-5 px-5"> View</button>      </div>
// </div>`

document.addEventListener('load',init()) 

var inp = readDirectory("matches")
function init(){
   var inp = readDirectory("matches")
   return inp;
}

function loadFeed() {

}
console.log(inp); 
//inp.files.length;
for (var i = 0; i < inp.length; i++) {
    let file = inp.files[i];
    
}