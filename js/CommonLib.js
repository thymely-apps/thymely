'use strict';

const CommonLib = {

  Constants: {
    THRILL_LEVEL_NAME: 'thrill-level',
    THRILL_LEVEL_HIGH: 'HIGH',
    THRILL_LEVEL_MEDIUM: 'MODERATE',
    THRILL_LEVEL_LOW: 'LOW',
    THRILL_LEVEL_SHOPPING_OR_RESTAURANT: '*',
  },

  Array: {
    /**
     * @param {*[]} source
     * @param {*[]} target
     * @returns {boolean}
     */
    contains: (source, target) => source.indexOf(target) > -1,

    /**
     * @param {*[]} source
     * @param {*[]} target
     * @returns {number}
     */
    indexOf: (source, target) => source.indexOf(target),
  },

  Event: {
    /**
     * @param {string} domElementId
     * @param {function(event:HTMLElementEventMap[string]) : void} actionDelegate
     */
    removeClickListener: function(domElementId, actionDelegate) {
      const target = document.getElementById(domElementId);
      target.removeEventListener('click', actionDelegate);
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
     * @param {int} min
     * @param {int} max
     * @returns {number}
     */
    getRandomIntInclusive: function(min, max) {
      return Math.floor(
          Math.random() * (max - min + 1) + min);
    },
  },
};