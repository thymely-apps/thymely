'use strict';

/**
 *
 * @param {string} franchise
 * @param {string} thrillLevel
 * @param {string} activityLevel
 * @constructor
 */
const Predicate = function(
    franchise,
    thrillLevel,
    activityLevel) {

  this.franchise = franchise;
  this.thrillLevel = thrillLevel;
  this.activityLevel = activityLevel;

  Predicate.prototype = {
    /**
     * @param {Activity[]} activities
     * @returns {boolean}
     */
    filter: function(activities) {
      // check franchise
      let franchise = activities.filter(
          activity => activity.franchise === this.franchise).length > 0;

      // check thrillLevel
      let thrillLevel = activities.filter(
          activity => activity.thrillLevel === this.thrillLevel).length > 0;

      // check activityLevel
      let activityLevel = activities.filter(
          activity => activity.activityLevel === this.activityLevel).length > 0;

      return franchise && thrillLevel && activityLevel;
    },
  };
};