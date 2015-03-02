//(function () {
//
//    var app = angular.module('gemStrore', []);
//
//    app.controller('StoreController', function () {
//        this.product = gem;
//    });
//
//    var gem = {
//        name: 'Azurite',
//        price: 110.50,
//        canPurchase: false,
//        soldOut: true
//    };
//})();
//
//
////1.7 
//
//(function () {
//    var app = angular.module('gemStore', []);
//
//    app.controller('StoreController', function () {
//        this.products = gems;
//    });
//
//    var gems = [
//        {
//            name: 'Azurite',
//            price: 2.95
//        },
//        {
//            name: 'Bloodstone',
//            price: 5.95
//        },
//        {
//            name: 'Zircon',
//            price: 3.95
//        },
//    ];
//})();
//
////2.2
//
//(function () {
//
//    var app = angular.module('gemStore', []);
//
//    app.controller('StoreController', function () {
//        this.products = gems;
//    });
//
//    var gems = [
//        {
//            name: 'Azurite',
//            price: 110.50
//        },
//        {
//            name: 'Bloodstone',
//            price: 22.90
//        },
//        {
//            name: 'Zircon',
//            price: 1100
//        },
//    ];
//})();

//2.3

//(function () {
//
//    var app = angular.module('gemStore', []);
//
//    app.controller('StoreController', function () {
//        this.products = gems;
//    });
//
//    var gems = [{
//        name: 'Azurite',
//        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//        shine: 8,
//        price: 110.50,
//        rarity: 7,
//        color: '#CCC',
//        faces: 14,
//        images: [
//        "images/gem-02.gif",
//        "images/gem-05.gif",
//        "images/gem-09.gif"
//      ],
//        reviews: [{
//            stars: 5,
//            body: "I love this gem!",
//            author: "joe@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 1,
//            body: "This gem sucks.",
//            author: "tim@example.org",
//            createdOn: 1397490980837
//      }]
//    }, {
//        name: 'Bloodstone',
//        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//        shine: 9,
//        price: 22.90,
//        rarity: 6,
//        color: '#EEE',
//        faces: 12,
//        images: [
//        "images/gem-01.gif",
//        "images/gem-03.gif",
//        "images/gem-04.gif"
//      ],
//        reviews: [{
//            stars: 3,
//            body: "I think this gem was just OK, could honestly use more shine, IMO.",
//            author: "JimmyDean@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 4,
//            body: "Any gem with 12 faces is for me!",
//            author: "gemsRock@example.org",
//            createdOn: 1397490980837
//      }]
//    }, {
//        name: 'Zircon',
//        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//        shine: 70,
//        price: 1100,
//        rarity: 2,
//        color: '#000',
//        faces: 6,
//        images: [
//        "images/gem-06.gif",
//        "images/gem-07.gif",
//        "images/gem-10.gif"
//      ],
//        reviews: [{
//            stars: 1,
//            body: "This gem is WAY too expensive for its rarity value.",
//            author: "turtleguyy@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 1,
//            body: "BBW: High Shine != High Quality.",
//            author: "LouisW407@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 1,
//            body: "Don't waste your rubles!",
//            author: "nat@example.org",
//            createdOn: 1397490980837
//      }]
//    }];
//})();

////2.4 
//(function() {
//  var app = angular.module('gemStore', []);
//
//  app.controller('StoreController', function() {
//    this.products = gems;
//  });
//
//  var gems = [{
//    name: 'Azurite',
//    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//    shine: 8,
//    price: 110.50,
//    rarity: 7,
//    color: '#CCC',
//    faces: 14,
//    images: [
//      "images/gem-02.gif",
//      "images/gem-05.gif",
//      "images/gem-09.gif"
//    ]
//  }, {
//    name: 'Bloodstone',
//    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//    shine: 9,
//    price: 22.90,
//    rarity: 6,
//    color: '#EEE',
//    faces: 12,
//    images: [
//      "images/gem-01.gif",
//      "images/gem-03.gif",
//      "images/gem-04.gif"
//    ]
//  }, {
//    name: 'Zircon',
//    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//    shine: 70,
//    price: 1100,
//    rarity: 2,
//    color: '#000',
//    faces: 6,
//    images: [
//      "images/gem-06.gif",
//      "images/gem-07.gif",
//      "images/gem-10.gif"
//    ]
//  }];
//})();

