'use strict';

/**
 * @constructor
 */
const ActivityRepository = function(storageKey = 'Activities') {
  this.storageKey = storageKey;

  /** @type {Repository} */
  this.activities = new Repository(storageKey);

  this.activities.load();
};