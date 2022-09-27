import type { Config } from "jest";
// Sync object
const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  maxWorkers: 1,
};
export default config;
