'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function MapAccessors() {
  Accessors.apply(this, arguments);
}

MapAccessors.prototype = Object.assign({

  get favoritesButton() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[1]/span'));
  },

  get searchButton() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[1]/span'));
  },

}, Accessors.prototype);

module.exports = MapAccessors;