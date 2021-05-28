const { createIndexJsContent } = require("../functions/createFolder");

describe("createIndexJsContent", () => {
  test("Should return the content for index.js file with the name Test", () => {
    const content = createIndexJsContent("Test");
    const shouldBe = `import Test from "./Test";
export default Test;
`;
    expect(content).toBe(shouldBe);
  });
});
