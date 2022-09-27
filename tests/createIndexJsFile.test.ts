jest.mock("../util/logger");
jest.mock("fs");

import { createIndexJsFile } from "../functions/createIndexJsFile";
import * as fs from "fs";
import * as path from "path";

describe("createIndexJsFile", () => {
  const MOCK_FILE_INFO = {
    "/src/compoents/Test": "",
  };

  require("fs").__setMockFiles(MOCK_FILE_INFO);
  const folderPath = path.join(process.cwd(), "src", "components", "Test");

  test("Should create index.js file in Test folder", () => {
    fs.mkdirSync(folderPath);

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
