'use strict';
/*

    Grunt installation:
    -------------------
    npm install -g grunt-cli
    npm install -g grunt-init
    npm init (creates a `package.json` file)

    Simple Dependency Install:
    --------------------------
    npm install (from the same root directory as the `package.json` file

    Install/Update Plugin :
    --------------------------
    npm install [plugin-name] --save-dev

    UnInstall Plugins:
    --------------------------
    npm uninstall [plugin-name] --save-dev

    Tasks:
    --------------------------
    grunt (default is to watch both sass and coffeescript files)
    grunt sass (compile once)
    grunt watch (you can also explicitly call the watch task)

    All commands are detailed by running the following:
    --------------------------
    grunt --help

    Globbing Patterns
    --------------------------
    * matches any number of characters, but not /
    ? matches a single character, but not /
    ** matches any number of characters, including /, as long as it's the only thing in a path part
    {} allows for a comma-separated list of "or" expressions
    ! at the beginning of a pattern will negate the match

    Prefixes
    --------------------------
    cwd: current working directory

*/

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // CONFIG ===================================/

    grunt.initConfig({

        // Project settings
        config: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= config.app %>/app/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['<%= config.app %>/app/**/*.html'],
                options: {
                    livereload: true
                }
            },
            jsTest: {
                files: ['<%= config.app %>/app/{,*/}*.spec.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            compass: {
                files: ['<%= config.app %>/styles/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '.tmp/css/{,*/}*.css',
                    '<%= config.app %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= config.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= config.dist %>'
                }
            }
        },

        // Make sure our code is beautiful.
        // jsbeautifier is currently setup to look at our JS, HTML & CSS.
        jsbeautifier: {
            files: [
              '<%= config.app %>/app/**/*.js',
              '<%= config.app %>/styles/css/*.css',
              '<%= config.app %>/app/**/*.html'
            ],
            options: {}
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/app/**/*.js'
            ],
            test: {
                options: {
                    jshintrc: '<%= config.app %>/test/.jshintrc'
                },
                src: ['<%= config.app %>/app/{,*/}*.spec.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
              files: [{
                expand: true,
                cwd: '.tmp/css/',
                src: '{,*/}*.css',
                dest: '.tmp/config/'
              }]
            }
        },

        // Automatically inject Bower components into the app
        bowerInstall: {
            app: {
                src: ['<%= config.app %>/index.html'],
                ignorePath: '<%= config.app %>/'
            },
            sass: {
                src: ['<%= config.app %>/styles/sass/{,*/}*.{scss,sass}'],
                ignorePath: '<%= config.app %>/bower_components/'
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= config.app %>/styles/sass',
                cssDir: '.tmp/css',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= config.app %>/assets/images',
                javasDir: '<%= config.app %>/app/{,*/}',
                fontsDir: '<%= config.app %>/assets/fonts',
                importPath: '<%= config.app %>/bower_components',
                httpImagesPath: '/assets/images',
                httpGeneratedImagesPath: '/assets/images/generated',
                httpFontsPath: '/assets/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= config.dist %>/assets/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/app/{,*/}*.js',
                        '<%= config.dist %>/css/{,*/}*.css',
                        '<%= config.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                        // '<%= config.dist %>/fonts/*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= config.app %>/index.html',
            options: {
                dest: '<%= config.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        // Note: https://github.com/yeoman/grunt-usemin/issues/368#issuecomment-52153636
        cssmin: {
            options: {
              // root: '<%= config.app %>'
              target: '.tmp/css/{,*/}*.css',
              relativeTo: '.tmp/css/'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= config.dist %>/assets/images'
                }]
            }
        },

        /*
         * Need to do more research on how to distribute partials into the
         * correct directory.
         */

        // htmlmin: {
        //     dist: {
        //         options: {
        //             collapseWhitespace: true,
        //             collapseBooleanAttributes: true,
        //             removeCommentsFromCDATA: true,
        //             removeOptionalTags: true
        //         },
        //         files: [{
        //             expand: true,
        //             cwd: '<%= config.dist %>',
        //             src: [
        //               '*.html',
        //               '/{,*/}*.html'
        //             ],
        //             dest: '<%= config.dist %>'
        //         }]
        //     }
        // },

        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/js',
                    src: '*.js',
                    dest: '.tmp/concat/js'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'app/{,*/}*.html',
                        'assets/images/{,*/}*.{webp}',
                        'assets/fonts/{,*/}*.*'
                        //'fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/assets/images',
                    dest: '<%= config.dist %>/assets/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= config.app %>/styles/css',
                dest: '.tmp/css/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                'imagemin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });


    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'bowerInstall',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function(target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'bowerInstall',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:dist',
        'cssmin',
        'uglify',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jsbeautifier',
        'newer:jshint',
        'test',
        'build'
    ]);
};
