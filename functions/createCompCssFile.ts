import * as fs from "fs";
import * as path from "path";
import { logger } from "../util";

const createCompCssFile = (
  fileName: string,
  isModule: boolean,
  isScss: boolean
) => {
  const compCssData = ``;
  let suffix = ".css";

  if (isModule) {
    suffix = ".module.css";
  }

  if (!isModule && isScss) {
    suffix = ".scss";
  }

  logger.info(`Creating ${fileName}${suffix} file in ${fileName}...`);
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
