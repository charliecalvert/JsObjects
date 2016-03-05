/**
 * Created by charlie on 3/4/16.
 */

var NotUsed = require('../not-used/get-not-used');
var GetImagesUsed = require('../not-used/get-images-used');
var FindNotUsedCommands = require('../not-used/find-not-used-commands');
var utils = require('../utilities');
var elfConfig = require('elven-code').elfConfig;

describe('Test Not Used Suite', function() {

    var notUsed;
    var getImagesUsed;
    var findNotUsedCommands;

    var imagesOne = [
        '[![/images/california/2015-12-19 09.35.14-small.jpg](/images/california/2015-12-19 09.35.14-small.jpg)](/images/california/2015-12-19 09.35.14.jpg)'
    ];

    var imagesFive = [
        '[![/images/california/2015-12-19 09.35.14-small.jpg](/images/california/2015-12-19 09.35.14-small.jpg)](/images/california/2015-12-19 09.35.14.jpg)',
        '[![/images/california/2015-12-19 09.35.26-small.jpg](/images/california/2015-12-19 09.35.26-small.jpg)](/images/california/2015-12-19 09.35.26.jpg)',
        '[![/images/california/2015-12-19 09.52.08-small.jpg](/images/california/2015-12-19 09.52.08-small.jpg)](/images/california/2015-12-19 09.52.08.jpg)',
        '[![/images/california/2015-12-19 09.52.14-small.jpg](/images/california/2015-12-19 09.52.14-small.jpg)](/images/california/2015-12-19 09.52.14.jpg)',
        '[![/images/california/2015-12-19 09.52.17-small.jpg](/images/california/2015-12-19 09.52.17-small.jpg)](/images/california/2015-12-19 09.52.17.jpg)'
    ];


    beforeEach(function() {
        notUsed = new NotUsed();
        getImagesUsed = new GetImagesUsed();
        findNotUsedCommands = new FindNotUsedCommands();
    });

    it('gets images used for one line', function() {
        var images = imagesOne;
        var lines = getImagesUsed.findMatches(images[0]);
        expect(getImagesUsed.imagesUsed[0]).toBe('/images/california/2015-12-19 09.35.14-small.jpg');
        expect(getImagesUsed.imagesUsed[1]).toBe('/images/california/2015-12-19 09.35.14.jpg');
    });

    it('gets images used for five lines', function() {
        var images = imagesFive;
        getImagesUsed.findMatches(images[0]);
        expect(getImagesUsed.imagesUsed[0]).toBe('/images/california/2015-12-19 09.35.14-small.jpg');
        expect(getImagesUsed.imagesUsed[1]).toBe('/images/california/2015-12-19 09.35.14.jpg');

        lines = getImagesUsed.findMatches(images[1]);
        expect(getImagesUsed.imagesUsed[2]).toBe('/images/california/2015-12-19 09.35.26-small.jpg');
        expect(getImagesUsed.imagesUsed[3]).toBe('/images/california/2015-12-19 09.35.26.jpg');

        lines = getImagesUsed.findMatches(images[2]);
        expect(getImagesUsed.imagesUsed[4]).toBe('/images/california/2015-12-19 09.52.08-small.jpg');
        expect(getImagesUsed.imagesUsed[5]).toBe('/images/california/2015-12-19 09.52.08.jpg');

        lines = getImagesUsed.findMatches(images[3]);
        expect(getImagesUsed.imagesUsed[6]).toBe('/images/california/2015-12-19 09.52.14-small.jpg');
        expect(getImagesUsed.imagesUsed[7]).toBe('/images/california/2015-12-19 09.52.14.jpg');

        lines = getImagesUsed.findMatches(images[4]);
        expect(getImagesUsed.imagesUsed[8]).toBe('/images/california/2015-12-19 09.52.17-small.jpg');
        expect(getImagesUsed.imagesUsed[9]).toBe('/images/california/2015-12-19 09.52.17.jpg');
    });

    it('gets image difference', function(done) {
        var images = imagesOne;
        var allImages = [
            "/images/california/2015-12-19 09.35.14.jpg",
            "/images/california/2015-12-19 09.35.14-small.jpg",
            "/images/california/2015-12-19 09.35.18.jpg",
            "/images/california/2015-12-19 09.35.18-small.jpg"
        ];

        elfConfig.useLocalConfig = true;
        elfConfig.load(function(err) {
            if (err) {
                throw err;
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                expect(settings).toBeTruthy();
                for (var i = 0; i < images.length; i++) {
                    getImagesUsed.findMatches(images[i]);
                }
                var commands = findNotUsedCommands.getCommands(settings.notUsedDir, allImages, getImagesUsed.imagesUsed);
                console.log(commands);
                expect(commands).toContain('09.35.18');
                expect(commands).toContain('09.35.18-small.jpg');
                expect(commands).not.toContain('09.35.14.jpg');
                expect(commands).not.toContain('09.35.14-small.jpg');
                done();
            }
        });
    });

    it('gets image difference bigger', function(done) {
        var images = imagesFive;
        var allImages = [
            "/images/california/2015-12-19 09.35.14.jpg",
            "/images/california/2015-12-19 09.35.14-small.jpg",
            "/images/california/2015-12-19 09.35.18.jpg",
            "/images/california/2015-12-19 09.35.18-small.jpg",
            "/images/california/2015-12-19 09.35.26.jpg",
            "/images/california/2015-12-19 09.35.26-small.jpg",
            "/images/california/2015-12-19 09.52.08.jpg",
            "/images/california/2015-12-19 09.52.08-small.jpg",
            "/images/california/2015-12-19 09.52.14.jpg",
            "/images/california/2015-12-19 09.52.14-small.jpg",
            "/images/california/2015-12-19 09.52.17.jpg",
            "/images/california/2015-12-19 09.52.17-small.jpg",
            "/images/california/2015-12-19 09.52.45.jpg",
            "/images/california/2015-12-19 09.52.45-small.jpg",
            "/images/california/2015-12-19 09.52.49.jpg",
            "/images/california/2015-12-19 09.52.49-small.jpg",
            "/images/california/2015-12-19 09.52.53.jpg",
            "/images/california/2015-12-19 09.52.53-small.jpg",
            "/images/california/2015-12-19 12.10.18.jpg",
            "/images/california/2015-12-19 12.10.18-small.jpg",
            "/images/california/2015-12-19 13.09.50.jpg",
            "/images/california/2015-12-19 13.09.50-small.jpg",
        ];

        elfConfig.useLocalConfig = true;
        elfConfig.load(function(err) {
            if (err) {
                throw err;
            } else {
                var settings = utils.getConfigurationSettings(elfConfig);
                expect(settings).toBeTruthy();
                for (var i = 0; i < images.length; i++) {
                    getImagesUsed.findMatches(images[i]);
                }
                var commands = findNotUsedCommands.getCommands(settings.notUsedDir, allImages, getImagesUsed.imagesUsed);
                expect(commands).toContain('09.35.18');
                expect(commands).toContain('09.35.18-small.jpg');
                expect(commands).not.toContain('09.35.14.jpg');
                expect(commands).not.toContain('09.35.14-small.jpg');

                done();
            }
        });

    });
});