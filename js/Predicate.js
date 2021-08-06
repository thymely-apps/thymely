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
    const isLocationMatch = (activity.location?.toLowerCase() === this.location) > 0;
    const isThrillLevelMatch = (activity.thrillLevel?.toLowerCase() === this.thrillLevel) >
        0;

    return isLocationMatch && isThrillLevelMatch;
  };
};