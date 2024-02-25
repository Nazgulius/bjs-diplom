"use strict"

const userForm = new UserForm ();  

// login
userForm.loginFormCallback = dataLogin => {    
    ApiConnector.login(dataLogin, (callback) => {
         console.log(callback);
         if (callback.success){            
            location.reload();
         } else {
            userForm.setLoginErrorMessage(callback.error);
         }
     });
};


// register
userForm.registerFormCallback = dataRegister => {
    ApiConnector.register(dataRegister, (callback) => {
        console.log(callback);
        if (callback.success) {           
            location.reload();
        } else {
            userForm.setRegisterErrorMessage(callback.error);
        }
    });
};
