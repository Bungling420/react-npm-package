import { Command } from "commander";
import { createFolder } from "../functions/createFolder";

export const createCommand = () => {
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
