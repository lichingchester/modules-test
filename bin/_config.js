'use strict';

const chalk = require('chalk');

const env_develop = process.env.NODE_ENV === 'development';

const config = {
  name: "temp",

  command: {
    output: env_develop ? './sample' : '.',
    exec: env_develop ? 'cd sample && npm init -y' : 'npm init -y',
    packageJsonOutput: env_develop ? './sample/package.json' : './package.json',
    install: env_develop ? 'cd sample && npm install @lichingchester/test' : 'npm install @lichingchester/test',
  },

  message: {
    initSuccess: chalk`\nNow you can run:
    {cyan npm start}      to start your new site, or
    {cyan npm run build}  to build it into the 'public' folder.\n`
  }
}

module.exports = config;