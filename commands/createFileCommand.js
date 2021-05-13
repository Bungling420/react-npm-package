const { Command } = require("commander");
const { genFile } = require("../functions/genFile");

const createFileCommand = () => {
  const gen = new Command("create");
  gen
    .arguments("<fileName>")
    .description(
      "Creates a folder in /src/components with the filename and creates default component files.",
      { fileName: "Name of the component, use camelCase for convention." }
    )
    .action(genFile);

  return gen;
};

module.exports = createFileCommand;
