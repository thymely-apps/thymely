'use strict';

/**
 * @param {string} storageKey
 * @constructor
 */
const ResultRepository = function(storageKey = 'Results') {
  /** @type {Repository} */
  this.results = new Repository(storageKey);

  this.results.load();
};