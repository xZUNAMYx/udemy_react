module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: ['./jest.setup.js']
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
}

// module.exports = {
//     testEnvironment: "jest-environment-jsdom",
//     setupFiles: ["./jest.setup.js"],
//     moduleNameMapper: {
//       "^animate.css$": "<rootDir>/mocks/animate.css.js",
//     },
//     transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
//   };