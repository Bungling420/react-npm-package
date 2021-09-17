#!/usr/bin/env node

const { Command } = require("commander");
const { createCommand } = require("./commands");

const rcfsg = new Command();

rcfsg.version("0.1.0").addCommand(createCommand());

rcfsg.parse(process.argv);
