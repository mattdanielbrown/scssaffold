# scssaffold [![Build Status](https://travis-ci.com/mattdanielbrown/scssaffold.svg?branch=master)](https://travis-ci.com/mattdanielbrown/scssaffold)

> Quick, simple SCSS stylesheet, partials, and directory creation and scaffolding.


## Install

```
$ npm install scssaffold
```


## Usage

```js
const scssaffold = require('scssaffold');

scssaffold('unicorns');
//=> 'unicorns & rainbows'
```


## API

### scssaffold(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global scssaffold
```

```
$ scssaffold --help

  Usage
    scssaffold [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ scssaffold
    unicorns & rainbows
    $ scssaffold ponies
    ponies & rainbows
```
