import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";

const createCompJsFile = (fileName: string) => {
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

const createCompJsContent = (fileName: string) => {
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

export { createCompJsFile, createCompJsContent };
