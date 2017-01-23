"use strict";

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var elements = {
        searchIcon: "//android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[8]"
    }


describe('Appium test', function() {
    this.timeout(120000);

    var desired = {
        "appium-version": "1.6.3",
        platformName: "Android",
        platformVersion: "5.1",
        // Or your device name
        deviceName: "emulator-5554",
        //browserName: "Chrome" if using a real device
        browserName: "Browser"
    };

    var browser = wd.promiseChainRemote("127.0.0.1", 4723);

    before(function() {
        return browser
        .init(desired)
        .setImplicitWaitTimeout(1200)
    });

    it('should see and tap on Search icon', function(done) {
        return browser
            .contexts()
            .then((contexts) => {
                return browser.context(contexts[0])
                    .get("http://tiny.cc/sensorweb")
                    .setImplicitWaitTimeout(12000)
                    .elementByXPath(elements.searchIcon)
                    .getAttribute("name")
                    .then((text) => {
                        chai.assert.equal(text, "Search")
                    })
                    .elementByXPath(elements.searchIcon)
                    .click()
                    // TBDone: check an element in the Search view
               })     
            .nodeify(done)
    });

    after(function() {
        browser.quit()
    });
});
