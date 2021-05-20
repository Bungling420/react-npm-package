const { Command } = require("commander");
const { createFolder } = require("../functions/createFolder");

const createFolderCommand = () => {
  const gen = new Command("create");
  gen
    .arguments("<fileName>")
    .description(
      "Creates a folder in /src/components with the filename and creates default component files.",
      { fileName: "Name of the component, use camelCase for convention." }
    )
    .action(createFolder);

  return gen;
};

module.exports = createFolderCommand;
