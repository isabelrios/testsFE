'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function NameSensorAccessors() {
  Accessors.apply(this, arguments);
}

NameSensorAccessors.prototype = Object.assign({

  get enterLabel() {
    //return this.waitForElement(By.css('#root > div > div.jdnNXn.loaded > div > div.hjxrdF > p:nth-child(2) > input[type="text"]'))
    return this.waitForElement(By.css('#root > div > div.cYlydg.loaded > div > p:nth-child(3) > input[type="text"]'))
    //return this.waitForElement(By.css('.input[type="text"]'))
  },

  get saveButton() {
    return this.waitForElement(By.xpath('//*[.="Save"]'))
  }

}, Accessors.prototype);

module.exports = NameSensorAccessors;
