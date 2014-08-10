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
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		concurrent: {
			dev: ['connect', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		}
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');

	// Register tasks
	grunt.registerTask('server', ['sass', 'connect']);
	grunt.registerTask('default', ['concurrent:dev']);
};