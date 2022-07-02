const { createCompJsContent } = require("../functions/createCompJsFile");

describe("createCompJsContent", () => {
  test("Should return the content for Test.js file with the name Test", () => {
    const content = createCompJsContent("Test");
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
});
