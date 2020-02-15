/**
 * @author Charlie Calvert
 */

/* globals define: true */

require.config({
    paths: {
        bootstrap: 'bootstrap.min',
        jquery: 'jquery-2.1.0.min'
    }
});

define(['bootstrap', 'jquery', 'SailBoatFactory'], function(
    bootstrap,
    jq,
    SailBoatFactory
) {
    'use strict';

    var boatFactory = new SailBoatFactory();
    var sloop = boatFactory.createBoat({
        boatType: 'sloop',
        color: 'yellow',
        sailCount: 3
    });

    $('#boatType').html(sloop.constructor.name);
    $('#sailColor').html(sloop.color);
    $('#sailCount').html(sloop.sailCount);
});
