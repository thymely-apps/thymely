'use strict';

/**
 * Repository
 *
 * @constructor
 */
const Repository = function(storageKey) {

  /** @type {string} */
  this.STORAGE_KEY = storageKey;

  /** @type {*[]} */
  this._dataBacking = [];

  /**
   * @param {any} obj
   */
  Repository.prototype.add = function(obj) {
    if (!this._dataBacking.includes(obj)) {
      this._dataBacking.push(obj);
      this.store();
    }
  };

  /**
   * @param {Predicate} predicate
   * @returns {*[]}
   */
  Repository.prototype.get = function(predicate) {
    if (!predicate) return this._dataBacking;

    let result = [];

    for (const element of this._dataBacking) {
      if (predicate.filter(element)) {
        result.push(element);
      }
    }

    return result;
  };

  /**
   * @returns {void}
   */
  Repository.prototype.load = function() {
    const valueFromStorage = localStorage.getItem(this.STORAGE_KEY);
    const parsedValueFromStorage = JSON.parse(valueFromStorage) ?? [];

    if (storageIsEmpty()) return;

    // clear stale in memory storage
    this._dataBacking = [];

    // load the localstorage value into memory storage
    this._dataBacking.push(...parsedValueFromStorage);

    function storageIsEmpty() {
      const isEmptyObject = Object.keys(parsedValueFromStorage).length < 1;
      return !parsedValueFromStorage || isEmptyObject;
    }
  };

  /**
   * @returns {void}
   */
  Repository.prototype.store = function() {
    const jsonString = JSON.stringify(this._dataBacking);

    localStorage.setItem(this.STORAGE_KEY, jsonString);
  };

  Repository.prototype.clear = function(){
    this._dataBacking = [];
    this.store();
  }
};