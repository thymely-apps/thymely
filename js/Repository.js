'use strict';

/**
 * Repository
 *
 * @constructor
 */
const Repository = function(storageKey) {
  /** @type {object[]} */
  let _value = [];

  /** @type {string} */
  this.STORAGE_KEY = storageKey;

  this.load();

  Repository.prototype = (function() {

    return {
      /**
       * @param {object} obj
       */
      add: function(obj) {
        _value.push(obj);

        this.store();
      },

      /**
       * @param {Predicate} predicate
       * @returns {object[]}
       */
      get: function(predicate) {
        return _value.filter(predicate.filter);
      },

      /**
       * @param {string} repositoryJson
       */
      addJson: function(repositoryJson) {
        const obj = JSON.parse(repositoryJson);

        if (typeof obj === typeof [])
          _value = [..._value, ...obj];

        _value = [..._value, obj];

        this.store();
      },

      /**
       * @returns {void}
       */
      load: function() {
        const valueFromStorage = CommonLib.Persistence.load(this.STORAGE_KEY);
        _value = valueFromStorage ?? [];
      },

      /**
       * @returns {void}
       */
      store: function() {
        const jsonString = JSON.stringify(_value);
        CommonLib.Persistence.store(this.STORAGE_KEY, jsonString);
      },
    };
  })();
};