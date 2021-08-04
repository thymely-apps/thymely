'use strict';

const RepositoryTests = {

  Factories: function() {
    QUnit.test(
        'Repository class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = 'TEST-KEY';
          const actual = new Repository(expected).STORAGE_KEY;

          TestLib.Value.isEqual(assert, expected, actual);
        });
  },

  Properties: function() {
    QUnit.test(
        'Repository storage key ' +
        'should be a public property ' +
        'when a class instance is available.', (assert) => {
          const expected = 'TEST-KEY';
          const actual = new Repository(expected).STORAGE_KEY;

          TestLib.Value.isEqual(assert, expected, actual);
        });
  },

  Run: function() {
    RepositoryTests.Factories();
    RepositoryTests.Properties();
  },
};