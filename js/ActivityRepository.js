'use strict';

/**
 * @param {string} storageKey
 * @constructor
 */
const ActivityRepository = function(storageKey = 'Activities') {
  /** @type {Repository} */
  this.activities = new Repository(storageKey);

  this.activities._inMemoryBacking = new Set([
    {
      'title': 'Indiana Jones™ Adventure',
      'shortDescription': 'Embark on a fast-paced thrill ride in search of Indiana Jones—enter this cursed temple at your own risk! ',
      'adaFriendly': '',
      'originalRide': '',
      'imageUrl': '.img/adventureland-indiana-jones.jpg',
      'location': 'Adventureland',
      'thrillLevel': 'HIGH',
    },
    {
      'title': 'Tarzan\'s Tree House',
      'shortDescription': 'Tour the legendary vine-swinger\'s jungle home—built in an 80-foot-tall tree—and experience life on the wild side. ',
      'adaFriendly': '',
      'originalRide': '',
      'imageUrl': '.img/adventureland-tarzan-tree.jpg',
      'location': 'Adventureland',
      'thrillLevel': 'LOW',
    },
    {
      'title': 'Jungle Cruise',
      'shortDescription': 'Cast off on a guided tour of the world\'s most remote rivers where adventure abounds—and the animals get the last laugh. ',
      'adaFriendly': 'ADA Friendly',
      'originalRide': '1955 Original Ride',
      'imageUrl': '.img/adventureland-jungle-cruise.jpg',
      'location': 'Adventureland',
      'thrillLevel': 'LOW',
    },
    {
      'title': 'Walt Disney\'s Enchanted Tiki Room',
      'shortDescription': 'Tropical birds, tiki gods and colorful flowers come to life in a swinging South Seas musical celebration',
      'adaFriendly': 'ADA Friendly',
      'originalRide': '',
      'imageUrl': '.img/adventureland-tiki-room.jpg',
      'location': 'Adventureland',
      'thrillLevel': 'LOW',
    },
  ]);
};