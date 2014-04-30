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

require(['jquery', 'SailorExpert', 'Sailor', 'Sloop', 'Ketch', 'Yawl'], 
    function(jq, SailorExpert, Sailor, sloop, ketch, yawl) {
    
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

    show("===============");
    show("Working with sailor");
    show("===============");
    var sailorA = new Sailor(sloop);
    var sailorB = new Sailor(ketch);
    var sailorC = new Sailor(yawl);            
    show(sailorA.tack());
    show(sailorB.tack());
    show(sailorC.tack());
});
