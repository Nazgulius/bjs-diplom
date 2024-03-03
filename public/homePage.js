// logout
const logoutButton = new LogoutButton ();
logoutButton.action = () => {
     ApiConnector.logout(item => {        
         if (item.success){
             location.reload();
         }    
     })
}; 

// ProfileWidget
ApiConnector.current(response => {  
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
});

// ratesBoard
const ratesBoard = new RatesBoard();
function func() {
    ApiConnector.getStocks(item => {
        if (item.success) {            
            ratesBoard.clearTable();
            ratesBoard.fillTable(item.data);
        }
    }); 
}

func();
setInterval(() => {     
    func();
}, 1000 * 60);

// Операции с деньгами
const moneyManager = new MoneyManager ();

// пополнение
moneyManager.addMoneyCallback = money => {
    ApiConnector.addMoney(money, response => { 
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response, 'Пополнение выполнено!');
        } else {
            moneyManager.setMessage(response, response.error);
        }
    })
}

// конвертация валюты
moneyManager.conversionMoneyCallback = money => {
    ApiConnector.convertMoney(money, response => {        
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response, 'Конвертация валюты успешно выполнена!');
        } else {
            moneyManager.setMessage(response, response.error);
        }
    })
}

// перевод валюты
moneyManager.sendMoneyCallback = money => {
    ApiConnector.transferMoney(money, response => {        
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManager.setMessage(response, 'Перевод выполнен успешно!');
        } else {
            moneyManager.setMessage(response, response.error);
        }
    })
}

// Работа с избранным
const favoritesWidget = new FavoritesWidget ();

// запрос списка избранного
ApiConnector.getFavorites(response => {
        if (response.success) {
            favoritesWidget.clearTable();  
            favoritesWidget.fillTable(response.data); 
            moneyManager.updateUsersList (response.data); 
        }
    }
)

// добавление в избранное
favoritesWidget.addUserCallback = favorit => {
    ApiConnector.addUserToFavorites(favorit, response => {
        if (response.success) {
            favoritesWidget.clearTable();  
            favoritesWidget.fillTable(response.data); 
            moneyManager.updateUsersList (response.data); 
            favoritesWidget.setMessage(response, 'Добавление успешно!');
        } else {
            favoritesWidget.setMessage(response, response.error);
        }
    })
}

// удаление из избранного 
favoritesWidget.removeUserCallback = favorit => {
  ApiConnector.removeUserFromFavorites(favorit, response => {
    if (response.success) {
        favoritesWidget.clearTable();  
        favoritesWidget.fillTable(response.data); 
        moneyManager.updateUsersList (response.data);  
        favoritesWidget.setMessage(response, 'Удаление успешно!');
    } else {
        favoritesWidget.setMessage(response, response.error);
    }
  })
}
