'use strict';
  module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-wiredep');

      grunt.initConfig({
        wiredep: {
          target: {
            src: 'index.html'
          }
        }
      });
};
