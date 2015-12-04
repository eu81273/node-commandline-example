#!/usr/bin/env node
var commander = require('commander');

commander
	.arguments('<file>')
	.option('-u, --username <username>', '사용자')
	.option('-p, --password <password>', '패스워드')
	.action(function (file) {
		console.log('사용자는 %s\n패스워드는 %s\n파일은 %s', options.username, options.password, file);
	})
	.parse(process.argv);
