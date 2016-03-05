/**
 * Created by charlie on 3/3/16.
 */

var elfUtils = require('elven-code').elfUtils;

module.exports = {
    getConfigurationSettings: function (elfConfig) {
        base = elfConfig.get('elvenImages', 'baseDir');
        imageDir = elfConfig.get('elvenImages', 'imageDir');
        return {
            base: base,
            imageDir: elfUtils.ensureEndsWithPathSep(imageDir),
            allImagesJsonFile: elfConfig.get('elvenImages', 'allImagesJsonFile'),
            markdownFileWithImages: elfConfig.get('elvenImages', 'markdownFileWithImages'),
            notUsedDir: elfUtils.ensureEndsWithPathSep(elfConfig.get('elvenImages', 'notUsedDir'))
        };
    }
};