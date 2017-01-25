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
    this.timeout(30000);

    before(() => {
        website = new Website();
    });


    beforeEach(function() {
    return website.init()
        .then((defaultView) => { mapView = defaultView });
    });

    after(() => website.stop());

    it('should go to favorites', () => {
        mapView.goToFavoritesView();
    });
});
