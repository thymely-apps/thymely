'use strict';

/**
 * Repository
 *
 * @constructor
 */
const Repository = function(storageKey) {

  /** @type {string} */
  this.STORAGE_KEY = storageKey;

  /** @type {Set<any>} */
  this._inMemoryBacking = new Set();

  /**
   * @param {any} obj
   */
  Repository.prototype.add = function(obj) {
    this._inMemoryBacking.add(obj);

    this.store();
  };

  /**
   * @param {Predicate} predicate
   * @returns {Set<any>}
   */
  Repository.prototype.get = function(predicate) {
    if (!predicate) return this._inMemoryBacking;

    let result = new Set();
    for (const value of this._inMemoryBacking.entries()) {
      if (predicate.filter(value[1])) {
        result.add(value[1]);
      }
      else result.add(new Predicate(' ', ' '));
    }

    return result;
  };

  /**
   * @param {any} repositoryJson
   */
  Repository.prototype.addJson = function(repositoryJson) {
    const obj = JSON.parse(repositoryJson);

    if (typeof obj === typeof []) obj.forEach(
        _ => this._inMemoryBacking.add(_));
    else this._inMemoryBacking.add(obj);

    this.store();
  };

  /**
   * @returns {void}
   */
  Repository.prototype.load = function() {
    const valueFromStorage = CommonLib.Persistence.load(this.STORAGE_KEY);
    if (!valueFromStorage || Object.keys(valueFromStorage).length < 1) return;
    this._inMemoryBacking.add(valueFromStorage);
  };

  /**
   * @returns {void}
   */
  Repository.prototype.store = function() {
    const jsonString = JSON.stringify(Array.from(this._inMemoryBacking));
    if (!jsonString || jsonString === JSON.stringify({})) return;
    CommonLib.Persistence.store(this.STORAGE_KEY, jsonString);
  };
};