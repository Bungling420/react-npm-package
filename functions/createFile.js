const fs = require("fs");
const path = require("path");
const { logger } = require("../util");

const createFile = (fileName) => {
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

  const indexData = createIndexJs(fileName);

  logger.info(`Creating index.js file in ${fileName}...`);
  fs.writeFile(
    path.join(process.cwd(), "src", "components", `${fileName}`, "index.js"),
    indexData,
    "utf8",
    (err) => {
      if (err) {
        return logger.error(err);
      }

      const compJsData = createCompJs(fileName);
      const compCssData = ``;

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
        (err) => err && console.log(err)
      );

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
        (err) => err && console.log(err)
      );
    }
  );
};

const createIndexJs = (fileName) => {
  return `import ${fileName} from "./${fileName}";
export default ${fileName};
`;
};

const createCompJs = (fileName) => {
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
  createFile,
};
