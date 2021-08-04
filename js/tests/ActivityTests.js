'use strict';

const ActivityTests = {

  Factories: function() {
    QUnit.test(
        'Activity domain entity\'s constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = {
            title: 'title',
            shortDescription: 'short',
            longDescription: 'long',
            imageUrl: 'image',
            franchise: 'franchise',
            thrillLevel: 'thrill',
            activityLevel: 'activity',
          };
          const actual = new Activity(
              expected.title,
              expected.shortDescription,
              expected.longDescription,
              expected.imageUrl,
              expected.franchise,
              expected.thrillLevel,
              expected.activityLevel);

          TestLib.Object.hasSamePropertiesAndValues(assert, expected, actual);
        });
  },

  Run: function() {
    ActivityTests.Factories();
  },
};