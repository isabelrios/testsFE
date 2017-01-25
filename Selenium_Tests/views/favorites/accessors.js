'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function FavoritesAccessors() {
  Accessors.apply(this, arguments);
}

FavoritesAccessors.prototype = Object.assign({

  get settingsButton() {
    return this.waitForElement(By.css('#root > div > div > div.Miaiz > div:nth-child(1) > div > img'));
  }

}, Accessors.prototype);

module.exports = FavoritesAccessors;