'use strict';

const TeamMemberTests = {

  Factories: function() {
    QUnit.test(
        'TeamMember class constructor ' +
        'should not mutate properties on assignment ' +
        'when constructor is finished.', (assert) => {
          const expected = {
            profileImageUrl: 'image1.jpg',
            firstName: 'Hello',
            lastName: 'world',
            bio: 'Hello world!',
          };
          const actual = new TeamMember(
              expected.profileImageUrl,
              expected.firstName,
              expected.lastName,
              expected.bio,
          );

          TestLib.Object.hasSamePropertiesAndValues(assert, expected, actual);
        });
  },

  Run: function() {
    TeamMemberTests.Factories();
  },
};