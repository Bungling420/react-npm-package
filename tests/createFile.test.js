const {
  createIndexJsContent,
  createCompJsContent,
} = require("../functions/createFolder");

describe("createFolder", () => {
  test("Should return the content for index.js file with the name Test", () => {
    const content = createIndexJsContent("Test");
    const shouldBe = `import Test from "./Test";
export default Test;
`;
    expect(content).toBe(shouldBe);
  });

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
