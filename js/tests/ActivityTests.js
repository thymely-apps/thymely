'use strict';

const ActivityTests = {

  Cleanup: function() {
  },

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
            location: 'location',
            thrillLevel: 'thrill',
          };
          const actual = new Activity(
              expected.title,
              expected.shortDescription,
              expected.longDescription,
              expected.imageUrl,
              expected.location,
              expected.thrillLevel);

          TestLib.Object.hasSamePropertiesAndValues(
              assert,
              expected,
              actual);
        });
  },

  Run: function() {
    ActivityTests.Factories();
    ActivityTests.Cleanup();
  },
};