let btn=document.getElementById("btn");

btn.addEventListener("click",fun);

function fun(event){
    // event.preventDefault();

let Fname=document.getElementById("Fname").value;
let Mobile=document.getElementById("Mobile").value;
let email=document.getElementById("email").value;
let Password=document.getElementById("Password").value;
let Lname=document.getElementById("Lname").value;

let LnameError=document.getElementById("LnameError");
let FnameError=document.getElementById("FnameError");
let PasswordError=document.getElementById("PasswordError");

let emailError=document.getElementById("emailError");
let MobileError=document.getElementById("MobileError");
FnameError.innerHTML = "";
LnameError.innerHTML = "";
emailError.innerHTML = "";
PasswordError.innerHTML = "";
MobileError.innerHTML = "";
if (Fname.trim()===""){
    FnameError.innerHTML="Please enter last name";
    return false;
}
if (Lname.trim()===""){
    LnameError.innerHTML="Please enter last name";
    return false;
}
if (email.trim()===""){
    emailError.innerHTML="Please enter last name";
    return false;
}
if (Mobile.trim()===""){
    MobileError.innerHTML="Please enter mobile name";
    return false;
}
if (Password.trim()===""){
    PasswordError.innerHTML="Please enter password name";
    return false;
}







}