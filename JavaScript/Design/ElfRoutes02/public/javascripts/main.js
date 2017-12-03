/*
 * @author: Charlie Calvert
 * @name: main.js
 * Created on 10/10/16.
 *
 * Create Route
 * User clicks hyperlink
 * Tell Route which route was selected
 * Call findRoutes and pass in Routes object
 *   findRoutes calls route.when for each possible path
 */

requirejs.config({
    baseUrl: '.',
    paths: {
        'jquery': '/bower_components/jquery/dist/jquery',
        'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap.min',
        'control': '/javascripts/control',
        'queryController': '/javascripts/controllers/query-controller',
        'aboutController': '/javascripts/controllers/about-controller',
        'Route': '/javascripts/route-provider/route',
        'runQuery': '/javascripts/route-provider/run-query'
    }
});

function setHover() {
    'use strict';

    $('nav li').hover(function(event) {
        setActiveMenuItem(event.currentTarget.id);
    });

    function setActiveMenuItem(event) {

        $('nav li').removeClass('active');

        // var menuItem = $('a[href=".' + this.location.pathname + '"]');
        // var name = this.location.pathname;
        // var event = name.slice(1, name.length).trim();

        if (event.length === 0) {
            //event = 'home';
            return;
        }
        var selector = '#' + event;
        try {
            var menuItem1 = $(selector);
            menuItem1.addClass('active');
        } catch (e) {
            // console.log('Could not find selector. This is expected when testing.', e);
        }
    }
}

requirejs(['jquery'], function($) {
    'use strict';

    requirejs(['Route', 'control', 'bootstrap'], function(Route, control) {
        var run = function(route, event) {
            route.setRoute(event.target.pathname);
            control(route);
        };

        $(document).ready(function() {
            setHover();

            var route = new Route();

            function go(event) {
                event.preventDefault();
                run(route, event);
            }

            $('ul li a').click(go);
            $('.navbar-brand').click(go);

            $('#elfContent').load('/home', function(result) {
                console.log(result);
                run(route, {
                    target: {
                        pathname: '/home'
                    }
                });
            });
        });
    });
});
