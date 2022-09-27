import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";

const createCompJsContent = (fileName: string, isModule: boolean) => {
  const styleLine = isModule
    ? `import styles from "./${fileName}.module.css";`
    : `import "./${fileName}.css";`;
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

const createCompJsFile = (fileName: string, isModule: boolean) => {
  const compJsData = createCompJsContent(fileName, isModule);

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
