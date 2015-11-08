
(function() {

    // Hide getIntByIt inside anonymous function: Private
    var getIntById = function(id) {
        return parseInt(document.getElementById(id).value);
    };

    // Explicitly make getNine global: Public
    window.getNine = function() {
        return getIntById('nine');
    }
})();
