'use strict';

/**
 * Activity domain entity
 * 
 * @param {string} title
 * @param {string} shortDescription
 * @param {string} longDescription
 * @param {string} imageUrl
 * @returns Activity
 * @constructor
 */
const Activity = function (
  title,
  shortDescription,
  longDescription,
  imageUrl) {
  /** @type {string} */
  this.title = title;

  /** @type {string} */
  this.shortDescription = shortDescription;

  /** @type {string} */
  this.longDescription = longDescription;

  /** @type {string} */
  this.imageUrl = imageUrl;
}