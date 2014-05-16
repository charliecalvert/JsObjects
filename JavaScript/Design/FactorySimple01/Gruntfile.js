module.exports = function(grunt) {
	'use strict';

	var zipFile = 'FactorySimple01.zip';

	grunt
			.initConfig({
				zipFile : zipFile,

				jshint : {
					files : [ '**/*.js' ],

					options : {
						ignores : [ '**/coverage/**',
							'**/node_modules/**',
							'**/Tests/Jasmine-2.0.0/**',
							'**/jquery-2.?.?.min.js' ],
						reporter : 'checkstyle',
						reporterOutput : 'result.xml',
						strict : true,
						newcap : false,
						globals : {
							describe : true,
							afterEach : true,
							beforeEach : true,
							inject : true,
							it : true,
							jasmine : true,
							expect : true,
							angular : true,
							module : true,
							Crafty : true
						}
					}
				},

				clean : {
					work : {
						src : [ "**/node_modules/**", zipFile ]
					}
				},

				jasmine_node : {
					coverage : {},
					options : {
						forceExit : true,
						match : '.',
						matchall : false,
						extensions : 'js',
						specNameMatcher : 'Spec',
						captureExceptions : true,
						junitreport : {
							report : false,
							savePath : "./reports/jasmine/",
							useDotNotation : true,
							consolidate : true
						}
					},
					all : [ 'Tests/', 'Factory' ]
				},

				karma : {
					unit : {
						configFile : 'karma.conf.js',
						singleRun : true
					// browsers: ['PhantomJS']
					}
				},

				compress : {
					FactorySimple01 : {
						options : {
							archive : '<%= zipFile %>',
							mode : 'zip'
						},
						files : [ {
							src : './*.js*'
						}, {
							src : './Tests/**'
						}, {
							src : './LICENSE'
						}, {
							src : './README.md'
						} ]
					}
				},

				copy : {
					deploy : {
						src : [ 'Server.js', 'Ketch.js', 'Sloop.js', 'Yawl.js',
								'Interface.js' ],
						dest : 'Deploy/',
					},
					main : {
						src : '<%= zipFile %>',
						dest : process.env.HOMEPATH + '/.'
					}
				},

				jsbeautifier : {
					files : [ "**/*.js", '!**/node_modules/**',
							'!**/coverage/**', '!**/Tests/Jasmine-2.0.0/**' ],
					options : {
						js : {
							jslintHappy : false
						}
					}
				}
			});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('dist', [ 'clean:zip', 'compress:angularCalculator',
			'copy:main', 'jasmine', 'jasmine_node' ]);
	grunt.registerTask('check', [ 'jshint', 'jasmine_node' ]);
	grunt.registerTask('pretty', [ 'jsbeautifier' ]);
};
