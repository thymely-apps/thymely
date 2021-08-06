'use strict';

const RepositoryTests = {

  Factories: function() {
    QUnit.test(
        'Repository class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = 'TEST_REPOSITORY_IMMUTABLE_CTOR';
          const actual = new Repository(expected).STORAGE_KEY;

          TestLib.Value.isEqual(assert, expected, actual);
        });
  },

  Properties: function() {
    QUnit.test(
        'Repository storage key ' +
        'should be a public property ' +
        'when a class instance is available.', (assert) => {
          const expected = 'TEST_REPO_KEY_IS_PUBLIC';
          const actual = new Repository(expected).STORAGE_KEY;

          TestLib.Value.isEqual(assert, expected, actual);
        });
  },

  Methods: function() {
    QUnit.test(
        'Repository.get ' +
        'should return empty array ' +
        'when repo is empty.', (assert) => {
          const inputs = {
            repoKey: 'TEST_REPOSITORY_EMPTY_GET',
            predicate: new Predicate('FRANCHISE',
                CommonLib.Constants.THRILL_LEVEL_MEDIUM),
          };
          const expected = [];
          const actual =
              new Repository(inputs.repoKey).get(inputs.predicate);

          TestLib.Value.isEqual(assert, expected.length, actual.size);
        });

    QUnit.test(
        'Repository.get ' +
        'should return a match ' +
        'when repo is not empty ' +
        'and predicate matches a repo entity.', (assert) => {
          const repoKey = 'TEST_REPOSITORY_NONEMPTY_GET';
          const predicate = new Predicate('LOCATION',
              CommonLib.Constants.THRILL_LEVEL_LOW);
          const activities = [
            new Activity(
                '!unmatched',
                '!short description',
                '!long description',
                '!image url',
                'LOCATION',
                CommonLib.Constants.THRILL_LEVEL_MEDIUM),
            new Activity(
                'matched',
                '_ short description',
                '_ long description',
                '_ image url',
                'LOCATION',
                CommonLib.Constants.THRILL_LEVEL_LOW),
          ];

          const repo = new Repository(repoKey);
          repo.add(activities[0]);
          repo.add(activities[1]);

          const expected = 1;
          const actual =
              repo.get(predicate).size;

          TestLib.Value.isEqual(assert, expected, actual);
        });

    QUnit.test(
        'Repository.load ' +
        'should load persistence data into the repository object ' +
        'when persistence data exists.', (assert) => {
          const repoKey = 'TEST_REPOSITORY_LOAD';
          const predicate = new Predicate('LOCATION',
              CommonLib.Constants.THRILL_LEVEL_MEDIUM);
          const activities = [
            new Activity(
                'unmatched',
                'short description',
                'long description',
                'image url',
                'LOCATION',
                CommonLib.Constants.THRILL_LEVEL_MEDIUM),
            new Activity(
                'matched',
                '_ short description',
                '_ long description',
                '_ image url',
                'LOCATION',
                CommonLib.Constants.THRILL_LEVEL_LOW),
          ];

          const repo = new Repository(repoKey);
          repo.add(activities[0]);
          repo.add(activities[1]);

          const expected = 1;
          const actual =
              repo.get(predicate).size;

          TestLib.Value.isEqual(assert, expected, actual);
        });
  },

  Run: function() {
    RepositoryTests.Factories();
    RepositoryTests.Properties();
    RepositoryTests.Methods();
  },
};