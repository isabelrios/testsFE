'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function NameSensorAccessors() {
  Accessors.apply(this, arguments);
}

NameSensorAccessors.prototype = Object.assign({

  get enterLabel() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(2) > input[type="text"]'))
  },

  get saveButton() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(3) > button'))
  }

}, Accessors.prototype);

module.exports = NameSensorAccessors;
