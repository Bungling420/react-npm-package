import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";

const createCompJsContent = (
  fileName: string,
  isModule: boolean,
  isScss: boolean
) => {
  let styleLine = `import "./${fileName}.css";`;

  if (isModule) {
    styleLine = `import styles from "./${fileName}.module.css";`;
  }

  if (!isModule && isScss) {
    styleLine = `import "./${fileName}.scss";`;
  }
  return `import React from "react";

//components

//styles
${styleLine}

const ${fileName} = (props) => {
  return <div></div>;
};

export default ${fileName};
`;
};

const createCompJsFile = (
  fileName: string,
  isModule: boolean,
  isScss: boolean
) => {
  const compJsData = createCompJsContent(fileName, isModule, isScss);

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

export { createCompJsFile, createCompJsContent };
