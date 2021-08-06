'use strict';

/**
 * Result domain entity
 *
 * @param {Set<Activity>} activities
 * @param {Predicate} predicate
 */
const Result = function(activities, predicate) {
  /** @type {Set<Activity>} */
  this.activities = activities;

  /** @type {Set<Activity>} */
  this.rejectedActivities = new Set();

  /** @type {Predicate} */
  this.predicate = predicate;

  /** @type {string} */
  this.storyString =
      `First, you're going to ${this.activities[0].longDescription}. ` +
      `Next, you'll visit ${this.activities[1].longDescription}. ` +
      `And finally, you'll go to ${this.activities[2].longDescription}.`;
};