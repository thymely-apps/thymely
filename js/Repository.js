'use strict';

/**
 * Repository
 *
 * @constructor
 */
const Repository = function(storageKey) {

  /** @type {string} */
  this.STORAGE_KEY = storageKey;
};

Repository.prototype = (function() {
  /** @type {any[]} */
  let _inMemoryBacking = [];

  return {
    /**
     * @param {any} obj
     */
    add: function(obj) {
      _inMemoryBacking.push(obj);

      this.store();
    },

    /**
     * @param {Predicate} predicate
     * @returns {any[]}
     */
    get: function(predicate) {
      if (!predicate) return _inMemoryBacking;

      let result = [];
      for (const value of _inMemoryBacking) {
        if (predicate.filter(value)) {
          result.push(value);
        }
      }
      return result;
    },

    /**
     * @param {string} repositoryJson
     */
    addJson: function(repositoryJson) {
      const obj = JSON.parse(repositoryJson);

      if (typeof obj === typeof [])
        _inMemoryBacking = [..._inMemoryBacking, ...obj];

      _inMemoryBacking = [..._inMemoryBacking, obj];

      this.store();
    },

    /**
     * @returns {void}
     */
    load: function() {
      const valueFromStorage = CommonLib.Persistence.load(this.STORAGE_KEY);
      _inMemoryBacking = valueFromStorage ?? [];
    },

    /**
     * @returns {void}
     */
    store: function() {
      const jsonString = JSON.stringify(_inMemoryBacking);
      CommonLib.Persistence.store(this.STORAGE_KEY, jsonString);
    },
  };
})();