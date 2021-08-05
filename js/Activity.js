'use strict';

/**
 * Activity domain entity
 *
 * @param {string} title
 * @param {string} shortDescription
 * @param {string} longDescription
 * @param {string} imageUrl
 * @param {string} location
 * @param {string} thrillLevel
 * @returns Activity
 * @constructor
 */
const Activity = function(
    title,
    shortDescription,
    longDescription,
    imageUrl,
    location,
    thrillLevel) {
  /** @type {string} */
  this.title = title;

  /** @type {string} */
  this.shortDescription = shortDescription;

  /** @type {string} */
  this.longDescription = longDescription;

  /** @type {string} */
  this.imageUrl = imageUrl;

  /** @type {string} */
  this.location = location;

  /** @type {string} */
  this.thrillLevel = thrillLevel;
};