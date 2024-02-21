"use strict"

const userForm = new UserForm ();  

userForm.loginFormCallback = data;


ApiConnector.login(data => data, callback);



if (){
    location.reload();
} else {
    setLoginErrorMessage(message);
}


userForm.registerFormCallback(data);

if (ApiConnector.register) {
    location.reload();
} else {
    setRegisterErrorMessage(message);
}

// ApiConnector.login(data => {
//     if (data) {
//         ProfileWidget.showProfile(response);
//     }
// });