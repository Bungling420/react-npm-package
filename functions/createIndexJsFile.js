const fs = require("fs");
const { logger } = require("../util");
const path = require("path");

const createIndexJsFile = (fileName) => {
  const indexData = createIndexJsContent(fileName);

  logger.info(`Creating index.js file in ${fileName}...`);
  fs.writeFileSync(
    path.join(process.cwd(), "src", "components", `${fileName}`, "index.js"),
    indexData,
    "utf8"
  );
};

const createIndexJsContent = (fileName) => {
  return `import ${fileName} from "./${fileName}";
export default ${fileName};
`;
};

module.exports = {
  createIndexJsFile,
  createIndexJsContent,
};
