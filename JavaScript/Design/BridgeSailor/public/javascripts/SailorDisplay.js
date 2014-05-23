/**
 * @author Charlie Calvert
 */

define(function(require) {
	'use strict';

    var SailorDisplay = ( function() {

            function SailorDisplay(sailorTools) {
                $("#sailor").click(function() {
                    runSailor(sailorTools.sailorSloop, sailorTools.sailorKetch, sailorTools.sailorYawl);    
                });
                
                $("#sailorExpert").click(function() {
                    runSailorExpert(sailorTools.sailorExpertSloop, sailorTools.sailorExpertKetch, sailorTools.sailorExpertYawl);    
                });                                    
            }

       

           
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
