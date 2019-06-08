/**
 * Created by charlie on 11/5/16.
 */

window.onload = function() {
    fetch('/test-get')
        .then(response => {
            return response.json();
        })
        .then(result => {
            console.log(result);
        })
        .catch(ex => {
            console.log(ex);
        })

};
//$(document).ready(function() {});
