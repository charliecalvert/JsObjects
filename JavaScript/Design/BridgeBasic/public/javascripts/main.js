/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
        "Sloop" : 'Boats/Sloop',
        "Ketch" : 'Boats/Ketch',
        "Yawl" : 'Boats/Yawl',
        "jquery" : 'jquery-2.1.0.min'
    }
});

require(['jquery', 'SailorExpert', 'Sloop', 'Ketch', 'Yawl'], function(j, SailorExpert, sloop, ketch, yawl) {
    // var sailor = new Sailor(sloop);
    // console.log(sailor.anchor());
    // SailorExpert.prototype = sloop;
    // sailor.setBoat(ketch);
    // console.log(sailor.anchor());
    var show = function(value) {
        console.log(value);
        $("#boatList").append("<li>" + value + "</li>");
    };

    var sailorExpertA = new SailorExpert(sloop);
    var sailorExpertB = new SailorExpert(ketch);
    var sailorExpertC = new SailorExpert(yawl);
    show(sailorExpertA.tackStarboard());
    
    show(sailorExpertB.tackStarboard());
    show(sailorExpertC.tackStarboard());
    show(sailorExpertA.getCurrentTack());
    show(sailorExpertB.getCurrentTack());
    show(sailorExpertC.getCurrentTack());
    show(sailorExpertA.tackPort());
    show(sailorExpertB.tackPort());
    show(sailorExpertC.tackPort());
    show(sailorExpertA.getCurrentTack());
    show(sailorExpertB.getCurrentTack());
    show(sailorExpertC.getCurrentTack());
    show(sailorExpertA.anchor());
    show(sailorExpertB.anchor());
    show(sailorExpertC.anchor());

});
