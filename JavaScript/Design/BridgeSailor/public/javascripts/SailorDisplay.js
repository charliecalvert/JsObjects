/**
 * @author Charlie Calvert
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {

    var SailorDisplay = ( function() {

            function SailorDisplay(sailorTools) {
                $("#sailor").click(function() {
                    runSailor(sailorTools.sailorSloop, sailorTools.sailorKetch, sailorTools.sailorYawl);    
                });
                
                $("#sailorExpert").click(function() {
                    runSailorExpert(sailorTools.sailorExpertSloop, sailorTools.sailorExpertKetch, sailorTools.sailorExpertYawl);    
                });                                    
            }

            var clear = function() {
                $("#boatList").empty();
            };
            
            var show = function(value) {
                console.log(value);
                $("#boatList").append("<li>" + value + "</li>");
            };

            var runSailor = function(sailorSloop, sailorKetch, sailorYawl) {
                clear();
                show("===============");
                show("Working with sailor");
                show("===============");

                show(sailorSloop.tack());
                show(sailorKetch.tack());
                show(sailorYawl.tack());
            };

            var runSailorExpert = function(sailorExpertSloop, sailorExpertKetch, sailorExpertYawl) {
                clear();
                show("===============");
                show("Working with sailorExpert");
                show("===============");
                show(sailorExpertSloop.tackStarboard());
                show(sailorExpertKetch.tackStarboard());
                show(sailorExpertYawl.tackStarboard());
                show(sailorExpertSloop.getCurrentTack());
                show(sailorExpertKetch.getCurrentTack());
                show(sailorExpertYawl.getCurrentTack());
                show(sailorExpertSloop.tackPort());
                show(sailorExpertKetch.tackPort());
                show(sailorExpertYawl.tackPort());
                show(sailorExpertSloop.getCurrentTack());
                show(sailorExpertKetch.getCurrentTack());
                show(sailorExpertYawl.getCurrentTack());
                show(sailorExpertSloop.anchor());
                show(sailorExpertKetch.anchor());
                show(sailorExpertYawl.anchor());
            };

            return SailorDisplay;
        }());

        return SailorDisplay;
});
