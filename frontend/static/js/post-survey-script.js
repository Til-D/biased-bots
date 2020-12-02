BOT_SERVER = "http://45.113.235.85:82/"; // "http://45.113.232.76:86/"; //"http://45.113.235.85:88/"; // "http://115.146.94.173/";// "http://localhost:5005/";

EXP = getQueryVariable('exp');
NUM = getQueryVariable('num');

console.log("Recieved Experiment seq: " + EXP);
console.log("Recieved Experiment index: "+ NUM);

// get query variables
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

//initialization
$(document).ready(function() {
})

function nextPage() {
    expNum = 0;
    expNum = parseInt(NUM);

    if (expNum <= 5 && expNum >= 0) {
        window.location.href = "./chat-page.html?exp=" + EXP + "&num=" + expNum;
    }
    else {
        window.location.href = "./thank-you.html";
    }
}