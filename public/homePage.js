const logoutButton = new LogoutButton ();

logoutButton.action(
    ApiConnector.logout(item => {
        if (item.success){
            location.reload();
        }    
    })
); 

ApiConnector.current(callback => {
    if (callback.success) {
        ProfileWidget.showProfile(callback);
    }
});

const ratesBoard = new RatesBoard(data => {    
    if (data) {
        clearTable();
        fillTable(data);
    }
});

setInterval(() => {
    ratesBoard();
}, 1000 * 60);


const moneyManager = new MoneyManager ();

moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data => { 
        if (data ) {
            ProfileWidget.showProfile(data);
            setMessage(isSuccess, message);
        } else {
            setMessage(isSuccess, message);
        }
    });
    
};
