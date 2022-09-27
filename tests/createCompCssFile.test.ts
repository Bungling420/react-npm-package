jest.mock("../util/logger");
jest.mock("fs");

import { createCompCssFile } from "../functions/createCompCssFile";
import * as fs from "fs";
import * as path from "path";

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

    createCompCssFile("Test", false);

    const actual = fs.existsSync(filePath);
    expect(actual).toBeTruthy();

    fs.rmdirSync(path.join(process.cwd(), "src"), { recursive: true });
  });

  test("Should create Test.module.css file in Test folder", () => {
    require("fs").__setMockFiles(MOCK_FILE_INFO);
    const filePath = path.join(
      process.cwd(),
      "src",
      "components",
      `Test`,
      "Test.module.css"
    );

    createCompCssFile("Test", true);

    const actual = fs.existsSync(filePath);
    expect(actual).toBeTruthy();

    fs.rmdirSync(path.join(process.cwd(), "src"), { recursive: true });
  });
});
