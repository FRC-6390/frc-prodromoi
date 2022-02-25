var CurrentDirectory = {directory: "home", page:"home.html"};
var PreviousPageState = new Object();

// window.onerror = function(msg, url, linenumber) {
//     alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
//     return true;
// }

function switchPage(page, directory, data = ""){
    //save old page state
    PreviousPageState[CurrentDirectory.directory] = document.getElementById("page").innerHTML;

    let newDirectory = {directory: directory, page:page};
    //update to new page state
    if(CurrentDirectory.page == newDirectory.page) {
        
        $('#page').load(`../page/${page}`);
    }else if(PreviousPageState[newDirectory.directory] != null && newDirectory.directory != CurrentDirectory.directory){
        $('#page').html(PreviousPageState[newDirectory.directory]);
    }else{
        $('#page').load(`../page/${newDirectory.page}`);
    }
    localStorage.data = data;
    CurrentDirectory = newDirectory;
}
