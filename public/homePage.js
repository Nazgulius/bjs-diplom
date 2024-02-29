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
ApiConnector.current(callback => {  
    if (callback.success) {
        ProfileWidget.showProfile(callback.data);
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
    ApiConnector.addMoney(money, callback => { 
        if (callback.success) {
            ProfileWidget.showProfile(callback.data);
            moneyManager.setMessage(callback, 'Пополнение выполнено!');
        } else {
            moneyManager.setMessage(callback, callback.error);
        }
    })
}

// конвертация валюты
moneyManager.conversionMoneyCallback = money => {
    ApiConnector.convertMoney(money, callback => {        
        if (callback.success) {
            ProfileWidget.showProfile(callback.data);
            moneyManager.setMessage(callback, 'Конвертация валюты успешно выполнена!');
        } else {
            moneyManager.setMessage(callback, callback.error);
        }
    })
}

// перевод валюты
moneyManager.sendMoneyCallback = money => {
    ApiConnector.transferMoney(money, callback => {        
        if (callback.success) {
            ProfileWidget.showProfile(callback.data);
            moneyManager.setMessage(callback, 'Перевод выполнен успешно!');
        } else {
            moneyManager.setMessage(callback, callback.error);
        }
    })
}

// Работа с избранным
const favoritesWidget = new FavoritesWidget ();

// запрос списка избранного
ApiConnector.getFavorites(callback => {
        if (callback.success) {
            favoritesWidget.clearTable();  
            favoritesWidget.fillTable(callback.data); 
            moneyManager.updateUsersList (callback.data); 
        }
    }
)

// добавление в избранное
favoritesWidget.addUserCallback = favorit => {
    ApiConnector.addUserToFavorites(favorit, callback => {
        if (callback.success) {
            favoritesWidget.clearTable();  
            favoritesWidget.fillTable(callback.data); 
            moneyManager.updateUsersList (callback.data); 
            favoritesWidget.setMessage(callback, 'Добавление успешно!');
        } else {
            favoritesWidget.setMessage(callback, callback.error);
        }
    })
}

// удаление из избранного 
favoritesWidget.removeUserCallback = favorit => {
  ApiConnector.removeUserFromFavorites(favorit, callback => {
    if (callback.success) {
        favoritesWidget.clearTable();  
        favoritesWidget.fillTable(callback.data); 
        moneyManager.updateUsersList (callback.data);  
        favoritesWidget.setMessage(callback, 'Удаление успешно!');
    } else {
        favoritesWidget.setMessage(callback, callback.error);
    }
  })
}
