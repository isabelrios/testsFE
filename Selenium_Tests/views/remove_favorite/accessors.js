'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function RemoveFavoriteAccessors() {
  Accessors.apply(this, arguments);
}

RemoveFavoriteAccessors.prototype = Object.assign({

  get removeButton() {
  	return this.waitForElement(By.css('#root > div > div.cYlydg.loaded > div > div.buttons > button:nth-child(2)'))
  }

}, Accessors.prototype);

module.exports = RemoveFavoriteAccessors;
