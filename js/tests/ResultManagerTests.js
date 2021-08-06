'use strict';

const ResultManagerTests = {

  Factories: function() {
    QUnit.test(
        'ResultManager class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const activityRepository = new ActivityRepository('TEST_RESULTMANAGER_ACTIVITYREPOSITORY_IMMUTABLE_CTOR');
          const resultRepository = new ResultRepository('TEST_RESULTMANAGER_RESULTREPOSITORY_IMMUTABLE_CTOR');
          const actual = new ResultManager(
              activityRepository,
              resultRepository);

          TestLib.Object.hasSamePropertiesAndValues(
              assert,
              activityRepository,
              actual.activityRepository);
          TestLib.Object.hasSamePropertiesAndValues(
              assert,
              resultRepository,
              actual.resultRepository);
        });
  },

  Methods: function() {
    QUnit.test(
        'ResultManager.generateResults ' +
        'should return a default result set ' +
        'when there are no results.', (assert) => {

          const activityRepository = new ActivityRepository(
              'TEST_RESULTMANAGER_ACTIVITYREPOSITORY_GENERATE');
          const resultRepository = new ResultRepository(
              'TEST_RESULTMANAGER_RESULTREPOSITORY_GENERATE');

          const sut = new ResultManager(
              activityRepository,
              resultRepository);
          const predicate = new Predicate(
              'space-mountain?',
              CommonLib.Constants.THRILL_LEVEL_LOW);

          const expected = 1;
          const actual = sut.generateResults(predicate).activities.size;

          TestLib.Value.isEqual(
              assert,
              expected,
              actual);
          TestLib.Value.isTrue(
              assert,
              typeof actual[0] === typeof Result);
        });
  },

  Run: function() {
    ResultManagerTests.Factories();
    ResultManagerTests.Methods();
  },
};