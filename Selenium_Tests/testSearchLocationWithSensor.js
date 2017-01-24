'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var chai = require("chai");
chai.should();

const By = require('selenium-webdriver').By;
const until = webdriver.until;

var mochaTimeOut = 300000; //ms
var driver;

var HOST = 'http://tiny.cc/sensorweb';

var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);

before(function() {
    this.timeout(mochaTimeOut);
    driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    driver.get(HOST);
    
});

var elements;

describe('Show main page', function() {

    it('should be titled sensorweb', function () {
        this.timeout(mochaTimeOut);
        return driver.wait(webdriver.until.titleIs('SensorWeb'), 5000)
            .then((title) => {
                return assert.equal(title, true);
            });
    });

    describe('SensorWeb Search', function() {
        
        beforeEach(function() {
            elements = {
                searchButton: driver.findElement(webdriver.By.xpath('/html/body/div/div/div/div[2]/div[3]/span'), 5000),
                searchInputField: driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div[1]/div[3]/div/input')),
                };
        });

        it('should search for a location with sensor(s)', function () {
            this.timeout(mochaTimeOut);
            return elements.searchButton.click()
                .then(() => {
                    return driver.wait(webdriver.until.elementIsVisible(elements.searchInputField),5000)
                        .then(() => {
                            return elements.searchInputField.sendKeys('San Francisco' + '\n')
                        })
                });
        });

        it('should see sensor sensor details', function(){
            //Not the best solution, but need to wait till the view is loaded. Need to find a better solution
            driver.sleep(1000)
            this.timeout(mochaTimeOut);
            return driver.wait(webdriver.until.elementIsVisible(driver.findElement(webdriver.By.css('div.sensorName'),5000)))
                    .getText()
                    .then((text) => {
                        assert.equal(text, 'Sensor')
                    });
        });

        it('should get sensor measurement', function(){
            //Not the best solution, but need to wait till the view is loaded. Need to find a better solution
            driver.sleep(1000)
            this.timeout(mochaTimeOut);
            return driver.wait(webdriver.until.elementIsVisible(driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div[1]/div[2]/div/div[2]/div[1]/div[4]/div/div/span'),5000)))
            .getText()
                    .then((value) => {
                        chai.assert.isAbove(value, '0', 'Sensor value is equal or below 0')
                        chai.assert.isBelow(parseInt(value), '100', 'Sensor value is higher than 100')
                    });
        });
    });
});

after(function() {
    driver.close();
});
