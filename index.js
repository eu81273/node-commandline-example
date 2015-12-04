#!/usr/bin/env node
var co = require('co');
var coPrompt = require('co-prompt');
var commander = require('commander');

commander
	.arguments('<file>')
	.option('-u, --username <username>', '사용자')
	.option('-p, --password <password>', '패스워드')
	.action(function (file) {
		co(function* () {
			var username = yield coPrompt('username: ');
			var password = yield coPrompt.password('password: ');

			console.log('사용자는 %s\n패스워드는 %s\n파일은 %s', username, password, file);
		});
	})
	.parse(process.argv);
