#!/usr/bin/env node

const { program } = require('commander');


program.addCommand(require('./commands/init'));
program.addCommand(require('./commands/build'));
program.addCommand(require('./commands/test'));
program.addCommand(require('./commands/run'));

program.version(require('./../../package.json').version);

program.parse(process.argv);
