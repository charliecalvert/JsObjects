function CityState() {
    'use strict';
    this.city = ko.observable('Olympia');
    this.state = ko.observable('Washington');

    this.placeName = ko.computed(function() {
        return this.city() + ', ' + this.state();
    }, this);
}

window.onload = function() {
    'use strict';
    // Activates knockout.js
    ko.applyBindings(new CityState());
};
