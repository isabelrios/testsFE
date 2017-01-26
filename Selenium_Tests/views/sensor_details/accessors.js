'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function SensorDetailsAccessors() {
  Accessors.apply(this, arguments);
}

SensorDetailsAccessors.prototype = Object.assign({

  get starIcon() {
    return this.waitForElement(By.css('#root > div > div > div.Miaiz > div:nth-child(2) > div > div.gOQtsE > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > img'));
  },
  
  get enterLabel() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(2) > input[type="text"]'))
  },

  get saveButton() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(3) > button'))
  }

}, Accessors.prototype);

module.exports = SensorDetailsAccessors;
