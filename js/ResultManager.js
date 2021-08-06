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

  /** @type {Predicate} */
  this._predicate = new Predicate(
      CommonLib.Constants.PARK_AREA_DEFAULT,
      CommonLib.Constants.THRILL_LEVEL_DEFAULT);

  /** @type {Result} */
  this._result = null;

  ResultManager.prototype = {

    /**
     * @param {Predicate} predicate
     * @param {ResultManager} context
     * @returns {Result}
     */
    regenSet: function(predicate) {
      const activities = this.activityRepository.activities.get(predicate);

      // todo: validate results

      const resultSet = new Result(activities, predicate);

      this.resultRepository.results.add(resultSet);

      return resultSet;
    },

    /**
     * @param {Predicate} predicate
     * @param {ResultManager} context
     * @returns {Set<Activity>}
     */
    getActivities: function(predicate) {
      if (!this._result) this._result = regenSet(predicate);

      return this._result.activities;
    },

    /**
     * @param context
     */
    validateResult: function(context) {

    },

    /**
     * @param {Predicate} predicate
     * @returns {Result}
     */
    generateResults: function(predicate) {
      this._result = new Result(this.getActivities(predicate), predicate);

      return this._result;
    },

    /**
     * @param {Predicate} predicate
     */
    setPredicate: function(predicate) {
    },

    rejectFromResults: function() {
    },
  };
};