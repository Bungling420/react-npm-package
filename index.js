#!/usr/bin/env node

const { Command } = require("commander");
const { createCommand } = require("./commands");

const create = new Command();

create.version("0.1.0").addCommand(createCommand());

create.parse(process.argv);
