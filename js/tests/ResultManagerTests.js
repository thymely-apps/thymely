'use strict';

const ResultManagerTests = {

  Factories: function() {
    QUnit.test(
        'ResultManager class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = {
            activityRepository: new ActivityRepository('TEST-ACTIVITIES'),
            resultRepository: new ResultRepository('TEST-RESULTS'),
          };
          const actual = new ResultManager(
              expected.activityRepository,
              expected.resultRepository);

          TestLib.Object.hasSamePropertiesAndValues(
              assert,
              expected.activityRepository,
              actual.activityRepository);
          TestLib.Object.hasSamePropertiesAndValues(
              assert,
              expected.resultRepository,
              actual.resultRepository);
        });
  },

  Methods: function() {
    QUnit.test(
        'ResultManager.generateResults ' +
        'should return a default result set ' +
        'when there are no results.', (assert) => {

          const activityRepository = new ActivityRepository(
              'TEST-ACTIVITIES');
          const resultRepository = new ResultRepository(
              'TEST-RESULTS');

          const sut = new ResultManager(
              activityRepository,
              resultRepository);
          const predicate = new Predicate(
              'space-mountain?',
              CommonLib.Constants.THRILL_LEVEL_LOW);

          const expected = 1;
          const actual = sut.generateResults(predicate).activities.length;

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