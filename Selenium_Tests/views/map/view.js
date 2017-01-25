'use strict';

const View = require('../view');
const MapAccessors = require('./accessors');


function MapView() {
  [].push.call(arguments, MapAccessors);
  View.apply(this, arguments);

  this.accessors.favoritesButton;
  this.accessors.searchButton;
}

MapView.prototype = Object.assign({

  goToFavoritesView() {
    return this.accessors.favoritesButton.click().then(() => {
      const FavoritesView = require('../favorites/view');
      return new FavoritesView(this.driver);
    });
  }

  /*goToSearchView() {
    return this.accessors.searchButton.click().then(() => {
      const SearchView = require('../search/view');
      return new SearchView(this.driver);
  }*/

}, View.prototype);

module.exports = MapView;