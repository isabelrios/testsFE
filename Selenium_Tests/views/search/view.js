'use strict';

const View = require('../view');
const SearchAccessors = require('./accessors');


function SearchView() {
  [].push.call(arguments, SearchAccessors);
  View.apply(this, arguments);

  this.accessors.searchField;
  this.accessors.defaultText;
}

SearchView.prototype = Object.assign({

  enterAnAddress(address) {
    return this.accessors.searchField.click().then(() => {
      this.accessors.searchField.sendKeys(address)
      }).then(() => {
      const SensorDetailsView = require('../sensor_details/view');
      return new SensorDetailsView(this.driver);
      });
  },

  checkDefaultText() {
    return this.accessors.defaultText.getText()
  }

}, View.prototype);

module.exports = SearchView;
