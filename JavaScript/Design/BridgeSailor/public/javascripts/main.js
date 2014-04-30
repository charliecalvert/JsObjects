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

require(['jquery', 'SailorExpert', 'Sailor', 'SailorDisplay', 'Sloop', 'Ketch', 'Yawl'], 
    function(jq, SailorExpert, Sailor, SailorDisplay, sloop, ketch, yawl) {
    
    var sailorTools = {};
    
    sailorTools.sailorSloop = new Sailor(sloop);
    sailorTools.sailorKetch = new Sailor(ketch);
    sailorTools.sailorYawl = new Sailor(yawl);    

    sailorTools.sailorExpertSloop = new SailorExpert(sloop);
    sailorTools.sailorExpertKetch = new SailorExpert(ketch);
    sailorTools.sailorExpertYawl = new SailorExpert(yawl);
    
    var display = new SailorDisplay(sailorTools);        
});
