#!/usr/bin/env node
var co = require('co');
var coPrompt = require('co-prompt');
var commander = require('commander');
var chalk = require('chalk');

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
			process.exit(0);
		});
	})
	.parse(process.argv);
