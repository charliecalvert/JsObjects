/**
 * New node file
 */

import { elf } from './Elf';
import { utilities } from './Utilities';
import SailorBridge from './SailorBridge';
import SailorBridgeExpert from './SailorBridgeExpert';
import Sloop from './boats/Sloop';
import Ketch from './boats/Ketch';
import Yawl from './boats/Yawl';

var Control = (function() {
    // Constructor
    function Control(elfInit) {
        console.log('Control called.');

        elf.utilities = utilities;
        elf.sloop = new Sloop();
        elf.ketch = new Ketch();
        elf.yawl = new Yawl();

        elf.sailorBridge = new SailorBridge();
        elf.SailorBridgeExpert = new SailorBridgeExpert();

        const sailorAction = document.getElementById('sailor');
        const sailorExpertAction = document.getElementById('sailorExpert');
        const readMeAction = document.getElementById('readMe');

        sailorAction.onclick = this.runSailor;
        sailorExpertAction.onclick = runSailExpert;
        readMeAction.onclick = readMe;
    }

    Control.prototype.runSailor = function(bridge) {
        setBridge(elf.sailorBridge);
    };

    var runSailExpert = function() {
        setBridge(elf.SailorBridgeExpert);
    };

    var setBridge = function(bridge) {
        bridge.setBoat(elf.sloop);
        runBridge(bridge, 'Sloop', true);

        bridge.setBoat(elf.yawl);
        runBridge(bridge, 'Yawl', false);

        bridge.setBoat(elf.ketch);
        runBridge(bridge, 'Ketch', false);
    };

    var runBridge = function(bridge, message, clearList) {
        if (clearList) {
            elf.utilities.clear();
        }

        elf.utilities.banner(message);
        elf.utilities.show(bridge.tack());
        elf.utilities.show(bridge.tack());
        elf.utilities.show(bridge.tack());
    };

    var unitTest = function() {
        window.open('/UnitTest');
    };

    var readMe = function() {
        window.open(
            'https://github.com/charliecalvert/JsObjects/blob/master/JavaScript/Design/BridgeSailor/README.md'
        );
    };

    return Control;
})();

new Control();
