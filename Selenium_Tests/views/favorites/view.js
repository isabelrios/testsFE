'use strict';

const View = require('../view');
const FavoritesAccessors = require('./accessors');


function FavoritesView() {
  [].push.call(arguments, FavoritesAccessors);
  View.apply(this, arguments);

  this.accessors.settingsButton;
  this.accessors.defaultText;
  this.accessors.getFavorite;
}

FavoritesView.prototype = Object.assign({

  goToSettings() {
    return this.accessors.settingsButton.click()
  },

  checkDefaultText() {
    return this.accessors.defaultText.getText()
  },

  checkIfFavoriteSensor() {
    return this.accessors.getFavorite.getText()
  },

  tapOnFavoriteSensor() {
    return this.accessors.getFavorite.click()
    .then(() => {
      const SensorDetailsView = require('../sensor_details/view');
      return new SensorDetailsView(this.driver);
    });
  }

}, View.prototype);

module.exports = FavoritesView;
