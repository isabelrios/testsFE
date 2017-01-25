'use strict';

const View = require('../view');
const SearchAccessors = require('./accessors');


function SearchView() {
  [].push.call(arguments, SearchAccessors);
  View.apply(this, arguments);

  this.accessors.searchField;
}

SearchView.prototype = Object.assign({

  enterAnAddress(address) {
    return this.accessors.searchField.click().then(() => {
      this.accessors.searchField.sendKeys(address)
      }).then(() => {
      //const MapView = require('../map/view');
      //return new MapView(this.driver);
      const SensorDetailsView = require('../sensor_details/view');
      return new SensorDetailsView(this.driver);
       });
  }

}, View.prototype);

module.exports = SearchView;