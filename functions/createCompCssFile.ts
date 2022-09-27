import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";

const createCompCssFile = (fileName: string, isModule: boolean) => {
  const compCssData = ``;

  const suffix = isModule ? ".module.css" : ".css";

  logger.info(`Creating ${fileName}.css file in ${fileName}...`);
  fs.writeFileSync(
    path.join(
      process.cwd(),
      "src",
      "components",
      `${fileName}`,
      `${fileName}${suffix}`
    ),
    compCssData,
    "utf8"
  );
};

export { createCompCssFile };
