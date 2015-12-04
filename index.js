#!/usr/bin/env node
var co = require('co');
var coPrompt = require('co-prompt');
var commander = require('commander');
var chalk = require('chalk');
var ProgressBar = require('progress');

commander
	.arguments('<file>')
	.option('-u, --username <username>', '사용자')
	.option('-p, --password <password>', '패스워드')
	.action(function (file) {
		co(function* () {
			var username = yield coPrompt('username: ');
			var password = yield coPrompt.password('password: ');

			console.log(chalk.green.bold('사용자: ') + username);
			console.log(chalk.blue.bold('패스워드: ') + password);
			console.log(chalk.black.bgWhite.bold('파일: ') + file);

			var bar = new ProgressBar('작업상황 [:bar] :percent :etas', {
				total: 10,
				width: 20,
				complete: '>',
				incomplete: '_'
			});

			var timer = setInterval(function () {
				bar.tick();
				if (bar.complete) {
					console.log(chalk.cyan('\n작업 완료'));
					clearInterval(timer);
					process.exit(0);
				}
			}, 500);
		});
	})
	.parse(process.argv);
