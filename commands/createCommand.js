const { Command } = require("commander");
const { createFolder } = require("../functions/createFolder");

const createCommand = () => {
  const create = new Command("create");
  create
    .arguments("<fileName>")
    .description(
      "Creates a folder in /src/components with the filename and creates default component files.",
      { fileName: "Name of the component, use camelCase for convention." }
    )
    .action(createFolder);

  return create;
};

module.exports = createCommand;
