var nameAldrin = document.querySelector("#usercard h2");
var profileImage = document.querySelector("#usercardhead img");

console.log(profileImage);

function changeName() {
    if(nameAldrin.innerText == "Aldrin Bersabe"){
        nameAldrin.innerText = "Bolt Bersabe";
        profileImage.src ="img/bolt.jpg";
    }else {
        nameAldrin.innerText = "Aldrin Bersabe";
        profileImage.src = "img/aldrinpic.jpg";
    }
}

var requestCount = document.querySelector("#num2");

var connections = document.querySelector("#friends");
//console.log(connections);

function requestAdd(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
    connections.innerText++;
}

function requestCancel(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
}


/* 
console.log("page loaded...");

var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function edit() {
    username.innerText = "Marisa G";
} */