//2.5
//(function() {
//  var app = angular.module('gemStore', []);
//
//  app.controller('StoreController', function() {
//    this.products = gems;
//  });
//
//  var gems = [{
//    name: 'Azurite',
//    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//    shine: 8,
//    price: 110.50,
//    rarity: 7,
//    color: '#CCC',
//    faces: 14,
//    images: [ ]
//  }, {
//    name: 'Bloodstone',
//    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//    shine: 9,
//    price: 22.90,
//    rarity: 6,
//    color: '#EEE',
//    faces: 12,
//    images: [
//      "images/gem-01.gif",
//      "images/gem-03.gif",
//      "images/gem-04.gif"
//    ]
//  }, {
//    name: 'Zircon',
//    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//    shine: 70,
//    price: 1100,
//    rarity: 2,
//    color: '#000',
//    faces: 6,
//    images: [
//      "images/gem-06.gif",
//      "images/gem-07.gif",
//      "images/gem-09.gif"
//    ]
//  }];
//})();

//2.7
//
//(function () {
//    var app = angular.module('gemStore', []);
//
//    app.controller('StoreController', function () {
//        this.products = gems;
//    });
//
//    app.controller('TabController', function () {
//        this.tab = 1;
//
//        this.setTab = function (selectedTab) {
//            this.tab = selectedTab;
//        };
//
//        this.isSet = function (givenTab) {
//            return this.tab === givenTab;
//        };
//    });
//
//
//    var gems = [
//        {
//            name: 'Azurite',
//            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//            shine: 8,
//            price: 110.50,
//            rarity: 7,
//            color: '#CCC',
//            faces: 14,
//            images: [
//          "images/gem-02.gif",
//          "images/gem-05.gif",
//          "images/gem-09.gif"
//        ],
//            reviews: [{
//                stars: 5,
//                body: "I love this gem!",
//                author: "joe@example.org",
//                createdOn: 1397490980837
//        }, {
//                stars: 1,
//                body: "This gem sucks.",
//                author: "tim@example.org",
//                createdOn: 1397490980837
//        }]
//      },
//        {
//            name: 'Bloodstone',
//            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//            shine: 9,
//            price: 22.90,
//            rarity: 6,
//            color: '#EEE',
//            faces: 12,
//            images: [
//          "images/gem-01.gif",
//          "images/gem-03.gif",
//          "images/gem-04.gif",
//        ],
//            reviews: [{
//                stars: 3,
//                body: "I think this gem was just OK, could honestly use more shine, IMO.",
//                author: "JimmyDean@example.org",
//                createdOn: 1397490980837
//        }, {
//                stars: 4,
//                body: "Any gem with 12 faces is for me!",
//                author: "gemsRock@example.org",
//                createdOn: 1397490980837
//        }]
//      },
//        {
//            name: 'Zircon',
//            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//            shine: 70,
//            price: 1100,
//            rarity: 2,
//            color: '#000',
//            faces: 6,
//            images: [
//          "images/gem-06.gif",
//          "images/gem-07.gif",
//          "images/gem-09.gif"
//        ],
//            reviews: [{
//                stars: 1,
//                body: "This gem is WAY too expensive for its rarity value.",
//                author: "turtleguyy@example.org",
//                createdOn: 1397490980837
//        }, {
//                stars: 1,
//                body: "BBW: High Shine != High Quality.",
//                author: "LouisW407@example.org",
//                createdOn: 1397490980837
//        }, {
//                stars: 1,
//                body: "Don't waste your rubles!",
//                author: "nat@example.org",
//                createdOn: 1397490980837
//        }]
//      }
//    ];
//})();

