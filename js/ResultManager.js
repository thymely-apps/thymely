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
     * @param {ResultManager} context
     * @returns {Result}
     */
    function randomizeResult(context) {
      let result = context._result;
      let arr = [];
      let ride;
      let tries = 0;

      let randomIndices = [];
      // keep trying if we don't have a ride
      do {
        // for each predicate-matching activity
        randomIndices.length = 0;
        arr.length = 0;
        for (let i = 0; i < result.activities.length && randomIndices.length < 3; i++) {

          // get random index
          const randomInt = CommonLib.Random.getRandomIntInclusive(
              0, result.activities.length - 1);

          // add to randomIndices array
          if (randomIndices.includes(randomInt)){
            i--;
            continue;
          }
          randomIndices.push(randomInt);

          if (result.activities[randomInt].thrillLevel !==
              CommonLib.Constants.THRILL_LEVEL_SHOPPING_OR_RESTAURANT) {
            ride = result.activities[randomInt];
          }
        }

        // use the random indices to pick the activities
        for (const randomIndex of randomIndices) {
          const randomActivity = result.activities[randomIndex];
          arr.push(randomActivity);
        }

        // there may be actually no rides...
        // try 10 times
        tries++;
      } while (!ride && tries < 10);

      return new Result(arr, result.predicate);
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

  /**
   * @param {ResultManager} context
   * @param {number} target
   * @param {Result} result
   */
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
