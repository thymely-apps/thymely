'use strict';

const TestLib = {

  Object: {
    /**
     * @param {Assert} assert
     * @param {object} expected
     * @param {object} actual
     */
    hasSamePropertiesAndValues: function(assert, expected, actual) {
      for (const actualPropertyName of Object.keys(actual)) {
        const expectedPropertyName = actualPropertyName in expected ?
            actualPropertyName :
            null;

        const actualPropertyValue = actual[actualPropertyName];
        const expectedPropertyValue = expected[expectedPropertyName];

        assert.equal(actualPropertyName, expectedPropertyName);
        assert.equal(actualPropertyValue, expectedPropertyValue);
      }
    },
  },

  Value: {
    /**
     * @param {Assert} assert
     * @param {any} expected
     * @param {any} actual
     */
    isEqual: function(assert, expected, actual) {
      assert.equal(actual, expected);
    },

    /**
     * @param {Assert} assert
     * @param {any} actual
     */
    isTrue: function(assert, actual) {
      assert.equal(actual, true);
    },

    /**
     * @param {Assert} assert
     * @param {any} actual
     */
    isFalse: function(assert, actual) {
      assert.equal(actual, false);
    },
  },
};