'use strict';

/**
 * Activity Repository
 * 
 * @param {Activity[]} activities 
 * @constructor
 */
const ActivityRepository = function (activities) {
  this.activities = activities;
}

ActivityRepository.prototype = (function () {
  /** @type {Activity[]} */
  let _activities;

  return {
    /**
     * @param {Activity} activity 
     */
    addActivity: function (activity) {
      _activities.push(activity);
    },
  }
})();

// const repo = new ActivityRepository(
//   [new Activity(),
//   new Activity()]);

// repo.addActivity(new Activity());
// repo._activities.push(new Activity());