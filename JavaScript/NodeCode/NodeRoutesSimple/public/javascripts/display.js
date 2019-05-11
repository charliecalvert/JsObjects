/**
 * Created by charlie on 2/22/16.
 */

var elf = {
    init: function() {
        'use strict';
        elf.siteConfig = new elf.SiteConfig();
        elf.walking = new elf.Walking();
    }
};

elf.display = {

    clear:function() {
        $('#displayArea').empty();
        $('#displayList').empty();
    },

    clearConfig: function() {
        $('#dirsToWalk').empty();
        $('#destinationDirs').empty();
    },

    fillDisplayArea: function(stringToDisplay) {
        $('#displayArea').html(stringToDisplay);
    },

    showApacheFiles: function(files, destinationDir) {
        files.forEach(function(file) {
            var base = "/var/www/html/";
            var extra = destinationDir.slice(base.length, destinationDir.length);
            var url = 'http://localhost/' + extra + file.slice(destinationDir.length, file.length);
            $('#displayList').append('<li><a href=\"' + url + '\" target=\"_blank\">' + url + '</a></li>');
        });
    },

    showHtmlFiles: function(files, destinationDir) {
        files.forEach(function(file) {
            // var index = file.lastIndexOf('/');
            var url = 'http://localhost/' + file.slice(destinationDir.length, file.length);
            $('#displayList').append('<li><a href=\"' + url + '\" target=\"_blank\">' + url + '</a></li>');
        });
    },

    showDebug: function(value) {
        $('#debug').append('<li>' + value + '</li>');
    }

};
