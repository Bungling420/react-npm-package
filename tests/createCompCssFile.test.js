const { createCompCssFile } = require("../functions/createFolder");
const fs = require("fs");
const path = require("path");

describe("createCompCssFile", () => {
  const folderPath = path.join(process.cwd(), "src", "components", "Test");

  test("Should create Test.css file in Test folder", () => {
    fs.mkdirSync(folderPath, { recursive: true });

    const filePath = path.join(
      process.cwd(),
      "src",
      "components",
      `Test`,
      "Test.css"
    );

    createCompCssFile("Test");

    const actual = fs.existsSync(filePath);
    expect(actual).toBeTruthy();

    fs.rmdirSync(path.join(process.cwd(), "src"), { recursive: true });
  });
});
