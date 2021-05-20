const fs = require("fs");
const path = require("path");
const { logger } = require("../util");

const createFolder = (fileName) => {
  const filePath = path.join(process.cwd(), "src", "components", `${fileName}`);
  const srcFilePath = path.join(process.cwd(), "src");
  const componentsFilePath = path.join(process.cwd(), "src", "components");

  if (fs.existsSync(filePath)) {
    return logger.error("File already exists!");
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

const createIndexJsFile = (fileName) => {
  const indexData = createIndexJsContent(fileName);

  logger.info(`Creating index.js file in ${fileName}...`);
  fs.writeFile(
    path.join(process.cwd(), "src", "components", `${fileName}`, "index.js"),
    indexData,
    "utf8",
    (err) => err && logger.error(err)
  );
};

const createCompJsFile = (fileName) => {
  const compJsData = createCompJsContent(fileName);

  logger.info(`Creating ${fileName}.js file in ${fileName}...`);
  fs.writeFile(
    path.join(
      process.cwd(),
      "src",
      "components",
      `${fileName}`,
      `${fileName}.js`
    ),
    compJsData,
    "utf8",
    (err) => err && logger.error(err)
  );
};

const createCompCssFile = (fileName) => {
  const compCssData = ``;

  logger.info(`Creating ${fileName}.css file in ${fileName}...`);
  fs.writeFile(
    path.join(
      process.cwd(),
      "src",
      "components",
      `${fileName}`,
      `${fileName}.css`
    ),
    compCssData,
    "utf8",
    (err) => err && logger.error(err)
  );
};

const createIndexJsContent = (fileName) => {
  return `import ${fileName} from "./${fileName}";
export default ${fileName};
`;
};

const createCompJsContent = (fileName) => {
  return `import React from "react";

//components

//styles
import "./${fileName}.css";

const ${fileName} = (props) => {
  return <div></div>;
};

export default ${fileName};
`;
};

module.exports = {
  createFolder,
  createIndexJsContent,
  createCompJsContent,
};
