'use strict';

/**
 *
 * @param {string} location
 * @param {string} thrillLevel
 * @constructor
 */
const Predicate = function(
    location,
    thrillLevel) {

  this.location = location;
  this.thrillLevel = thrillLevel;

  /**
   * @param {Activity} activity
   * @returns {boolean}
   */
  Predicate.prototype.filter = function(activity) {
    const isLocationMatch = activity.location.toUpperCase() ===
        this.location.toUpperCase();
    let isThrillLevelMatch = activity.thrillLevel.toUpperCase() ===
        this.thrillLevel.toUpperCase();

    // add a restaurant or shop if predicate doesn't match
    if (!isThrillLevelMatch) {
      isThrillLevelMatch = activity.thrillLevel === '*';
    }

    return isLocationMatch && isThrillLevelMatch;
  };
};