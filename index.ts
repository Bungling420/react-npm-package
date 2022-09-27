#!/usr/bin/env node

import { Command } from "commander";
import { createCommand } from "./commands";

const program = new Command();

program.version("2.0.0").addCommand(createCommand());

program.parse(process.argv);
