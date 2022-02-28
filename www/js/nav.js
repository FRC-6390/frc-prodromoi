var CurrentDirectory = {directory: "home", page:"home.html"};
var PreviousPageState = new Object();

document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );
}

function switchPage(page, directory, data = null){
    //save old page state
    if(data) cacheWrite(data).then(swapPage(page, directory));
    else swapPage(page, directory);
}

function swapPage(page, directory) {
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
        CurrentDirectory = newDirectory;
        if(typeof loadConnection == 'function'){
            console.log(typeof loadConnection);
            loadConnection();
        }else{
            // console.log(typeof load);
        }
}