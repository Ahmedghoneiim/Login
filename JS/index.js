
var logEmailInput = document.getElementById('logEmail');
var logPasswordInput = document.getElementById('logPassword');   //first time login page is loaded, the user's email and password
var btnLoginInput = document.getElementById('btnLogin');

var signNameInput = document.getElementById('signName');
var signEmailInput = document.getElementById('signEmail');
var signPasswordInput = document.getElementById('signPassword'); //second time for signUp User's
var btnSignUpInput = document.getElementById('btnSignUp');
var usersContainer = [];



if(localStorage.getItem("users") !==null ){
    usersContainer = JSON.parse(localStorage.getItem("users"));
}

function signUp()
{
    var users = {
        code:signNameInput.value,
        email:signEmailInput.value,
        password:signPasswordInput.value // objects
    }
    usersContainer.push(users);
    localStorage.setItem("users",JSON.stringify(usersContainer));
    clearForm();
}

function signIn()
{
    
    for(var i=0;i<usersContainer.length; i++)
    {
        if(usersContainer[i].email == logEmailInput.value && usersContainer[i].password == logPasswordInput.value)
        {
            let userName = usersContainer[i].code;
            localStorage.setItem("userName",JSON.stringify(userName));
            location.replace("home.html"); // Search for Bom
        }
        
    }
    
    if(logEmailInput.value == '' && logPasswordInput.value == '' )
    {
        window.alert('Mistake is login')
    }
    
}

function clearForm()
{
    signNameInput.value = null;
    signEmailInput.value = null;
    signPasswordInput.value = null;
}


