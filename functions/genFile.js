const fs = require("fs");
const path = require("path");

const genFile = (fileName) => {
  const filePath = path.join(process.cwd(), "src", "components", `${fileName}`);

  if (fs.existsSync(filePath)) {
    return "File already exists!";
  }

  fs.mkdirSync(path.join(process.cwd(), "src", "components", `${fileName}`));

  const indexData = createIndexJs(fileName);

  fs.writeFile(
    path.join(process.cwd(), "src", "components", `${fileName}`, "index.js"),
    indexData,
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
        return JSON.stringify(err);
      }

      const compJsData = createCompJs(fileName);
      const compCssData = ``;
      fs.writeFile(
        path.join(
          process.cwd(),
          "src",
          "components",
          `${fileName}`,
          `${fileName}.js`
        ),
        compJsData,
        "utf8",
        (err) => err && console.log(err)
      );

      fs.writeFile(
        path.join(
          process.cwd(),
          "src",
          "components",
          `${fileName}`,
          `${fileName}.css`
        ),
        compCssData,
        "utf8",
        (err) => err && console.log(err)
      );
    }
  );
};

const createIndexJs = (fileName) => {
  return `import ${fileName} from './${fileName}';
export default ${fileName}`;
};

const createCompJs = (fileName) => {
  return `import React from 'react';


const ${fileName} = (props) => {
    return (
        <div></div>
    )
}


export default ${fileName};`;
};

module.exports = {
  genFile,
};
