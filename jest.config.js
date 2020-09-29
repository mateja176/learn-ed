module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss|svg)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
};
