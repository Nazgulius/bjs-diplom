const logoutButton = new LogoutButton ();

logoutButton.action(
    ApiConnector.logout(item => {
        if (item.success){
            location.reload();
        }    
    })
); 

ApiConnector.current(calback => {
    if (calback.success) {
        ProfileWidget.showProfile(calback);
    }
});

const ratesBoard = new RatesBoard();

ratesBoard