/** @type {import('jest').Config} */
const config = {
    testEnvironment: "node",
    transform: {
      "^.+\.js$": ["js-jest",{}],
    },
  };