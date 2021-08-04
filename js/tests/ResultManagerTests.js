'use strict';

const ResultManagerTests = {

  Factories: function() {
    QUnit.test(
        'ResultManager class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = {
            activityRepository: new ActivityRepository('TEST-KEY'),
            resultRepository: new ResultRepository('TEST-KEY'),
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

  Run: function() {
    ResultManagerTests.Factories();
  },
};