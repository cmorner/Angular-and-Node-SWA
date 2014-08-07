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
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		}
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Register tasks
	grunt.registerTask('server', ['sass', 'connect']);
};