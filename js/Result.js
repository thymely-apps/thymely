'use strict';

/**
 * Result domain entity
 *
 * @param {Activity[]} activities
 * @param {Predicate} predicate
 */
const Result = function(activities, predicate) {
  /** @type {Activity[]} */
  this.activities = activities;

  /** @type {Activity[]} */
  this.rejectedActivities = [];

  /** @type {Predicate} */
  this.predicate = predicate;

  /** @type {string} */
  Result.prototype.storyString = function() {
    return `First, you're going to ${this.activities[0].longDescription}. ` +
        `Next, you'll visit ${this.activities[1].longDescription}. ` +
        `And finally, you'll go to ${this.activities[2].longDescription}.`;
  };
};