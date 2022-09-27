jest.mock("../util/logger");

import { createIndexJsContent } from "../functions/createIndexJsFile";

describe("createIndexJsContent", () => {
  test("Should return the content for index.js file with the name Test", () => {
    const content = createIndexJsContent("Test");
    const shouldBe = `import Test from "./Test";
export default Test;
`;
    expect(content).toBe(shouldBe);
  });
});
