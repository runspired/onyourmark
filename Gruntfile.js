// Initially Generated on 2013-12-27 using generator-ember 0.8.0
//  Edited by Chris Thoburn

/*global module, require*/
var LIVERELOAD_PORT = 35729,

    lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT}),

    mountFolder = function (connect, dir) {
        "use strict";
        return connect.static(require('path').resolve(dir));
    };

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    "use strict";

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var gruntConfig = {
        app: 'app', //this is the directory path
        dist: 'app/dist',
        scripts: 'package', // this is called "scripts" in yeoman
        styles: 'css', // this is called "styles" in yeoman
        fonts: 'resources/fonts', // new
        images: 'resources', // this is called "images" in yeoman
        startPage: 'index.html',
        templates: 'package/templates'
    };

    grunt.initConfig({
        config: gruntConfig,
        watch: {
            emberTemplates: { // pre-compile your ember templates so they actually work.
                files: '<%= config.app %>/<%= config.templates %>/**/*.hbs',
                tasks: ['emberTemplates']
            },
            stylus: {
                files: ['<%= config.app %>/<%= config.styles %>/{,*/}*.{css,styl}'],
                tasks: ['stylus:server']
            },
            //   compass: {
            //  files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
            //  tasks: ['compass:server']
            // },
            neuter: { // orders your includes to take into account their require() calls and make sure deps are ordered correctly for the app
                files: ['<%= config.app %>/<%= config.scripts %>/{,*/}*.js'],
                tasks: ['neuter']
            },
            livereload: { // refreshes the application when a file that is watched changes
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '.tmp/<%= config.scripts %>/*.js',
                    '<%= config.app %>/*.html',
                    '{.tmp,<%= config.app %>}/<%= config.styles %>/{,*/}*.css',
                    '<%= config.app %>/<%= config.images %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, gruntConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, gruntConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
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
        jshint: {
            /*options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },*/
            all: [
                'Gruntfile.js',
                '<%= config.app %>/<%= config.scripts %>/{,*/}*.js',
                '!<%= config.app %>/<%= config.scripts %>/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha_phantomjs: {
            all: {
                src: ['test/<%= config.startPage %>'],
                run: true
            }
        },
        bower_concat: {
            all: {
                dest: 'app/dist/<%= config.scripts %>/bower-components.js',
                mainFiles: {
                    'showdown': 'compressed/showdown.js',
                    'skrollr': 'dist/skrollr.min.js'
                },
                exclude: [
                    'jquery',
                    'ember-mocha-adapter'
                    // 'ember',
                    // 'ember-data'
                ],
                dependencies: {
                    'ember': ['jquery', 'handlebars'],
                    'ember-data': 'ember'
                },
                bowerOptions: {
                    relative: false
                }
            }
        },
        stylus: {
            options: {
                compress: true, // disabled when run in debug mode, but otherwise minified 
                linenos: false, // add comments to the output specifying the corresponding stylus line number for easier debugging
                firebug: false, // special comment support for firebug
                paths: ['app/bower_components'], // Specifies directories to scan for @import directives when parsing.
                // define: {}, // defined global vars available to stylus during compilation
                // urlfunc: '', // Specifies function name that should be used for embedding images as Data URI.
                // use: [], // Allows passing of stylus plugins to be used during compile.
                // import: [], // Import given stylus packages into every compiled .styl file, as if you wrote @import '...' in every single one of said files.
                'include css': false, // When including a css file in your app.styl by using @import "style.css", by default it will not include the full script, use true to compile into one script. ( NOTICE: the object key contains a space )
                'resolve url': false, // Telling Stylus to generate url("bar/baz.png") in the compiled CSS files accordingly from @import "bar/bar.styl" and url("baz.png"), which makes relative pathes work in Stylus.
                banner: '' // This string will be prepended to the beginning of the compiled output. It is processed using grunt.template.process, using the default options.
            },
            dist: {},
            server: {
                options: {
                    compress: false,
                    linenos: true
                }
            }
        },
        // compass: {
        //  options: {
        //  sassDir: '<%= config.app %>/styles',
        //  cssDir: '.tmp/styles',
        //  generatedImagesDir: '.tmp/images/generated',
        //  imagesDir: '<%= config.app %>/images',
        //  javascriptsDir: '<%= config.app %>/scripts',
        //  fontsDir: '<%= config.app %>/styles/fonts',
        //  importPath: 'app/bower_components',
        //  httpImagesPath: '/images',
        //  httpGeneratedImagesPath: '/images/generated',
        //  httpFontsPath: '/styles/fonts',
        //  relativeAssets: false
        //  },
        //  dist: {},
        //  server: {
        //      options: {
        //          debugInfo: true
        //      }
        //  }
        // },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/<%= config.scripts %>/{,*/}*.js',
                        '<%= config.dist %>/<%= config.styles %>/{,*/}*.css',
                        '<%= config.dist %>/<%= config.images %>/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= config.dist %>/<%= config.fonts %>/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '.tmp/<%= config.startPage %>',
            options: {
                dest: '<%= config.dist %>'
            }
        },
        usemin: {
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/<%= config.styles %>/*/{,*/}*.css'],
            options: {
                dirs: ['<%= config.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/<%= config.images %>/*',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= config.dist %>/<%= config.images %>/*'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/<%= config.images %>/*',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/<%= config.images %>'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= config.dist %>/<%= config.styles %>/main.css': [
                        '.tmp/<%= config.styles %>/{,*/}*.css',
                        '<%= config.app %>/<%= config.styles %>/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',
                    src: '*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        replace: {
            app: {
                options: {
                    variables: {
                        ember: 'bower_components/ember/ember.js',
                        ember_data: 'bower_components/ember-data-shim/ember-data.js'
                    }
                },
                files: [
                    {
                        src: '<%= config.app %>/<%= config.startPage %>',
                        dest: '.tmp/<%= config.startPage %>'
                    }
                ]
            },
            dist: {
                options: {
                    variables: {
                        ember: 'bower_components/ember/ember.prod.js',
                        ember_data: 'bower_components/ember-data-shim/ember-data.prod.js'
                    }
                },
                files: [
                    {
                        src: '<%= config.app %>/<%= config.startPage %>',
                        dest: '.tmp/<%= config.startPage %>'
                    }
                ]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        '<%= config.fonts %>/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'emberTemplates',
                'stylus:server'
            ],
            test: [
                'emberTemplates',
                'stylus'
            ],
            dist: [
                'emberTemplates',
                'stylus:dist',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        emberTemplates: {
            options: {
                templateName: function (sourceFile) {
                    var templatePath = gruntConfig.app + '/' + gruntConfig.templates + '/';
                    return sourceFile.replace(templatePath, '').replace('-','/');
                }
            },
            dist: {
                files: {
                    'app/dist/<%= config.scripts %>/compiled-templates.js': '<%= config.app %>/<%= config.templates %>/{,*/}*.hbs'
                }
            }
        },
        neuter: {
            app: {
                options: {
                    filepathTransform: function (filepath) {
                        return 'app/package/' + filepath;
                    }
                },
                src: '<%= config.app %>/<%= config.scripts %>/app.js',
                dest: 'app/dist/<%= config.scripts %>/combined-scripts.js'
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'bower_concat',
            'replace:app',
            'concurrent:server',
            'neuter:app',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'bower_concat',
        'replace:app',
        'concurrent:test',
        'connect:test',
        'neuter:app',
        'mocha_phantomjs'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'replace:dist',
        'useminPrepare',
        'concurrent:dist',
        'neuter:app',
//        'concat', // thought this wasnt used, but its called here. ??? weird yoman stuff
        'bower_concat',
        'cssmin',
//        'uglify', // no spec for this either... ???
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
