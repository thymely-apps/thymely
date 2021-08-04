'use strict';

/**
 * @constructor
 */
const ActivityRepository = function() {
  /** @type {string} */
  const STORAGE_KEY = 'Activities';

  /** @type {Repository} */
  this.activities = new Repository(STORAGE_KEY);

  this.activities.load();
};