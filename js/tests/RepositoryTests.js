'use strict';

const RepositoryTests = {

  Constants: {
    TEST_REPOSITORY_IMMUTABLE_CTOR: 'TEST_REPOSITORY_IMMUTABLE_CTOR',
    TEST_REPO_KEY_IS_PUBLIC: 'TEST_REPO_KEY_IS_PUBLIC',
    TEST_REPOSITORY_EMPTY_GET: 'TEST_REPOSITORY_EMPTY_GET',
    TEST_REPOSITORY_NONEMPTY_GET: 'TEST_REPOSITORY_NONEMPTY_GET',
    TEST_REPOSITORY_LOAD: 'TEST_REPOSITORY_LOAD',
  },

  Factories: function() {
    QUnit.test(
        'Repository class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = this.Constants.TEST_REPOSITORY_IMMUTABLE_CTOR;
          const actual = new Repository(expected).STORAGE_KEY;

          TestLib.Value.isEqual(assert, expected, actual);

          localStorage.removeItem(
              this.Constants.TEST_REPOSITORY_IMMUTABLE_CTOR);
        });
  },

  Properties: function() {
    QUnit.test(
        'Repository storage key ' +
        'should be a public property ' +
        'when a class instance is available.', (assert) => {
          const expected = this.Constants.TEST_REPO_KEY_IS_PUBLIC;
          const actual = new Repository(expected).STORAGE_KEY;

          TestLib.Value.isEqual(assert, expected, actual);

          localStorage.removeItem(
              this.Constants.TEST_REPO_KEY_IS_PUBLIC);
        });
  },

  Methods: function() {
    QUnit.test(
        'Repository.get ' +
        'should return empty array ' +
        'when repo is empty.', (assert) => {
          const repoKey = this.Constants.TEST_REPOSITORY_EMPTY_GET;
          const predicate = new Predicate('FRANCHISE',
              CommonLib.Constants.THRILL_LEVEL_MEDIUM);

          const expected = [];
          const repo = new Repository(repoKey);
          const actual = repo.get(predicate);

          TestLib.Value.isEqual(assert, expected.length, actual.length);

          localStorage.removeItem(
              this.Constants.TEST_REPOSITORY_EMPTY_GET);
        });

    QUnit.test(
        'Repository.get ' +
        'should return a match ' +
        'when repo is not empty ' +
        'and predicate matches a repo entity.', (assert) => {
          const repoKey = this.Constants.TEST_REPOSITORY_NONEMPTY_GET;
          const predicate = new Predicate('LOCATION',
              CommonLib.Constants.THRILL_LEVEL_LOW);
          const activityA = new Activity(
              '!unmatched',
              '!short description',
              '!long description',
              '!image url',
              'LOCATION',
              CommonLib.Constants.THRILL_LEVEL_MEDIUM);
          const activityB = new Activity(
              'matched',
              '_ short description',
              '_ long description',
              '_ image url',
              'LOCATION',
              CommonLib.Constants.THRILL_LEVEL_LOW);

          const repo = new Repository(repoKey);
          repo.add(activityA);
          repo.add(activityB);

          const expectedLength = 1;
          const actualLength = repo.get(predicate).length;

          TestLib.Value.isEqual(assert, expectedLength, actualLength);

          localStorage.removeItem(
              this.Constants.TEST_REPOSITORY_NONEMPTY_GET);
        });

    QUnit.test(
        'Repository.load ' +
        'should load persistence data into the repository object ' +
        'when persistence data exists.', (assert) => {
          const repoKey = this.Constants.TEST_REPOSITORY_LOAD;
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
              repo.get(predicate).length;

          TestLib.Value.isEqual(assert, expected, actual);

          localStorage.removeItem(
              this.Constants.TEST_REPOSITORY_LOAD);
        });
  },

  Run: function() {
    RepositoryTests.Factories();
    RepositoryTests.Properties();
    RepositoryTests.Methods();
  },
};