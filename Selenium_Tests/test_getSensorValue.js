'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var chai = require("chai");
chai.should();

const By = require('selenium-webdriver').By;
const until = webdriver.until;
const Website = require('./website')

describe('Favorite sensor tests', function() {
    let website;
    let mapView;
    let favoritesView;
    let searchView;
    let sensorDetailsView;
    let nameSensor;
    let removeSensor;
    this.timeout(30000);

    before(() => {
        website = new Website();
    });

    after(() => website.stop());

    beforeEach(function() {
    return website.init()
       .then((defaultView) => { mapView = defaultView });
    });

    it('should get sensor value', () => {
        return mapView.goToSearchView()
            .then((searchView) => { searchView.enterAnAddress('San Francisco' + '\n')
            .then((sensorDetailsView) => { return sensorDetailsView.getSensorValue()
            .then((value) => { 
                chai.assert.isAbove(value, '0', 'Sensor value is equal or below 0')
                chai.assert.isBelow(parseInt(value), '100', 'Sensor value is higher than 100')
            });
            });
            });
    });
});
