#!/usr/bin/env node

const { Command } = require("commander");
const { createFileCommand } = require("./commands");

const program = new Command();

program.version("0.1.0").addCommand(createFileCommand());

program.parse(process.argv);
