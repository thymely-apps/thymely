'use strict';

/**
 *
 * @param {ActivityRepository} activityRepository
 * @param {ResultRepository} resultRepository
 * @constructor
 */
const ResultManager = function(
    activityRepository,
    resultRepository) {
  this.activityRepository = activityRepository;
  this.resultRepository = resultRepository;

  function getResult() {

  }

  function validateResult() {

  }

  ResultManager.prototype = {
    /**
     * @param {integer} quantity
     */
    generateResults: function(quantity) {
      for (let i = 0; i < quantity; i++) {
        getResult();
      }
    },

    rejectFromResults: function() {
    },
  };
};