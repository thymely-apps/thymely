'use strict';

/**
 * @constructor
 */
const ResultRepository = function() {
  /** @type {string} */
  const STORAGE_KEY = 'Results';

  /** @type {Repository} */
  this.activities = new Repository(STORAGE_KEY);

  this.activities.load();
};
