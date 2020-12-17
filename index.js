#!/usr/bin/env node
const shell = require('shelljs')
require('colors')

const commands = [
  'git init',
  'npx gitignore node',
  'touch index.js',
  'npm init -y',
  'mkdir utils',
  'npm i -D nodemon --save',
  'npm i express helmet cors colors --save',
]

const runCommands = async () => {
  for (i of commands) {
    await shell.exec(i)
    await console.log(i.green)
  }
}

runCommands()
