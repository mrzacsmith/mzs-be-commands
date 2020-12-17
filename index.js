#!/usr/bin/env node
const shell = require('shelljs')
require('colors')

const commands = [
  'git init',
  'npx gitignore node',
  'touch index.js .env',
  'npm init -y',
  'npm i -D nodemon --save',
  'npm i express helmet cors colors morgan mongoose dotenv --save',
  'mkdir utils api auth routes models',
  'touch utils/db.js api/server.js',
]

const runCommands = async () => {
  for (command of commands) {
    await shell.exec(command)
    await console.log(command.green)
  }
  console.log('\n\tComplete'.america)
}

runCommands()
