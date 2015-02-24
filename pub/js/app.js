var app = angular.module('gemStrore', []);

(function(){
    var gem = { name: 'Azurite', price: 2.95 };
    var app = angular.module('gemStore', []);
    
})();


// 1.4

app.controller('StoreController', function() {
    this.product = gem;
});