const getPackages = require('./get-packages');

/*
* Call the getPackages function and log the result
* to the console.
*
* If an error occurs, log the error to the console.
*/
getPackages()
    .then(packages => console.log(packages))
    .catch(error => console.error('Error:', error));