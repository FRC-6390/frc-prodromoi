function onLogin(){
    window.location = "page/home.html";
}

var button = document.getElementById('login');
function onLoad(){
    button.addEventListener("click", onLogin(),false);
    console.log("s");
}

document.addEventListener("deviceready", onLoad() , false);
