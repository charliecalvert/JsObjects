const archiver = require('archiver');
const fs = require('fs');

/**
 * @param {String} source
 * @param {String} out
 * @returns {Promise}
 */
function zipDirectory(source, out) {
    const archive = archiver('zip', { zlib: { level: 9 }});
    const stream = fs.createWriteStream(out);

    return new Promise((resolve, reject) => {
        archive
            .glob(
                '**', {
            ignore: ['node_modules/**', '*.zip']
        })
            .glob('**/.gitignore')
            .on('error', err => reject(err))
            .pipe(stream);
        /*archive
            .directory(source, false)
            .on('error', err => reject(err))
            .pipe(stream)
        ;*/

        stream.on('close', () => resolve());
        archive.finalize();
    });
}

zipDirectory(
    __dirname + '/.',
    'aws-basic.zip');''
