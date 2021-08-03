'use strict';

/**
 * A TeamMember domain entity
 * 
 * @param {string} profileImageUrl 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} bio 
 */
const TeamMember = function (
  profileImageUrl,
  firstName,
  lastName,
  bio) {
  /** @type {string} */
  this.profileImageUrl = profileImageUrl;

  /** @type {string} */
  this.firstName = firstName;

  /** @type {string} */
  this.lastName = lastName;

  /** @type {string} */
  this.bio = bio;
}