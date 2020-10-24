// Change Properties

function changeFontSize() {
    var z = document.getElementById("font_size").value;
    document.body.style.fontSize=z;
};


function changeColor (){
  var x =document.getElementById("pickcolor").value;
  document.body.style.backgroundColor= x;
}

function changeFontFamily(){
  var y = document.getElementById("font_family").value;
  document.body.style.fontFamily=y;
}


//    Form Validation

function localValidation() {
    var uname =document.getElementById("username").value;
    var email =document.getElementById("email").value;
    var phone =document.getElementById("phoneno").value;
    var dob =document.getElementById("birthday").value;
    var pass =document.getElementById("password").value;
    var check1 =document.getElementById("checkbox");
    var regexuname= /^[A-Za-z0-9]{5,20}/
    var regexemail=/^[A-Za-z0-9]{2,20}@[A-Za-z]{2,10}.[A-Za-z]{2,3}/
    var regexphone=/^([009627]{6})([7-9]{1})([0-9]{7})/
    var regexpass=/^[A-Za-z0-9!@#$%^&*()?]{8,32}/

    if(regexuname.test(uname)){
        if(regexemail.test(email)){
            if(regexphone.test(phone)){
                if(regexpass.test(pass)){
                    if(check1.checked==true){
                        localStorage.setItem(uname,JSON.stringify([email,dob,phone,pass]))
                        return true;
                    }
                    else{
                        document.getElementById("check_err").innerHTML="Please agree to our terms."
                        return false;
                    }
                }
                else{
                    document.getElementById("pass_err").innerHTML="Please Enter a valid password";
                    return false;
                }            }
            else{
                document.getElementById("phoneno_err").innerHTML="Please Enter a valid Jordanian phone number";
                return false;
            }
        }
        else{
            document.getElementById("email_err").innerHTML="Please Enter a Valid Email";
            return false;
        }
    }
    else{
        document.getElementById("username_err").innerHTML="Please Enter a Valid Username";
        return false;
    }
    
}



function sessionValidation() {
    var uname =document.getElementById("username").value;
    var email =document.getElementById("email").value;
    var phone =document.getElementById("phoneno").value;
    var dob =document.getElementById("birthday").value;
    var pass =document.getElementById("password").value;
    var check1 =document.getElementById("checkbox");
    var regexuname= /^[A-Za-z0-9]{5,20}/
    var regexemail=/^[A-Za-z0-9]{2,20}@[A-Za-z]{2,10}.[A-Za-z]{2,3}/
    var regexphone=/^([009627]{6})([7-9]{1})([0-9]{7})/
    var regexpass=/^[A-Za-z0-9!@#$%^&*()?]{8,32}/



    if(regexuname.test(uname)){
        if(regexemail.test(email)){
            if(regexphone.test(phone)){
                if(regexpass.test(pass)){
                    if(check1.checked==true){
                        sessionStorage.setItem(uname,JSON.stringify([email,dob,phone,pass]))
                        return true;
                    }
                    else{
                        document.getElementById("check_err").innerHTML="Please agree to our terms."
                        return false;
                    }
                }
                else{
                    document.getElementById("pass_err").innerHTML="Please Enter a valid password";
                    return false;
                }            }
            else{
                document.getElementById("phoneno_err").innerHTML="Please Enter a valid Jordanian phone number";
                return false;
            }
        }
        else{
            document.getElementById("email_err").innerHTML="Please Enter a Valid Email";
            return false;
        }
    }
    else{
        document.getElementById("username_err").innerHTML="Please Enter a Valid Username";
        return false;
    }
}


// Clear Storage

function clearStorage() {
    localStorage.clear()
    sessionStorage.clear()
    
}










