// This file is used only by jasmine-node. It is not used
// By BoatFactorySpec.html

require.config({
    paths: {
        SailBoatFactory: '../Factory/SailBoatFactory',
        Sloop: '../Factory/Sloop',
        Yawl: '../Factory/Yawl'
    }
});

require(['SimpleTests', 'BoatFactoryTests'], function() {
    'use strict';
    console.log('Main called.');
});
