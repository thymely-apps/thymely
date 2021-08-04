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
     * @param {HTMLElementEventMap[string]} event
     * @returns {function(event:HTMLElementEventMap[string]) : void}
     */
    getSubmitButtonClickDelegate: {
      function(event) {
        event.preventDefault();

        // todo: get result from form
        // event.target.;
        // todo: generate results
        result = new Result(a, b, c);
        // todo: store results in local storage
        // redirect
        window.location.assign(window.location.href + '/results.html');
      },
    },

    /**
     * @param {string} domElementId
     * @param {function(event:HTMLElementEventMap[string]) : void} actionDelegate
     */
    attachClickListener: function(domElementId, actionDelegate) {
      const target = document.getElementById(domElementId);
      target.addEventListener('click', actionDelegate);
    },

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