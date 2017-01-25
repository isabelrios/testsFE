'use strict';

const View = require('../view');
const FavoritesAccessors = require('./accessors');


function FavoritesView() {
  [].push.call(arguments, FavoritesAccessors);
  View.apply(this, arguments);

  this.accessors.settingsButton;
}

FavoritesView.prototype = Object.assign({

  goToSettings() {
    return this.accessors.settingsButton.click()
    /*.then(() => {
      const SearchView = require('../favorites/view');
      return new SearchView(this.driver);*/
  }

}, View.prototype);

module.exports = FavoritesView;