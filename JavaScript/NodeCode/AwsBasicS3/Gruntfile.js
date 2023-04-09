module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        clean: {
            work: {
                src: ["**/node_modules/**"]
            },

            zip: {
                src: [zipFile]
            }
        },

        copy: {
            main: {
                src: '<%= zipFile %>',
                dest: process.env.HOMEPATH + '/Aptana Rubles/ElfRuble/templates/'
            },
            deploy: {
                src: ['app.js', 'Server.js', 'MarkdownTransform.py', 'public/index.html',
                    'views/*.jade', 'Source/*.js', 'Images/*.png', 'Images/*.ico',
                    'public/stylesheets/*.css', 'routes/*.js', 'package.json',
                    'Options.json', 'OptionsServer.json', 'MarkdownTransformConfig.json'
                ],
                dest: 'Deploy/',
            }
        },

        strip_code: {
            options: {
                start_comment: "grunt-can-remove-test-code",
                end_comment: "end-grunt-can-remove-test-code",
            },
            your_target: {
                // a list of files you want to strip code from
                src: "Deploy/Source/LoadJson.js"
            }
        },

           });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-strip-code');
    grunt.registerTask("deploy", ["copy:deploy", "strip_code"]);
    grunt.registerTask('dist', ['clean:zip', 'copy:main']);
};
