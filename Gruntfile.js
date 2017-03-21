module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Clean build directories
        clean: {
            src: ["public/css", "public/js"]
        },
        esnext: {
            options: {
                includeRuntime: true
            },
            dist: {
                src: ['assets/src/components/buttonReact.jsx'],
                dest: 'public/_js/<%= pkg.name %>.js'
            }
        },
        // JS linting
        jshint: {
            // 'build/js/lib/*.js',
            // Only JSHint custom source files, libraries can be hinted too if required
            files: ['gruntfile.js', 'assets/js/src/*.js', 'assets/js/src/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        // JS concatenation
        concat: {
            options: {},
            dist: {
                src: ['assets/js/vendor/*.js', 'assets/js/generated/*.js', 'assets/js/prefix/*.js', 'assets/js/src/*.js', 'assets/js/src/**/*.js', 'assets/js/suffix/*.js', 'assets/js/afterCode/*.js'],
                dest: 'public/js/<%= pkg.name %>.js'
            }
        },
        // JS minification
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        // Compass options
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            },
            dist: {
                options: {
                    environment: 'production',
                    config: 'config.rb'
                }
            }
        },
        template: {
            dist: {
                dest: 'assets/js/generated/template.js',
                src: 'assets/partials',
                namespace: 'tpl'
            }
        },
        // Optimise images

        // Watch command
        watch: {
            files: ['<%= jshint.files %>', 'assets/scss/*.scss', 'assets/scss/defaults/*.scss', 'assets/scss/elements/*.scss', 'assets/scss/components/*.scss', 'assets/scss/partials/*.scss', 'assets/partials/*.html', '!assets/js/generated/*.js'],
            tasks: ['dev']
        }
    });




    grunt.task.registerMultiTask('template', 'Convert Sharepoint partials to JS', function() {
        var namespace = this.data.namespace;
        var str = 'var ' + namespace + ' = ' + namespace + ' || {};\n';
        var filepath = '';

        var _this = this;

        // grunt.log.warn('namespace :: ' + grunt.option('namespace'));

        function htmlString(html) {
            // escape quotation marks and replace whitespace characters (besides a single space)
            var escapedHTML = html.replace(/([\t\n\r\f\v]|\s{2,})/g, "").replace(/"/g, '\\"');
            return '"' + escapedHTML + '"';
        }

        grunt.file.expand({
            filter: 'isFile'
        }, this.data.src + '/**/*.html').forEach(function(path) {
            if (path) {
                var html = grunt.file.read(path);
                var filename = path.replace(_this.data.src, '').replace('/', '.').replace(/\/|-/g, '_').replace('.html', '').toLowerCase();
                str += namespace + filename + ' = ' + htmlString(html) + ';\n';
            }
        });
        grunt.file.write(this.data.dest, str);
    });



    // Load tasks
    grunt.loadNpmTasks('grunt-esnext');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Set 2 basic tasks:

    // - dev for development (no cleaning of directories and uncompressed CSS and JS)
    // - default for production (cleans directories first and replaces with compressed CSS and JS)
    grunt.registerTask('dev', ['template', 'jshint', 'concat', 'compass:dev', 'uglify']);
    grunt.registerTask('default', ['esnext','clean', 'template', 'compass:dist']);
};
