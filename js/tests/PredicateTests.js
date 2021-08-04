'use strict';

const PredicateTests = {

  Factories: function() {
    QUnit.test(
        'Predicate domain entity\'s constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = {
            franchise: 'Franchise',
            thrillLevel: 'Thrill Level',
            activityLevel: 'Activity Level',
          };
          const actual = new Predicate(
              expected.franchise,
              expected.thrillLevel,
              expected.activityLevel,
          );

          TestLib.Object.hasSamePropertiesAndValues(assert, expected, actual);
        });
  },

  Run: function() {
    PredicateTests.Factories();
  },
};