'use strict';

/**
 * Activity domain entity
 *
 * @param {string} title
 * @param {string} shortDescription
 * @param {string} longDescription
 * @param {string} imageUrl
 * @param {string} franchise
 * @param {string} thrillLevel
 * @param {string} activityLevel
 * @returns Activity
 * @constructor
 */
const Activity = function(
    title,
    shortDescription,
    longDescription,
    imageUrl,
    franchise,
    thrillLevel,
    activityLevel) {
  /** @type {string} */
  this.title = title;

  /** @type {string} */
  this.shortDescription = shortDescription;

  /** @type {string} */
  this.longDescription = longDescription;

  /** @type {string} */
  this.imageUrl = imageUrl;

  /** @type {string} */
  this.franchise = franchise;

  /** @type {string} */
  this.thrillLevel = thrillLevel;

  /** @type {string} */
  this.activityLevel = activityLevel;
};