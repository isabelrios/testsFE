'use strict';

const View = require('../view');
const FavoritesAccessors = require('./accessors');


function FavoritesView() {
  [].push.call(arguments, FavoritesAccessors);
  View.apply(this, arguments);

  this.accessors.settingsButton;
  this.accessors.defaultText;
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
  }

}, View.prototype);

module.exports = FavoritesView;
