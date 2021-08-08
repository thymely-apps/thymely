'use strict';

const CommonLibTests = {

  Cleanup: function(){
  },

  ArrayTests: function() {
    QUnit.test(
        'CommonLib.Array.contains helper ' +
        'should return true ' +
        'when array contains the target.', (assert) => {
          const expected = true;
          const actual = CommonLib.Array.contains(['a', 'b', 'c'], 'b');

          assert.equal(expected, actual);
        });

    QUnit.test(
        'CommonLib.Array.indexOf helper ' +
        'should return index position ' +
        'when array contains the target.', (assert) => {
          const expected_1 = 0;
          const actual_1 = CommonLib.Array.indexOf(['a', 'b', 'c'], 'a');
          const expected_2 = 1;
          const actual_2 = CommonLib.Array.indexOf(['a', 'b', 'c'], 'b');
          const expected_3 = 2;
          const actual_3 = CommonLib.Array.indexOf(['a', 'b', 'c'], 'c');

          assert.equal(expected_1, actual_1);
          assert.equal(expected_2, actual_2);
          assert.equal(expected_3, actual_3);
        });

    QUnit.test(
        'CommonLib.Array.indexOf helper ' +
        'should return negative index position ' +
        'when array does not contain the target.', (assert) => {
          const expected = -1;
          const actual = CommonLib.Array.indexOf(['a', 'b', 'c'], 'z');

          assert.equal(expected, actual);
        });
  },

  Run: function() {
    CommonLibTests.ArrayTests();
    CommonLibTests.Cleanup();
  },
};