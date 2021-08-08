'use strict';

const PredicateTests = {

  Constants: {
    TEST_PREDICATE_RETURN_VALUE: 'TEST_PREDICATE_RETURN_VALUE',
  },

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

  Evaluations: function() {
    QUnit.test(
        /*
         * BDD (Behavior-Driven Development)
         *
         * Tests larger scenarios than unit tests.
         * Supposed to be articulated in business logic terms.
         *
         * GIVEN, WHEN, THEN - BDD - Wording of the test
         *
         * Given a predicate domain entity's constructor
         * When constructor is finished
         * Then properties should not be changed on assignment
         *
         * ARRANGE, ACT, ASSERT - AAA - "Triple A" - Order of operations in the test
         *
         * // Arrange
         * const thing = whatever;
         * const expected = 'Hello World';
         *
         * // Act
         * const actual = new MyCoolClass().sayHello();
         *
         * // Assert
         * assert.equal(expected, actual);
         */
        'Predicate return value ' +
        'should be a 404-ish object ' +
        'when the predicate matches 404 for location and thrill level.',
        (assert) => {
          // ARRANGE
          const expectedTitle = 'OOOPS...Something when wrong.';
          const expectedSize = 3;
          const repo = new ActivityRepository(
              this.Constants.TEST_PREDICATE_RETURN_VALUE);
          const predicate = new Predicate('404', '404');

          // ACT
          /** @type {Activity[]} */
          const result = repo.activities.get(predicate);
          const actualTitle = result[0].title;
          const actualSize = result.length;

          // ASSERT
          TestLib.Value.isEqual(assert, expectedTitle, actualTitle);
          TestLib.Value.isEqual(assert, expectedSize, actualSize);

          localStorage.removeItem(
              this.Constants.TEST_PREDICATE_RETURN_VALUE);
        });
  },

  Run: function() {
    PredicateTests.Factories();
    PredicateTests.Evaluations();
  },
};