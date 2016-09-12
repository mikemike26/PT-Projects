module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {                              // Task
      dev: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'styles.css': 'styles.scss'        // 'destination': 'source'
        }
      },
      prod: {                            // Target
        options: {                       // Target options
          noCache: true,
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'styles/main.css': 'styles/main.scss'        // 'destination': 'source'
        }
      }
    },

    watch: {
      css: {
        files: ['app/**/*.scss', 'styles.scss'],
        tasks: ['sass:dev']
      }
    }
  });

  // Load required module
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Task definitions
  grunt.registerTask('default', []);


};

