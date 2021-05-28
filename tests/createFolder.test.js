const { createFolder } = require("../functions/createFolder");
const fs = require("fs");
const path = require("path");

describe("createFolder", () => {
  test("Should create src/component/Test folders.", () => {
    createFolder("Test");
    const folderPath = path.join(process.cwd(), "src", "components", "Test");
    const actual = fs.existsSync(folderPath);
    expect(actual).toBeTruthy();
  });

  test("Should throw an error when file exists.", () => {
    const folderPath = path.join(process.cwd(), "src", "components", "Test");
    fs.mkdirSync(folderPath, { recursive: true });
    expect(() => createFolder("Test")).toThrow();
    fs.rmdirSync(folderPath, { recursive: true });
  });
});
