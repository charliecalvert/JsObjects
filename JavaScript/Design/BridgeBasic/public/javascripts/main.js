/**
 * @author Charlie Calvert
 */

require.config({
  paths: {
    "Sloop": 'Boats/Sloop',
    "Ketch": 'Boats/Ketch'         
  }
});

require(['Sailor', 'Sloop', 'Ketch', 'SailorExpert'], function(sailor, sloop, ketch, sailorExpert) {	
    sailor.setBoat(sloop);
    console.log(sailor.anchor());
    console.log(sailorExpert.tackStarboard());
    console.log(sailorExpert.getCurrentTack());
    console.log(sailorExpert.anchor());
    sailor.setBoat(ketch);
    console.log(sailor.anchor());
    console.log(sailorExpert.anchor());	
});
