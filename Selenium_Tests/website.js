'use strict';

const webdriver = require('selenium-webdriver');

const ASYNC_SCRIPT_TIMEOUT_IN_MS = 10000;

function Website(driver, url) {
  this.driver = driver || new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
  this.driver.manage().timeouts().setScriptTimeout(ASYNC_SCRIPT_TIMEOUT_IN_MS);
  this.url = url || 'http://tiny.cc/sensorweb';
}


Website.prototype = {
  init() {
    return this.driver.get(this.url)
      .then(() => this.defaultView);
  },

  stop() {
    return this.driver.quit();
  },

  get defaultView() {
    const MapView = require('./views/map/view');
    return new MapView(this.driver);
  }
};

module.exports = Website;