const { Command } = require("commander");
const { createFile } = require("../functions/createFile");

const createFileCommand = () => {
  const gen = new Command("create");
  gen
    .arguments("<fileName>")
    .description(
      "Creates a folder in /src/components with the filename and creates default component files.",
      { fileName: "Name of the component, use camelCase for convention." }
    )
    .action(createFile);

  return gen;
};

module.exports = createFileCommand;
