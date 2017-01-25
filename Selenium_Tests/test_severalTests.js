'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

const By = require('selenium-webdriver').By;
const until = webdriver.until;
const Website = require('./website')

describe('Show main page views', function() {
    let website;
    let mapView;
    let favoritesView;
    let searchView;
    let sensorDetailsView;
    let nameSensor;
    this.timeout(30000);

    before(() => {
        website = new Website();
    });

    beforeEach(function() {
    return website.init()
       .then((defaultView) => { mapView = defaultView });
    });

    it('should go to favorites and settings', () => {
       return mapView.goToFavoritesView()
    });

    it('should go to search', () => {
        return mapView.goToSearchView()
    });

    it('should search an address and favorite the sensor', () => {
        return mapView.goToSearchView()
            .then((searchView) => { searchView.enterAnAddress('San Francisco' + '\n')
            .then((sensorDetailsView) => { return sensorDetailsView.tapOnStarIcon()
            .then((nameSensor) => { nameSensor.enterName('Test') })
            });     
            });
            });
});
