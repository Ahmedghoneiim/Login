let userName = JSON.parse(localStorage.getItem("userName"));
var code = document.querySelector('h2');
if(userName != null){
    code.append(' ' + userName);
}

document.getElementById('btnLogout').onclick = function(){
    localStorage.removeItem("userName");
    location.replace("index.html");
}

