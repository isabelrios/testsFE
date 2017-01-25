'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function SensorDetailsAccessors() {
  Accessors.apply(this, arguments);
}

SensorDetailsAccessors.prototype = Object.assign({

  get starIcon() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div/div[1]/div[2]/div/div[3]/div[2]/img[2]'));
  },
  
  get enterLabel() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(2) > input[type="text"]'))
  },

  get saveButton() {
    return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(3) > button'))
  }

}, Accessors.prototype);

module.exports = SensorDetailsAccessors;