const logoutButton = new LogoutButton ();


logoutButton.action = () => {
     ApiConnector.logout(item => {        
         if (item.success){
             location.reload();
         }    
     })
}; 

ApiConnector.current(callback => {  
    if (callback.success) {
        ProfileWidget.showProfile(callback.data);
    }
});

const ratesBoard = new RatesBoard();

// setInterval(() => {     
//      ratesBoard.tableBody = () => {
//         console.log("TEST");
//         ApiConnector.getStocks(data => {
//             console.log(data);
//             if (data.success) {
//                 clearTable();
//                 fillTable(data.date);
//             }
//         });    
//     };
// }, 1000);

function func() {
    ApiConnector.getStocks(item => {
        console.log(item);
        console.log(item.date);
        if (item.success) {
            console.log('внутри IF');
            ratesBoard.clearTable();
            ratesBoard.fillTable(item);
        }
    }); 
}

func();
setInterval(() => {     
    func();
}, 1000 *60);


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
