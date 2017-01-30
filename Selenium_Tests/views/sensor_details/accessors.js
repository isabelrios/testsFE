'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function SensorDetailsAccessors() {
  Accessors.apply(this, arguments);
}

SensorDetailsAccessors.prototype = Object.assign({

  get starIcon() {
    return this.waitForElement(By.css('#root > div > div.iQzAVO > div.Miaiz > div:nth-child(2) > div > div.IzlMR > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1)'))
  },

  get starIconOn() {
    return this.waitForElement(By.css('img[src="star-icon-on.f71a8c48d3ba1b8cf7bc0e50fb76ff4b.svg"]'))
  }, 

  get starIconOff() {
    return this.waitForElement(By.css('img[src="star-icon.af01dde19567ad0e03563fab5f3ed46d.svg"]'))
  },

  get sensorMeasurement() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div[2]/div/div[2]/div[1]/div[4]/div[2]/div/span'))
  }

}, Accessors.prototype);

module.exports = SensorDetailsAccessors;
