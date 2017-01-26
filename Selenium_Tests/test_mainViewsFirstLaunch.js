'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

const By = require('selenium-webdriver').By;
const until = webdriver.until;
const Website = require('./website')

describe('Show main page views at first launch', function() {
    let website;
    let mapView;
    let favoritesView;
    let searchView;
    this.timeout(30000);

    before(() => {
        website = new Website();
    });

    after(() => website.stop());

    beforeEach(function() {
    return website.init()
       .then((defaultView) => { mapView = defaultView });
    });

    it('should go to favorites', () => {
       return mapView.goToFavoritesView()
            .then((favoritesView) => { return favoritesView.checkDefaultText()
            .then((text) => { assert.equal(text, 'No Saved Locations')})
            });
    });

    it('should go to search', () => {
        return mapView.goToSearchView()
            .then((searchView) => { return searchView.checkDefaultText()
            .then((text) => { assert.equal(text, 'Enter an address to find nearby sensors.')})
            });
    });
});
