jest.mock("../util/logger");

import { createCompJsContent } from "../functions/createCompJsFile";

describe("createCompJsContent", () => {
  test("Should return the content for Test.js file with the name Test", () => {
    const content = createCompJsContent("Test", false);
    const shouldBe = `import React from "react";

//components

//styles
import "./Test.css";

const Test = (props) => {
  return <div></div>;
};

export default Test;
`;
    expect(content).toBe(shouldBe);
  });

  test("Should return the content for Test.js file with the name Test", () => {
    const content = createCompJsContent("Test", true);
    const shouldBe = `import React from "react";

//components

//styles
import styles from "./Test.module.css";

const Test = (props) => {
  return <div></div>;
};

export default Test;
`;
    expect(content).toBe(shouldBe);
  });
});
