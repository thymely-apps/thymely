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
    const isLocationMatch = activity.location.toUpperCase() === this.location.toUpperCase();
    const isThrillLevelMatch = activity.thrillLevel.toUpperCase() === this.thrillLevel.toUpperCase();

    return isLocationMatch && isThrillLevelMatch;
  };
};