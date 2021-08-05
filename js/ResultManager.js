'use strict';

/**
 *
 * @param {ActivityRepository} activityRepository
 * @param {ResultRepository} resultRepository
 * @constructor
 */
const ResultManager = function(
    activityRepository,
    resultRepository) {
  this.activityRepository = activityRepository;
  this.resultRepository = resultRepository;
};

ResultManager.prototype = (function() {
  /** @type {Predicate} */
  let _predicate = new Predicate(
      CommonLib.Constants.PARK_AREA_DEFAULT,
      CommonLib.Constants.THRILL_LEVEL_DEFAULT);

  /** @type {Result} */
  let _resultSet = null;

  /**
   * @param {Predicate} predicate
   * @param {ResultManager} context
   * @returns {Result}
   */
  function regenSet(context, predicate) {
    const activities = context.activityRepository.activities.get(predicate);

    // validate results
    const resultSet = new Result(activities, predicate);

    context.resultRepository.activities.add(resultSet);

    return resultSet;
  }

  /**
   * @param {Predicate} predicate
   * @param {ResultManager} context
   * @returns {Activity[]}
   */
  function getActivities(context, predicate) {
    if (!_resultSet) _resultSet = regenSet(context, predicate);

    return _resultSet.activities;
  }

  /**
   * @param context
   */
  function validateResult(context) {

  }

  return {
    /**
     * @param {int} quantity
     * @returns {Result}
     */
    generateResults: function(predicate) {
      /** @type {Activity[]} */
      _resultSet = new Result(getActivities(this, predicate), predicate);

      return _resultSet;
    },

    /**
     * @param {Predicate} predicate
     */
    setPredicate: function(predicate) {

    },

    rejectFromResults: function() {
    },
  };
})();