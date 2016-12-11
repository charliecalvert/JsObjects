/**
 * Created by charlie on 10/31/16.
 */

define(['runQuery'], function(runQuery) {
    'use strict';

    var that;

    function Route() {
        this.route = '';
        that = this;
    }

    Route.prototype.setRoute = function(routeInit) {
        this.route = routeInit;
    };

    function root(control) {
        var elfContent = $('#elfContent');
        if (elfContent.length) {
            elfContent.load(control.templateUrl, function(response, status, xhr) {
                if (status == "error") {
                    var msg = "Sorry but there was an error: ";
                    $("#debug").html(msg + xhr.status + " " + xhr.statusText);
                } else {
                    that.resolveRequest(control);
                }
            });
        } else {
            throw ('Element with an id of elfcontent not found in HTML');
        }
    }

    Route.prototype.resolveRequest = function(control) {
        var resolver = {
            getController: function() {
                return control.controller;
            }
        };

        if (control.resolve) {
            for (var funcName in control.resolve) {
                control.resolve[funcName](resolver);
            }
        } else {
            runQuery(null, resolver);
        }
    };

    Route.prototype.when = function(route, control) {
        if (route === this.route) {
            if (control.templateUrl) {
                root(control);
            } else {
                this.resolveRequest(control);
            }
        }
        return this;
    };

    Route.prototype.otherwise = function() {
        // DO NOTHING FOR NOW
        console.log('otherwise');
    };

    return Route;

});
