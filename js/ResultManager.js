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
   * @returns {Activity[]}
   */
  ResultManager.prototype.getActivities = function(predicate) {
    return this._result ?
        this._result.activities :
        this.activityRepository.activities.get(predicate);
  };

  /**
   * @returns {Result}
   */
  ResultManager.prototype.getResults = function() {
    if (this._result) return this._result;

    this.resultRepository.results.load();

    this._result = this.resultRepository.results.get()[0];

    return randomizeResult(this);

    /**
     * @returns {Result}
     */
    function randomizeResult(context) {
      let value = context._result;
      let arr = [];

      let randomInt;
      let randomInts = [];
      do {
        randomInt = CommonLib.Random.getRandomIntInclusive(0,
            context._result.activities.length - 1);
        if (!randomInts.includes(randomInt)) randomInts.push(randomInt);
      } while (randomInts.length < 3);

      for (const i of randomInts) {
        const newElement = context._result.activities[i];
        arr.push(newElement);
      }

      return new Result(arr, value.predicate);
    }
  };

  /**
   * @param {Predicate} predicate
   */
  ResultManager.prototype.generateResults = function(predicate) {
    let result = new Result(this.getActivities(predicate), predicate);
    const target = 3;

    ensureTargetNumberOfResults(this, target, result);

    this._result = result;
    this.resultRepository.results.add(result);

  };

  function ensureTargetNumberOfResults(context, target, result) {
    // when we don't even have 3 results
    // we need the remaining 1 or 2 to be in the result set
    if (result.activities.length < target) {
      const remaining = target - result.activities.length;
      const notFound = context.activityRepository.activities.get(
          new Predicate('404', '404'));

      for (let i = 0; i < remaining; i++) {
        result.activities.push(notFound[i]);
      }
    }
  }
};
