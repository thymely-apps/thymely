'use strict';

const ResultManagerTests = {

  Constants: {
    TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_IMMUTABLE_CTOR: 'TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_IMMUTABLE_CTOR',
    TEST_RESULT_MANAGER_RESULT_REPOSITORY_IMMUTABLE_CTOR: 'TEST_RESULT_MANAGER_RESULT_REPOSITORY_IMMUTABLE_CTOR',
    TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_GENERATE: 'TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_GENERATE',
    TEST_RESULT_MANAGER_RESULT_REPOSITORY_GENERATE: 'TEST_RESULT_MANAGER_RESULT_REPOSITORY_GENERATE',
  },

  Factories: function() {
    QUnit.test(
        'ResultManager class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const activityRepository = new ActivityRepository(
              this.Constants.TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_IMMUTABLE_CTOR);
          const resultRepository = new ResultRepository(
              this.Constants.TEST_RESULT_MANAGER_RESULT_REPOSITORY_IMMUTABLE_CTOR);

          const actual = new ResultManager(
              activityRepository,
              resultRepository);

          TestLib.Value.isEqual(
              assert,
              activityRepository.activities._dataBacking.length,
              actual.activityRepository.activities._dataBacking.length);
          TestLib.Value.isEqual(
              assert,
              resultRepository.results._dataBacking.length,
              actual.resultRepository.results._dataBacking.length);

          localStorage.removeItem(
              this.Constants.TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_IMMUTABLE_CTOR);
          localStorage.removeItem(
              this.Constants.TEST_RESULT_MANAGER_RESULT_REPOSITORY_IMMUTABLE_CTOR);
        });
  },

  Methods: function() {
    QUnit.test(
        'ResultManager.generateResults ' +
        'should return a default result set ' +
        'when there are no results.', (assert) => {

          const activityRepository = new ActivityRepository(
              this.Constants.TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_GENERATE);
          const resultRepository = new ResultRepository(
              this.Constants.TEST_RESULT_MANAGER_RESULT_REPOSITORY_GENERATE);

          const resultManager = new ResultManager(
              activityRepository,
              resultRepository);
          const predicate = new Predicate(
              '!unmatched',
              'unmatched');

          const expectedLength = 3;
          /** @type {Activity[]} */
          const expectedResults = activityRepository.activities.get(
              new Predicate('404', '404'));
          const expectedResultA = expectedResults[0];
          const expectedResultB = expectedResults[1];
          const expectedResultC = expectedResults[2];

          /** @type {Result} */
          resultManager.generateResults(predicate);
          const actualResults = resultManager.resultRepository.results.get()[0].activities;
          const actualLength = actualResults.length;
          const actualResultA = actualResults[0];
          const actualResultB = actualResults[1];
          const actualResultC = actualResults[2];

          TestLib.Value.isEqual(
              assert,
              expectedResultA.title,
              'OOOPS...Something went wrong.');
          TestLib.Value.isEqual(
              assert,
              expectedResultB.title,
              'OOOPS...Something went wrong.');
          TestLib.Value.isEqual(
              assert,
              expectedResultC.title,
              'OOOPS...Something went wrong.');
          TestLib.Value.isEqual(assert, expectedLength, actualLength);

          localStorage.removeItem(
              this.Constants.TEST_RESULT_MANAGER_ACTIVITY_REPOSITORY_GENERATE);
          localStorage.removeItem(
              this.Constants.TEST_RESULT_MANAGER_RESULT_REPOSITORY_GENERATE);
        });
  },

  Run: function() {
    ResultManagerTests.Factories();
    ResultManagerTests.Methods();
  },
};