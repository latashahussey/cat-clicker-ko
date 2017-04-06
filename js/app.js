//Setup View Model for those things we need to change
var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/');
    this.nicknames = ko.observableArray(['Shaft','Cutie Pie','Sam I Am']);

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

    //Increment the counter
    this.incrementCounter = function() {
      this.clickCount(this.clickCount() + 1);
    };

//Apply bindings to View Model
ko.applyBindings(new ViewModel());
