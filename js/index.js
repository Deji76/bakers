
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
setTimeout(() => {
    document.getElementById("first-screen").style.display = "none";
    document.getElementById("second-screen").style.display = "block";
}, 1000);

function sendotp(e) {
    e.preventDefault();
    document.getElementById("first-screen").style.display = "none";
    document.getElementById("second-screen").style.display = "none";
    document.getElementById("third-screen").style.display = "flex";
}
var form = document.getElementById("myform");
form.addEventListener('submit', sendotp);

function verifyotp(f) {
    f.preventDefault();
    document.getElementById("first-screen").style.display = "none";
    document.getElementById("second-screen").style.display = "none";
    document.getElementById("third-screen").style.display = "none";
    document.getElementById("fourth-screen").style.display = "flex";
}
var form = document.getElementById("verify-form");
form.addEventListener('submit', verifyotp);

function closeNav() {
    document.getElementById("sidenav").style.width = 0;
}
function openNav() {
    document.getElementById("sidenav").style.width = "80%";
}



