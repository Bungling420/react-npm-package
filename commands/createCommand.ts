import { Command } from "commander";
import { createFolder } from "../functions/createFolder";

export const createCommand = () => {
  const create = new Command("create");
  create
    .argument(
      "<fileName>",
      "Name of the component, use camelCase for convention."
    )
    .option("-m, --module", "Use css module styling files")
    .option("-s, --scss", "Use Scss for styling files")
    .description(
      "Creates a folder in /src/components with the filename and creates default component files."
    )
    .action(createFolder);

  return create;
};
