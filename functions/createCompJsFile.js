const fs = require("fs");
const { logger } = require("../util");
const path = require("path");

const createCompJsFile = (fileName) => {
  const compJsData = createCompJsContent(fileName);

  logger.info(`Creating ${fileName}.js file in ${fileName}...`);
  fs.writeFileSync(
    path.join(
      process.cwd(),
      "src",
      "components",
      `${fileName}`,
      `${fileName}.js`
    ),
    compJsData,
    "utf8"
  );
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
  createCompJsFile,
  createCompJsContent,
};
