module.exports = function (grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		port: grunt.option('port') || 4000,
		connect: {
			server: {
				options: {
					keepalive: true,
					port: '4000',
					base: './',
					hostname: '*'
				}
			}
		}
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Register tasks
	grunt.registerTask('server', ['connect']);
};