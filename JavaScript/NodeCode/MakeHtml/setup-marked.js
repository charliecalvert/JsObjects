/**
 * Created by charlie on 12/26/15.
 */

var marked = require('marked');
var renderer = new marked.Renderer();
var jade = require('jade');
var fs = require('fs');

var setupMarked = function (toc) {

    function getAnchor(prefix, anchor, raw) {
        'use strict';
        var index = raw.indexOf('{#');

        if (index > -1) {
            anchor = raw.trim().slice(index + 2, (raw.length - 1));
        } else {
            anchor = prefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
        }
        return anchor;
    }

    renderer.code = function (code, lang, escaped) {
        if (lang === 'nohighlighting') {
            return '<pre>'
                + code
                    //+ (escaped ? code : escape(code, true))
                + '\n</pre>\n';

        }

        if (this.options.highlight) {
            var out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out;
            }
        }


        if (!lang) {
            return '<pre><code>'
                + (escaped ? code : escape(code, true))
                + '\n</code></pre>';
        }

        return '<pre><code class="'
            + this.options.langPrefix
            + escape(lang, true)
            + '">'
            + (escaped ? code : escape(code, true))
            + '\n</code></pre>\n';
    };

    renderer.heading = function (text, level, raw) {
        'use strict';
        // console.log("heading called: " + text + " : " + level + " : " + raw);

        var anchor = getAnchor(this.options.headerPrefix, anchor, raw);

        var index = text.indexOf('{#');
        if (index > -1) {
            text = text.slice(0, index).trim();
        }

        var details = {
            anchor: anchor,
            level: level,
            text: text,
            element: '<li><a href="#' + anchor + '">' + text + '</a></li>',
            fileName: this.options.filename
        };

        toc.push(details);

        toc[0].toc.push(details.element);
        return '<h'
            + level
            + ' id="'
            + anchor
            + '">'
            + text
            + '</h'
            + level
            + '>\n';
    };

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        tables: true,
        highlight: function (code) {
            'use strict';
            return require('highlight.js').highlightAuto(code).value;
        }
    });

    var options = {
        "filename": "Render.js",
        "md": marked,
        "basedir": process.env.HOME,
        "title": "My Title"
    };

    return options;

};

setupMarked.insertToc = function (source, itemToInsert) {
    'use strict';
    var index = source.indexOf('<!--TOC_End-->');
    var output = [source.slice(0, index), itemToInsert, source.slice(index)].join('');
    return output;
};

setupMarked.swapExtension = function (fileName, ext) {
    'use strict';
    return fileName.substr(0, fileName.lastIndexOf('.')) + ext;
};

setupMarked.stripExtension = function (fileName) {
    'use strict';
    return fileName.substr(0, fileName.lastIndexOf('.'));
};

setupMarked.getExtension = function (fileName) {
    'use strict';
    fileName = fileName.trim();
    var array = fileName.split(".");
    if (array.length === 1 || ( array[0] === "" && array.length === 2 )) {
        return "";
    }
    return array.pop().toLowerCase();
};

setupMarked.getSingleFile = function (fileRequested, url) {
    'use strict';


    var toc = [{toc: []}];
    var options = setupMarked(toc);

    options.title = setupMarked.stripExtension(fileRequested);
    // options.title = options.title.slice(0, options.title.indexOf('.html'));

    var jadeToRender = 'extends standard-base\nblock append content\n';
    var fileName = url; // setupMarked.stripExtension(url);
    jadeToRender += '\tdiv.container\n';
    jadeToRender += '\t\tinclude:md ' + fileName.slice(process.env.HOME.length, fileName.length) + '\n';

    var tempName = 'views/temp.jade';
    // console.log(jadeToRender);
    fs.writeFileSync(tempName, jadeToRender);

    var html = jade.renderFile(tempName, options);
    html = setupMarked.insertToc(html, toc[0].toc.join('\n'));

    // fs.writeFileSync(process.env.HOME + '/Content' + setupMarked.swapExtension(fileName, '.html'), html);

    var htmlName = setupMarked.swapExtension(fileName, '.html');
    fs.writeFile(htmlName, html, function(err) {
        console.log("in setupMarked.getSingleFile Wrote: \n", htmlName);
    });

};

module.exports = setupMarked;
