function getName() {
    return new Promise(function(resolve, reject) {
        $.getJSON("/getName", function(name) {
            resolve(name);
        })
            .fail(function( jqxhr, textStatus, error) {
                reject(textStatus + ', ' + error);
            });
    })
}

$(document).ready(function() { 'use strict';
    getName().then(function(result) {
        $('#result').html(result.name);
    }).catch(function(err) {
        $('#result').html(err);
    })
});
