'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

const By = require('selenium-webdriver').By;
const until = webdriver.until;


var mochaTimeOut = 300000; //ms
var driver;
var title = By.css('a.navbar-brand');

var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);

before(function() {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    
});

var sensroWebString = By.css('a.navbar-brand')

describe( 'Show main page', function(done) {

    beforeEach(function() {
        driver.get('http://tiny.cc/sensorweb');
    });

    it('should be titled sensorweb', function () {
    this.timeout(mochaTimeOut);
      return driver.wait(webdriver.until.titleIs('SensorWeb'), 5000)
        .then(function(value) {
          return assert.equal(value, true);
        });
    done();
    });

    it('should click on Search', function () {
    this.timeout(mochaTimeOut);
      return driver.findElement(webdriver.By.xpath('/html/body/div/div/div/div[2]/div[3]/span'), 5000).click()
    done();
    });
    
});

after(function() {
    driver.quit();
  });

