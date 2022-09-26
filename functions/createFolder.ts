import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";
import { createIndexJsFile } from "./createIndexJsFile";
import { createCompJsFile } from "./createCompJsFile";
import { createCompCssFile } from "./createCompCssFile";

const createFolder = (fileName: string) => {
  const filePath = path.join(process.cwd(), "src", "components", `${fileName}`);
  const srcFilePath = path.join(process.cwd(), "src");
  const componentsFilePath = path.join(process.cwd(), "src", "components");

  if (fs.existsSync(filePath)) {
    const message = "File already exists!";
    logger.error("File already exists!");
    throw new Error(message);
  }

  if (!fs.existsSync(srcFilePath)) {
    logger.info(`Creating src folder...`);
    fs.mkdirSync(srcFilePath);
  }

  if (!fs.existsSync(componentsFilePath)) {
    logger.info(`Creating components folder in src...`);
    fs.mkdirSync(componentsFilePath);
  }

  logger.info(`Creating ${fileName} folder in components...`);
  fs.mkdirSync(filePath);

  createIndexJsFile(fileName);
  createCompJsFile(fileName);
  createCompCssFile(fileName);
};

export { createFolder };
