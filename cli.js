#!/usr/bin/env node
'use strict';
const meow = require('meow');
const scssaffold = require('.');

const cli = meow(`
	Usage
	  $ scssaffold [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ scssaffold
	  unicorns & rainbows
	  $ scssaffold ponies
	  ponies & rainbows
`);

console.log(scssaffold(cli.input[0] || 'unicorns'));
