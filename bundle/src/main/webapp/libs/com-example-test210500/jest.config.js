module.exports = {​​​​​​​​​​​​​​​
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/<your-library-name>',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    'ts-jest': {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  transform: {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ '^.+\\.(ts|js|html)$': 'jest-preset-angular' }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  moduleNameMapper: {​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    "^lodash-es$": "lodash",
    "@bmc-ux/adapt-obsolete": "@bmc-ux/obsolete"
  }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​,
  displayName: '<your-library-name>',
}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​;