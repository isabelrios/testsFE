'use strict';

const By = require('selenium-webdriver').By;
const Accessors = require('../accessors');


function SearchAccessors() {
  Accessors.apply(this, arguments);
}

SearchAccessors.prototype = Object.assign({

  get searchField() {
    return this.waitForElement(By.xpath('//*[@id="root"]/div/div/div[1]/div[3]/div/input'));
  },

  get searchButton() {
    return this.waitForElement(By.xpath('/html/body/div/div/div/div[2]/div[3]/span'))
  },

  get defaultText() {
    return this.waitForElement(By.css('#root > div > div > div.Miaiz > div:nth-child(3) > div > ul > li'))
  }

}, Accessors.prototype);

module.exports = SearchAccessors;
