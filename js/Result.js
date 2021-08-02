'use strict';

/**
 * Result domain entity
 * 
 * @param {Activity[]} activities 
 */
const Result = function (activities) {
  /** @type {Activity[]} */
  this.activities = activities;

  /** @type {string} */
  this.storyString = `First, you're going to ${this.activities[0].longDescription}. ` +
    `Next, you'll visit ${this.activities[1].longDescription}. ` +
    `And finally, you'll go to ${this.activities[2].longDescription}.`;
}