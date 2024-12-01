module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      // diagnostics: false,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
