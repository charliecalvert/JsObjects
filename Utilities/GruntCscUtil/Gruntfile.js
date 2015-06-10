module.exports = function(grunt) {

	grunt.initConfig({
        
        currentTag: 'v0.512',
        
        useTags: false,
        
        currentTagMessage: 'Test before school year end',
        
		jshint: {
			files: ['**/*.js'],

			options: {
				ignores: ['*/angular-mocks.js',
					'*/ui-bootstrap-tpls-*.js',
					'*/knockout-*.js',
					'*/Ractive.js',
					'*/**/angular.js',
					'**/node_modules/**',
					'**/handlebars.js',
					'**/jquery*.js',
					'**/cordova*.js',
					'**/qunit*.js'],
				reporter: 'checkstyle',
				reporterOutput: 'result.xml'
			}
		},

		gitpull: {            
			charlieGit: {
				options: {
					cwd: "charliecalvert.github.io",
					verbose: true
				}
			},
			cn: {
				options: {
					cwd: "CloudNotes",
					verbose: true
				}
			},
			elfsite: {
				options: {
					cwd: "elfsite",
					verbose: true
				}
			},
			js: {
				options: {
					cwd: "JsObjects",
					verbose: true
				}
			},
			wt: {
				options: {
					cwd: "Writing",
					verbose: true
				}
			},
		},
		
        gitpush: {            
			charlieGit: {
				options: {
					cwd: "charliecalvert.github.io",
                    tags: '<% useTags %>',
					verbose: true
				}
			},
			cn: {
				options: {
					cwd: "CloudNotes",
                    tags: '<% useTags %>',
					verbose: true
				}
			},
			elfsite: {
				options: {
					cwd: "elfsite",
                    tags: '<% useTags %>',
					verbose: true
				}
			},
			js: {
				options: {
					cwd: "JsObjects",
                    tags: '<% useTags %>',
					verbose: true
				}
			},
			wt: {
				options: {
					cwd: "Writing",
                    tags: '<% useTags %>',
					verbose: true
				}
			},
		},
        
		gittag: {            
			charlieGit: {
				options: {
					cwd: "charliecalvert.github.io",
					tag: '<%= currentTag %>',
					annotated: true,
					message: '<%= currentTagMessage %>',
                    verbose: true
				}
			},
			cn: {
				options: {
					cwd: "CloudNotes",
					tag: '<%= currentTag %>',
					annotated: true,
					message: '<%= currentTagMessage %>',
                    verbose: true
				}
            },
            elfsite: {
				options: {
					cwd: "elfsite",
                    tag: '<%= currentTag %>',
					annotated: true,
					message: '<%= currentTagMessage %>',
					verbose: true
				}
			},
			js: {
				options: {
					cwd: "JsObjects",
                    tag: '<%= currentTag %>',
					annotated: true,
					message: '<%= currentTagMessage %>',
					verbose: true
				}
			},
			wt: {
				options: {
					cwd: "Writing",
                    tag: '<%= currentTag %>',
					annotated: true,
					message: '<%= currentTagMessage %>',
					verbose: true
				}
			}
		},

		clean :	{
			yourTarget : {
				src : [ "**/node_modules/**"
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-git');

	grunt.registerTask('default', ['gitpull:charlieGit', 'gitpull:cn', 'gitpull:elfsite', 'gitpull:js', 'gitpull:wt']);
};
