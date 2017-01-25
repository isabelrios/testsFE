'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function FavoritesAccessors() {
  Accessors.apply(this, arguments);
}

FavoritesAccessors.prototype = Object.assign({

  get settingsButton() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div[1]/div/img'));
  },

}, Accessors.prototype);

module.exports = FavoritesAccessors;