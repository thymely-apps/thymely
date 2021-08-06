'use strict';

const CommonLib = {

  Constants: {

    // Let's keep our magic strings LCase

    THRILL_LEVEL_NAME: 'thrill-level',
    THRILL_LEVEL_DEFAULT: 'medium',
    THRILL_LEVEL_HIGH: 'high',
    THRILL_LEVEL_MEDIUM: 'medium',
    THRILL_LEVEL_LOW: 'LOW',

    PARK_AREA_NAME: 'park-area',
    PARK_AREA_DEFAULT: 'medium',
    PARK_AREA_HIGH: 'high',
    PARK_AREA_MEDIUM: 'medium',
    PARK_AREA_LOW: 'low',
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
     * @param {HTMLElementEventMap[string]} e
     * @returns {Predicate}
     */
    getSubmitButtonClickDelegate: function(e) {
      e.preventDefault();

      const location = e.target['park-area'].value;
      const thrillLevel = e.target['thrill-level'].value;

      return new Predicate(location, thrillLevel);
    },
  },

  /**
   * @param {string} domElementId
   * @param {function(event:HTMLElementEventMap[string]) : void} actionDelegate
   */
  removeClickListener: function(domElementId, actionDelegate) {
    const target = document.getElementById(domElementId);
    target.removeEventListener('click', actionDelegate);
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