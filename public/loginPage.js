"use strict"

const userForm = new UserForm ();  

// login
let dataLogin; 
// = userForm.getData(userForm.loginForm);
//userForm.loginFormCallback = userForm.loginFormAction(dataLogin);
userForm.loginFormCallback = userForm.loginFormAction(dataLogin => {
    ApiConnector.login(dataLogin, (callback) => {
         console.log(callback);
         if (callback.success){
            
            location.reload();
         } else {
             setLoginErrorMessage(message);
         }
     });
});



// register
let dataRegister = userForm.getData(userForm.registerForm); 
userForm.registerFormCallback = dataRegister => {
    ApiConnector.register(dataRegister, (callback) => {
        console.log(callback)
        if (callback.success) {
           userForm.registerFormAction(dataRegister);
           location.reload();
        } else {
            setRegisterErrorMessage(message);
        }
    });
};





// ApiConnector.login(data => {
//     if (data) {
//         ProfileWidget.showProfile(response);
//     }
// }); 
// getData(form)