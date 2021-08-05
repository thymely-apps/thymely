'use strict';

/**
 * @param {string} storageKey
 * @constructor
 */
const ResultRepository = function(storageKey = 'Results') {
  /** @type {string} */
  this.storageKey = storageKey;

  /** @type {Repository} */
  this.activities = new Repository(storageKey);

  this.activities.load();
};
