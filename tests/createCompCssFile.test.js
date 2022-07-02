const { createCompCssFile } = require("../functions/createCompCssFile");
const fs = require("fs");
const path = require("path");

jest.mock("fs");

describe("createCompCssFile", () => {
  const MOCK_FILE_INFO = {
    "/src/components/Test/": "",
  };

  test("Should create Test.css file in Test folder", () => {
    require("fs").__setMockFiles(MOCK_FILE_INFO);
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
