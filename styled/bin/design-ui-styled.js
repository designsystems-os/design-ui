#!/usr/bin/env node
const project = require('../lib/index.js');
const args = process.argv.splice(process.execArgv.length + 2);

typeof args[0] === 'string'
  ? project.create(args[0])
  : console.log('\n💥\nProject title must be a string');
