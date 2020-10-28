module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/__tests__/**/*spec.[jt]s?(x)']
}