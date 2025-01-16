let loginWindow = document.getElementById("loginWindow");
let welcomeWindow = document.getElementById("welcomeWindow");
let clicked = false;

function moveToLogin(){
    if(clicked==false){
        welcomeWindow.classList.add("hidden");
        loginWindow.classList.remove("hidden");
        clicked = true;
    }
}

document.addEventListener("click", moveToLogin);
