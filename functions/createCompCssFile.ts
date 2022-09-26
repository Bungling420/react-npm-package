import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";

const createCompCssFile = (fileName: string) => {
  const compCssData = ``;

  logger.info(`Creating ${fileName}.css file in ${fileName}...`);
  fs.writeFileSync(
    path.join(
      process.cwd(),
      "src",
      "components",
      `${fileName}`,
      `${fileName}.css`
    ),
    compCssData,
    "utf8"
  );
};

export { createCompCssFile };
