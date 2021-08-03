'use strict';

const Predicate = function () {
  /** @type {Activity[]} */
  this.activities = []; // TODO: turn this into a repository

  /**
   * 
   * @param {*} myPredicate 
   */
  Predicate.prototype.applyFilter = function (myPredicate) {
    // use the predicate to filter the activies
    // the activities they'll be coming form the activity repository

    if (myPredicate) {
      // do something
    } else {
      // do something else
    }
  }
}