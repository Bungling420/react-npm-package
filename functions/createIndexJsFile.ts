import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";

const createIndexJsContent = (fileName: string) => {
  return `import ${fileName} from "./${fileName}";
export default ${fileName};
`;
};

const createIndexJsFile = (fileName: string) => {
  const indexData = createIndexJsContent(fileName);

  logger.info(`Creating index.js file in ${fileName}...`);
  fs.writeFileSync(
    path.join(process.cwd(), "src", "components", `${fileName}`, "index.js"),
    indexData,
    "utf8"
  );
};

export { createIndexJsFile, createIndexJsContent };
