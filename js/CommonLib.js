'use strict';

const CommonLib = {

  Constants: {
    THRILL_LEVEL_HIGH: 'high',
    THRILL_LEVEL_MEDIUM: 'medium',
    THRILL_LEVEL_LOW: 'low',

    ACTIVITY_LEVEL_HIGH: 'high',
    ACTIVITY_LEVEL_MEDIUM: 'medium',
    ACTIVITY_LEVEL_LOW: 'low',
  },

  Array: {
    /**
     * @param {*[]} source
     * @param {*[]}target
     * @returns {boolean}
     */
    contains: (source, target) => source.indexOf(target) > -1,

    /**
     * @param {*[]} source
     * @param {*[]}target
     * @returns {number}
     */
    indexOf: (source, target) => source.indexOf(target),
  },

  Event: {
    attachListener: function() {
    },

    removeListener: function() {
    },
  },

  Persistence: {
    /**
     * @param {string} key
     * @returns {any}
     */
    load: function(key) {
      const valueFromStorage = localStorage.getItem(key);
      return JSON.parse(valueFromStorage);
    },

    /**
     * @param {string} id The key
     * @param {string} value The stringified object to store
     */
    store: function(id, value) {
      localStorage.setItem(id, value);
    },
  },

  Random: {
    /**
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    getRandomIntInclusive: (min, max) =>
        Math.floor(
            Math.random() * (max - min + 1) + min),
  },
};