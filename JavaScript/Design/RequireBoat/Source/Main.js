/**
 * @author Charlie Calvert
 */

require.config({
    paths: {
        jquery: 'https://code.jquery.com/jquery-3.4.1.slim.min'
    }
});

require(['Boat', 'Car'], function(boat, car) {
    'use strict';
    boat.describe();
    car.describe();
    car.talk();
});
