#!/usr/bin/env node

const { Command } = require("commander");
const { createFolderCommand } = require("./commands");

const program = new Command();

program.version("0.1.0").addCommand(createFolderCommand());

program.parse(process.argv);
