module.exports = {
  name: 'portfolio-mat-dark',
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '.*\\.(js)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@a/(.*)$': '<rootDir>/src/assets/$1',
    '^@c/(.*)$': '<rootDir>/src/components/$1',
    '^@l/(.*)$': '<rootDir>/src/libs/$1',
    '^@p/(.*)$': '<rootDir>/src/plugins/$1',
    '^@r/(.*)$': '<rootDir>/src/router/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@t/(.*)$': '<rootDir>/src/templates/$1',
    '^@v/(.*)$': '<rootDir>/src/views/$1',
    '@state': '<rootDir>/src/plugins/state/index.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!(vuetify)/)'],
  setupFiles: ['./tests/setup.js'],
  prettierPath: '<rootDir>/node_modules/prettier',
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/public/**',
    '!**/tests/**',
    '!**/webpack/**',
    '!**/.vscode/**',
    '!**/.yarn/**',
  ],
};
