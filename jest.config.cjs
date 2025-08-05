module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  // 👇 Asegúrate de permitir que axios sea transformado
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
