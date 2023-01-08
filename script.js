let email = document.getElementById("email");
let password = document.getElementById("password");

let btn = document.getElementById("btn");

let messEmail = document.getElementById("email-mess");
let messPassword = document.getElementById("password-mess");
let successMess = document.getElementById("successMess");



function onChange(){
    let emailContent = email.value;
    let passwordContent = password.value;

    if(emailContent.length > 3 && emailContent.includes("@") && emailContent.includes(".") && passwordContent.length > 8){
        messPassword.remove();
        messEmail.remove();
        successMess.innerHTML = "All good to go!";
        successMess.style.color = "green";  
        return true;
    }else{
        messEmail.innerHTML = "Make sure email is more than 3 characters and has @ and a .";
        messEmail.style.color = "red";
        messPassword.innerHTML = "Make sure password is more than 8 characters.";
        messPassword.style.color = "red";
        return false;
    }
}

function confirmation(){
    let condition = onChange();
    if(condition){
        let confirmat = confirm("are you sure you want to go ahead and save your details on the server");
        if(confirmat){
            alert("Information successfully saved");
        }else{
            location.reload();
        }
    }
}


password.addEventListener("input",onChange);
btn.addEventListener("click",confirmation)





        