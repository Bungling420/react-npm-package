const fs = require("fs");
const path = require("path");

const genFile = (fileName) => {
  const filePath = path.join(__dirname, "src", "components", `${fileName}`);
  console.log(filePath);
  if (fs.existsSync(filePath)) {
    return "File already exists!";
  }
  const indexData = createIndexJs(fileName);
  console.log(indexData);
  fs.writeFile(
    path.join(__dirname, "src", "components", `${fileName}`, "index.js"),
    indexData,
    (err) => {
      if (err) {
        console.log(err);
        return JSON.stringify(err);
      }
      const compJsData = createCompJs(fileName);
      console.log(compJsData);
      const compCssData = ``;
      fs.writeFileSync(
        path.join(
          __dirname,
          "src",
          "components",
          `${fileName}`,
          `${fileName}.js`
        ),
        compJsData
      );
      fs.writeFileSync(
        path.join(
          __dirname,
          "src",
          "components",
          `${fileName}`,
          `${fileName}.css`
        ),
        compCssData
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
