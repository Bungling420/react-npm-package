#!/usr/bin/env node

const { Command } = require("commander");
const { genFile } = require("./functions/genFile");

const program = new Command();

program.command("generate <fileName>").action((fileName) => {
  genFile(fileName);
});

program.parse(process.argv);
