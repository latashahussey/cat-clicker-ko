var initialCats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Shaft','Cutie Pie','Sam I Am']
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: ['Tigger']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: ['Fraidy']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['Grey']
    },
    {
        clickCount : 0,
        name : 'SweetPea',
        imgSrc : 'img/sweetpea.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['Bean']
    },
    {
        clickCount : 0,
        name : 'Toby',
        imgSrc : 'img/toby.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['Obie One']
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/9648464288_2516b35537_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames: ['Shuteye']
    }
];



var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    // Cat Levels
    this.catLevel = ko.computed(function() {
        var catLevel;
        var clicks = this.clickCount();
        if (clicks < 10) {
            catLevel = 'Newborn';
        } else if (clicks < 20) {
            catLevel = 'Infant';
        } else if (clicks < 40) {
            catLevel = 'Child';
        } else if (clicks < 60) {
            catLevel = 'Teen';
        } else if (clicks < 100) {
            catLevel = 'Adult';
        } else {
            catLevel = 'Ninja';
        }
        return catLevel;
    }, this);
};

//Setup View Model for those things we need to change
var ViewModel = function() {

    var self = this;

    // store cats
    this.catList = ko.observableArray([]);

    //loop over cats
    initialCats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem));
    });

    // Store current cat in variable
    this.currentCat = ko.observable(this.catList()[0]);

    //Increment the counter
    self.incrementCounter = function() {
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };
};

//Apply bindings to View Model
ko.applyBindings(new ViewModel());
