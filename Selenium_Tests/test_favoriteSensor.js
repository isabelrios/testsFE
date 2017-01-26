'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

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
    this.timeout(30000);

    before(() => {
        website = new Website();
    });

    after(() => website.stop());

    beforeEach(function() {
    return website.init()
       .then((defaultView) => { mapView = defaultView });
    });

    it('should search an address and favorite the sensor', () => {
        return mapView.goToSearchView()
            .then((searchView) => { searchView.enterAnAddress('San Francisco' + '\n')
            .then((sensorDetailsView) => { return sensorDetailsView.tapOnStarIcon()
            .then((nameSensor) => { nameSensor.enterName('Test') })
            });
            });
            });

    it('should see a favorite on the list', () => {
        return mapView.goToFavoritesView()
            .then((favoriteView) => { favoriteView.checkIfFavoriteSensor()
            .then((text) => { assert.equal(text, 'Test')})
            });
    });
});
