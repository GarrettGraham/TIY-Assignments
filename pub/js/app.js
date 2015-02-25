(function () {

    var app = angular.module('gemStrore', []);

    app.controller('StoreController', function () {
        this.product = gem;
    });

    var gem = {
        name: 'Azurite',
        price: 110.50,
        canPurchase: false,
        soldOut: true
    };
})();


//1.7 

(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Azurite',
            price: 2.95
        },
        {
            name: 'Bloodstone',
            price: 5.95
        },
        {
            name: 'Zircon',
            price: 3.95
        },
    ];
})();

//2.2

(function () {

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Azurite',
            price: 110.50
        },
        {
            name: 'Bloodstone',
            price: 22.90
        },
        {
            name: 'Zircon',
            price: 1100
        },
    ];
})();