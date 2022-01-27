

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(device.cordova);
}
function onLogin(){
    var progressBar = document.getElementById("progress");
    var loginButton = document.getElementById("login");
    progressBar.style = "width: 5%"; 
    loginButton.innerHTML+='<img src="svg/loading.svg" class="px-2 py-0.5"/>';
    setTimeout(() => {
        let result = request("/status",progressBar);
        if(result['is_datafeed_down']) alert("TheBlueAlliance data feed is down");
        document.getElementById("login").innerHTML='Login';
        window.location = "page/navigator.html";
    }, 5000);
}
