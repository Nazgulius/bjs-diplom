"use strict"

const userForm = new UserForm ();  

// login
userForm.loginFormCallback = data;

ApiConnector.login(data, callback);



if (callback){
    location.reload();
} else {
    setLoginErrorMessage(message);
}

// register
userForm.registerFormCallback = data;

ApiConnector.register(data, callback);


if (callback) {
    location.reload();
} else {
    setRegisterErrorMessage(message);
}

// ApiConnector.login(data => {
//     if (data) {
//         ProfileWidget.showProfile(response);
//     }
// });