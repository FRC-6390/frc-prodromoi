var CurrentDirectory = {directory: "home", page:"home.html"};
var PreviousPageState = new Object();

function switchPage(page, directory){
    //save old page state
    PreviousPageState[CurrentDirectory.directory] = document.getElementById("page").innerHTML;

    let newDirectory = {directory: directory, page:page};
    //update to new page state
    if(CurrentDirectory.page == newDirectory.page) {
        $('#page').load(`../page/${page}`);
        console.log("1")
    }else if(PreviousPageState[newDirectory.directory] != null && newDirectory.directory != CurrentDirectory.directory){
            document.getElementById("page").innerHTML = PreviousPageState[newDirectory.directory];
            console.log("2")
        }else{
            $('#page').load(`../page/${newDirectory.page}`);
            console.log("3")
        }
    CurrentDirectory = newDirectory;
}