//2.8
//
//(function () {
//    var app = angular.module('gemStore', []);
//
//    app.controller('StoreController', function () {
//        this.product = gems;
//    });
//
//    app.controller('TabController', function () {
//        this.tab = 1;
//
//        this.serTab = function (newValue) {
//            this.tab = newValue;
//        };
//
//        this.isSet = function (tabName) {
//            return this.tab === tabName;
//        };
//    });
//
//    //    2.9
//    app.controller('GalleryController', function () {
//        this.current = 0;
//        this.setCurrent = function (newGallery) {
//            this.current = newGallery || 0;
//        };
//    });
//
//    //2.9    
//
//    var gems = [
//        {
//            name: 'Azurite',
//            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//            shine: 8,
//            price: 110.50,
//            rarity: 7,
//            color: '#CCC',
//            faces: 14,
//            images: [
//        "images/gem-02.gif",
//        "images/gem-05.gif",
//        "images/gem-09.gif"
//      ],
//            reviews: [{
//                stars: 5,
//                body: "I love this gem!",
//                author: "joe@example.org",
//                createdOn: 1397490980837
//      }, {
//                stars: 1,
//                body: "This gem sucks.",
//                author: "tim@example.org",
//                createdOn: 1397490980837
//      }]
//    },
//        {
//            name: 'Bloodstone',
//            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//            shine: 9,
//            price: 22.90,
//            rarity: 6,
//            color: '#EEE',
//            faces: 12,
//            images: [
//        "images/gem-01.gif",
//        "images/gem-03.gif",
//        "images/gem-04.gif",
//      ],
//            reviews: [{
//                stars: 3,
//                body: "I think this gem was just OK, could honestly use more shine, IMO.",
//                author: "JimmyDean@example.org",
//                createdOn: 1397490980837
//      }, {
//                stars: 4,
//                body: "Any gem with 12 faces is for me!",
//                author: "gemsRock@example.org",
//                createdOn: 1397490980837
//      }]
//    },
//        {
//            name: 'Zircon',
//            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//            shine: 70,
//            price: 1100,
//            rarity: 2,
//            color: '#000',
//            faces: 6,
//            images: [
//        "images/gem-06.gif",
//        "images/gem-07.gif",
//        "images/gem-09.gif"
//      ],
//            reviews: [{
//                stars: 1,
//                body: "This gem is WAY too expensive for its rarity value.",
//                author: "turtleguyy@example.org",
//                createdOn: 1397490980837
//      }, {
//                stars: 1,
//                body: "BBW: High Shine != High Quality.",
//                author: "LouisW407@example.org",
//                createdOn: 1397490980837
//      }, {
//                stars: 1,
//                body: "Don't waste your rubles!",
//                author: "nat@example.org",
//                createdOn: 1397490980837
//      }]
//    }
//  ];
//})();

//2.10

//3.2
//(function () {
//    var app = angular.module('gemStore', []);
//
//    app.controller('StoreController', function () {
//        this.products = gems;
//    });
//
//    app.controller('TabController', function () {
//        this.tab = 1;
//
//        this.setTab = function (newValue) {
//            this.tab = newValue;
//        };
//
//        this.isSet = function (tabName) {
//            return this.tab === tabName;
//        };
//    });
//
//    app.controller('GallerController', function () {
//        this.current = 0;
//        this.setCurrent = function (newGallery) {}; {
//            this.current = newGallery || 0;
//        };
//    });
//    
//    3.6
    
//    app.controller('ReviewController', function() {
//        this.review = {};
//        
//        this.addReview = function(product) {
//            product.review.push(this.review);
//            
//            this.review = {};
//        };
//    });
//3.6
//
//    var gems = [{
//        name: 'Azurite',
//        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//        shine: 8,
//        price: 110.50,
//        rarity: 7,
//        color: '#CCC',
//        faces: 14,
//        images: [
//        "http://lorempixel.com/160/160",
//        "http://lorempixel.com/160/160",
//        "http://lorempixel.com/160/160"
//      ],
//        reviews: [{
//            stars: 5,
//            body: "I love this gem!",
//            author: "joe@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 1,
//            body: "This gem sucks.",
//            author: "tim@example.org",
//            createdOn: 1397490980837
//      }]
//    }, {
//        name: 'Bloodstone',
//        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//        shine: 9,
//        price: 22.90,
//        rarity: 6,
//        color: '#EEE',
//        faces: 12,
//        images: [
//        "images/gem-01.gif",
//        "images/gem-03.gif",
//        "images/gem-04.gif",
//      ],
//        reviews: [{
//            stars: 3,
//            body: "I think this gem was just OK, could honestly use more shine, IMO.",
//            author: "JimmyDean@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 4,
//            body: "Any gem with 12 faces is for me!",
//            author: "gemsRock@example.org",
//            createdOn: 1397490980837
//      }]
//    }, {
//        name: 'Zircon',
//        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//        shine: 70,
//        price: 1100,
//        rarity: 2,
//        color: '#000',
//        faces: 6,
//        images: [
//        "images/gem-06.gif",
//        "images/gem-07.gif",
//        "images/gem-08.gif"
//      ],
//        reviews: [{
//            stars: 1,
//            body: "This gem is WAY too expensive for its rarity value.",
//            author: "turtleguyy@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 1,
//            body: "BBW: High Shine != High Quality.",
//            author: "LouisW407@example.org",
//            createdOn: 1397490980837
//      }, {
//            stars: 1,
//            body: "Don't waste your rubles!",
//            author: "nat@example.org",
//            createdOn: 1397490980837
//      }]
//    }];
//})();