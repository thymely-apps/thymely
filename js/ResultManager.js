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

  /** @type {Result} */
  this._result = null;

  /**
   * @param {Predicate} predicate
   * @returns {Result}
   */
  ResultManager.prototype.regenSet = function(predicate) {
    const activities = this.activityRepository.activities.get(predicate);
    const result = new Result(activities, predicate);

    // todo: validate results
    this.resultRepository.results.add(result);

    return result;
  };

  /**
   * @param {Predicate} predicate
   * @returns {Set<Activity>}
   */
  ResultManager.prototype.getActivities = function(predicate) {
    if (!this._result) this._result = this.regenSet(predicate);

    return this._result.activities;
  };

  /**
   * @param {Predicate} predicate
   * @returns {Result}
   */
  ResultManager.prototype.generateResults = function(predicate) {
    this._result = new Result(this.getActivities(predicate), predicate);

    if (this._result.activities.size < 1){
      // todo: there are no results
    }

    return this._result;
  };

  /**
   * @param {Predicate} predicate
   */
  ResultManager.prototype.setPredicate = function(predicate) {
    this._result.predicate = predicate;
  };

  ResultManager.prototype.rejectFromResults = function() {
  };
};