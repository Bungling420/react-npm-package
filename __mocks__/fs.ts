"use strict";

const fs: any = jest.createMockFromModule("fs");

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles: object = {};

function __setMockFiles(newMockFiles: object) {
  mockFiles = newMockFiles;
}
function writeFileSync(directoryPath: string, data: string) {
  mockFiles[directoryPath] = data;
}

function existsSync(directoryPath: string) {
  return Object.keys(mockFiles).some((dir) => dir === directoryPath);
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readdirSync(directoryPath: string) {
  return mockFiles[directoryPath] || [];
}

function mkdirSync(directoryPath: string) {
  mockFiles[directoryPath] = "";
}

fs.__setMockFiles = __setMockFiles;
fs.writeFileSync = writeFileSync;
fs.existsSync = existsSync;
fs.mkdirSync = mkdirSync;
fs.readdirSync = readdirSync;

module.exports = fs;
