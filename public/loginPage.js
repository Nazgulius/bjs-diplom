"use strict"

const userForm = new UserForm ();  

// login
userForm.loginFormCallback = dataLogin => {    
    ApiConnector.login(dataLogin, (response) => {
         if (response.success){            
            location.reload();
         } else {
            userForm.setLoginErrorMessage(response.error);
         }
     });
};

// register
userForm.registerFormCallback = dataRegister => {
    ApiConnector.register(dataRegister, (response) => {
        if (response.success) {           
            location.reload();
        } else {
            userForm.setRegisterErrorMessage(response.error);
        }
    });
};
