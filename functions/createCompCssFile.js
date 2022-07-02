const fs = require("fs");
const { logger } = require("../util");
const path = require("path");

const createCompCssFile = (fileName) => {
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

module.exports = {
  createCompCssFile,
};
