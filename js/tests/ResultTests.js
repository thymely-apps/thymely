'use strict';

const ResultTests = {

  Cleanup: function(){
  },

  Factories: function() {
    QUnit.test(
        'Result class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = [
            new Activity(
                '_ title',
                '_ shortDescription',
                '_ longDescription',
                '_ imageUrl',
                '_ franchise',
                '_ thrillLevel',
                '_ activityLevel'),
            new Activity(
                '__ title',
                '__ shortDescription',
                '__ longDescription',
                '__ imageUrl',
                '__ franchise',
                '__ thrillLevel',
                '__ activityLevel'),
            new Activity(
                '___ title',
                '___ shortDescription',
                '___ longDescription',
                '___ imageUrl',
                '___ franchise',
                '___ thrillLevel',
                '___ activityLevel')];
          const actual = new Result(expected, new Predicate('','')).activities;

          TestLib.Object.hasSamePropertiesAndValues(assert, expected, actual);
        });
  },

  Run: function() {
    ResultTests.Factories();
    ResultTests.Cleanup();
  },
};