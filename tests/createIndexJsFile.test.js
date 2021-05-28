const { createIndexJsFile } = require("../functions/createFolder");
const fs = require("fs");
const path = require("path");

describe("createIndexJsFile", () => {
  const folderPath = path.join(process.cwd(), "src", "components", "Test");

  test("Should create index.js file in Test folder", () => {
    fs.mkdirSync(folderPath, { recursive: true });

    const filePath = path.join(
      process.cwd(),
      "src",
      "components",
      `Test`,
      "index.js"
    );

    createIndexJsFile("Test");

    const actual = fs.existsSync(filePath);
    expect(actual).toBeTruthy();

    fs.rmdirSync(path.join(process.cwd(), "src"), { recursive: true });
  });
});
