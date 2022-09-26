jest.mock("fs");
jest.mock("../functions/createIndexJsFile");
jest.mock("../functions/createCompJsFile");
jest.mock("../functions/createCompCssFile");
jest.mock("../util/logger");

import { createFolder } from "../functions/createFolder";
import * as fs from "fs";
import * as path from "path";

describe("createFolder", () => {
  test("Should create src/component/Test folders.", () => {
    const MOCK_FILE_INFO = {};
    require("fs").__setMockFiles(MOCK_FILE_INFO);

    createFolder("Test");

    const folderPath = path.join(process.cwd(), "src", "components", "Test");
    const actual = fs.existsSync(folderPath);
    expect(actual).toBeTruthy();
  });

  test("Should throw an error when file exists.", () => {
    const MOCK_FILE_INFO = {
      "/src/compoents/Test": "",
    };
    require("fs").__setMockFiles(MOCK_FILE_INFO);

    const folderPath = path.join(process.cwd(), "src", "components", "Test");
    fs.mkdirSync(folderPath);

    expect(() => createFolder("Test")).toThrow();
  });
});
