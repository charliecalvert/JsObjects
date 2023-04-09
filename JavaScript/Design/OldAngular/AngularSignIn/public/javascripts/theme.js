/**
 * Created by charlie on 6/12/2015.
 */

(function() {
    // https://scotch.io/tutorials/use-angularjs-and-nghref-to-grab-css-dynamically

    var app = angular.module('elvenApp');

    app.factory('themeFactory', function() {
        var themeFactory = {
            themeController: null,
            setLogin: function(init) {
                themeFactory.themeController.loggedIn = init;
            }
        };

        return themeFactory;
    });

    app.controller('ThemeController', function(themeFactory) {
        var themeController = this;
        themeController.loggedIn = false;
        themeFactory.themeController = themeController;
        themeController.bootStrapCss = 'cosmo';
        themeController.bootStrapThemes = [
            { name: 'Cerulean', url: 'cerulean' },
            { name: 'Cosmo', url: 'cosmo' },
            { name: 'Cyborg', url: 'cyborg' },
            { name: 'Darkly', url: 'darkly' },
            { name: 'Flatly', url: 'flatly' },
            { name: 'Journal', url: 'journal' },
            { name: 'Lumen', url: 'lumen' },
            { name: 'Paper', url: 'paper' },
            { name: 'Readable', url: 'readable' },
            { name: 'Sandstone', url: 'sandstone' },
            { name: 'Simplex', url: 'simplex' },
            { name: 'Slate', url: 'slate' },
            { name: 'Spacelab', url: 'spacelab' },
            { name: 'Superhero', url: 'superhero' },
            { name: 'United', url: 'united' },
            { name: 'Yeti', url: 'yeti' }
        ];
    });
})();

/*
 link(rel="stylesheet",ng-href="components/bootswatch/{{headController.css}}/bootstrap.css")
 */
