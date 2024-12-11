
var form = document.querySelector("#form")
var username = document.querySelector(".username")
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var cpassword = document.querySelector(".confr-password")
var submit = document.querySelector(".btn")


form.addEventListener('submit', function(e){
    e.preventDefault();  // automatic refresh ko rokne ke liye hai bhai

    validInput();
})

function validInput(){

    // for the username
    if(username.value == ''){
        setError(username, '*Username is required');
    }

    //  password

    if(password.value == ''){
        setError(password, '*password is required')
    }
    if(cpassword.value === ''){
        setError(cpassword, '*please confirm your password')
    }
    else if(cpassword.value != password.value){
        setError(cpassword, '*password is not matching')
        console.log("match nhi ho rha")
        console.log("password : ", password.value)
    }

    // email

    if(email.value == ''){
        setError(email, '*email is required')
    }


    
}
function setError(element, message){
    var parent = element.parentElement;

    parent.querySelector(".error").innerText = message;

    parent.classList.add('error')
    parent.classList.remove('success')
}
