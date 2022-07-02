const fs = require("fs");
const path = require("path");
const { logger } = require("../util");
const { createIndexJsFile } = require("./createIndexJsFile");
const { createCompJsFile } = require("./createCompJsFile");
const { createCompCssFile } = require("./createCompCssFile");

const createFolder = (fileName) => {
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

module.exports = {
  createFolder,
};
