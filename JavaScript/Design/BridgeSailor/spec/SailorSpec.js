import SailorBridge from '../src/SailorBridge';

describe('Simple Sailor Suite', function() {
    fit('proves we can run a test', function() {
        expect(true).toBe(true);
    });

    it('proves we can load SailorBridge using require', function() {
        expect(SailorBridge).toBeTruthy();
    });

    it('creates a sloop and checks its name', function() {
        var boatType = sloop.getBoatType();
        expect(boatType).toBe('Sloop');
    });

    it('creates a Yawl and checks its name', function() {
        var boatType = yawl.getBoatType();
        expect(boatType).toBe('Yawl');
    });

    it('creates a Ketch and checks its name', function() {
        var boatType = ketch.getBoatType();
        expect(boatType).toBe('Ketch');
    });

    it('shows that a sailor can tack', function() {
        var sailor = new SailorBridge(sloop);
        var result = sailor.tack();
        expect(result).toBe('Sloop tack called.');
    });

    it('shows that a sailor expert can tack', function() {
        var sailor = new SailorBridgeExpert(sloop);
        var result = sailor.tack();
        expect(result).toBe(
            'Expert Says that Sloop tack called. Tacking to port.'
        );
    });

    it('shows that a sailor expert can tack to port', function() {
        var sailor = new SailorBridgeExpert(sloop);
        var tackPort = sailor.tackPort();
        var currentTack = sailor.getCurrentTack();
        expect(tackPort).toBe(
            'Expert Says that Sloop tack called. Tacking to port.'
        );
        expect(currentTack).toBe('This Sloop is on the port tack.');
    });
});
