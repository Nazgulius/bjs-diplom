let logoutButton = new LogoutButton ();

logoutButton.action(
    ApiConnector.logout(item => {
        if (item.success){
            location.reload();
        }    
    })
); 