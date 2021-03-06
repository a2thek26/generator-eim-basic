'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir      : './src/vendor',
          layout         : 'byComponent',
          install        : true,
          verbose        : false,
          copy           : false,
          cleanTargetDir : false,
          cleanBowerDir  : false
        }
      }
    },
    bowercopy: {
      fonts: {
        options: {
          destPrefix: '<%= assetsDirectory %>/fonts'
        },
        files: { 
          'fontawesome-webfont.eot'  : 'src/vendor/font-awesome/fonts/fontawesome-webfont.eot',
          'fontawesome-webfont.svg'  : 'src/vendor/font-awesome/fonts/fontawesome-webfont.svg',
          'fontawesome-webfont.ttf'  : 'src/vendor/font-awesome/fonts/fontawesome-webfont.ttf',
          'fontawesome-webfont.woff' : 'src/vendor/font-awesome/fonts/fontawesome-webfont.woff',
          'FontAwesome.otf'          : 'src/vendor/font-awesome/fonts/FontAwesome.otf'
        }
      } 
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        files: {
          '<%= assetsDirectory %>/js/modernizr.js': ['src/vendor/modernizr/modernizr.js'],

          '<%= assetsDirectory %>/js/respond.js': ['src/vendor/respond/dest/respond.src.js'],

          '<%= assetsDirectory %>/js/app.js': [
            'src/vendor/jquery/dist/jquery.js',
            <% if(loadBootstrap) { %>
            'src/vendor/bootstrap/js/transition.js',
            'src/vendor/bootstrap/js/alert.js',
            'src/vendor/bootstrap/js/button.js',
            'src/vendor/bootstrap/js/carousel.js',
            'src/vendor/bootstrap/js/collapse.js',
            'src/vendor/bootstrap/js/dropdown.js',
            'src/vendor/bootstrap/js/modal.js',
            'src/vendor/bootstrap/js/tooltip.js',
            'src/vendor/bootstrap/js/popover.js',
            'src/vendor/bootstrap/js/scrollspy.js',
            'src/vendor/bootstrap/js/tab.js',
            'src/vendor/bootstrap/js/typeahead.js',
            'src/vendor/bootstrap/js/affix.js',
            <% } %>
            'src/js/app.js'
          ]
        }

      }
    },
    uglify: {
      dist: {
        files: {
          '<%= assetsDirectory %>/js/modernizr.js': ['<%= assetsDirectory %>/js/modernizr.js'],
          '<%= assetsDirectory %>/js/respond.js': ['<%= assetsDirectory %>/js/respond.js'],
          '<%= assetsDirectory %>/js/app.js': ['<%= assetsDirectory %>/js/app.js']
        } 
      }
    },
    less: {
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "<%= assetsDirectory %>/css/app.css": [ "src/less/app.less"],
        }
      }
    },
    watch: {
      files: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.less', 'src/**/*.css'],
      tasks: ['concat', 'less'],
      options: { nospawn: true }
    }
  });

  // Load libs
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register the tasks
  grunt.registerTask('default', ['concat', 'less']);
  grunt.registerTask('deploy', ['bower:install', 'concat', 'uglify', 'less']);
  grunt.registerTask('copy', ['bowercopy:fonts']);
  grunt.registerTask('build', ['bower:install']);
};
