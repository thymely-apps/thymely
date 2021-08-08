'use strict';

/**
 * Result domain entity
 *
 * @param {Activity[]} activities
 * @param {Predicate} predicate
 * @returns {Result}
 * @constructor
 */
const Result = function(activities, predicate) {
  /** @type {Activity[]} */
  this.activities = activities;

  /** @type {Predicate} */
  this.predicate = predicate;
};