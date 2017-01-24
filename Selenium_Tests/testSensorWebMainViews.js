'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

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

after(function() {
    driver.quit();
});


var elements;

describe('Show main page', function() {

    it('should be titled sensorweb', function () {
        this.timeout(mochaTimeOut);
        return driver.wait(webdriver.until.titleIs('SensorWeb'), 5000)
            .then(function(title) {
                return assert.equal(title, true);
            });
    });

    describe('SensorWeb views', function() {
        
        beforeEach(function() {
            elements = {
                searchButton: driver.findElement(webdriver.By.xpath('/html/body/div/div/div/div[2]/div[3]/span'), 5000),
                favoritesButton: driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div[2]/div[1]/span'), 5000),
                favoritesString: driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div[1]/div[1]/div/h1')),
                searchInputField: driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div[1]/div[3]/div/input')),
                mapLocator: driver.findElement(webdriver.By.xpath('//*[@id="root"]/div/div/div[1]/div[2]/div/div[2]/div[2]/div[2]/div[2]'))
            };
        });

        it('should see Map View', function () {
            this.timeout(mochaTimeOut);
            return driver.wait(webdriver.until.elementIsVisible(elements.mapLocator),5000);
        });

        it('should click on Search', function () {
            this.timeout(mochaTimeOut);
            return elements.searchButton.click()
                .then(function() {
                    return driver.wait(webdriver.until.elementIsVisible(elements.searchInputField),5000);
                });
        });

        it('should click on Favorites', function () {
            this.timeout(mochaTimeOut);
            return elements.favoritesButton.click()
                .then(function() {
                    return driver.wait(webdriver.until.elementIsVisible(elements.favoritesString),5000);
                });
        });
    });
});

