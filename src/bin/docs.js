#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');

const litdoc = require('litdoc');

const commands = require('../commands');


const rollUpCli = () => {
  const docs = _.map(commands, (command, name) => {
    return `\
  ## \`${name}\`

  ${command.help}

  \`${command.usage || command.example}\`

  ${command.docs}
  `.trim();
  }).join('\n\n\n');

  fs.writeFileSync('./docs/cli.md', docs);
};

rollUpCli();

litdoc({
  title: 'Zapier Platform CLI',
  markdownPath: path.join(__dirname, '../../docs/index.md'),
  outputPath: path.join(__dirname, '../../docs/index.html')
});

litdoc({
  title: 'Zapier Platform CLI',
  markdownPath: path.join(__dirname, '../../docs/cli.md'),
  outputPath: path.join(__dirname, '../../docs/cli.html')
});
