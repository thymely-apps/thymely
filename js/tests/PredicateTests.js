'use strict';

const PredicateTests = {

  Factories: function() {
    QUnit.test(
        'Predicate domain entity\'s constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = {
            location: 'LOCATION',
            thrillLevel: 'Thrill Level',
          };
          const actual = new Predicate(
              expected.location,
              expected.thrillLevel);

          TestLib.Object.hasSamePropertiesAndValues(assert, expected, actual);
        });
  },

  Run: function() {
    PredicateTests.Factories();
  },
};