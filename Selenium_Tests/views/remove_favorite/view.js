'use strict';

const View = require('../view');
const RemoveFavoriteAccessors = require('./accessors');


function RemoveFavoriteView() {
  [].push.call(arguments, RemoveFavoriteAccessors);
  View.apply(this, arguments);

  this.accessors.removeButton;
  this.accessors.whiteStar;
}

RemoveFavoriteView.prototype = Object.assign({

  tapUnFavoriteSensor(name) {
      return this.accessors.removeButton.click()
      .then(() => {
        const SensorDetailsView = require('../sensor_details/view');
        return new SensorDetailsView(this.driver);
    });
  }

}, View.prototype);

module.exports = RemoveFavoriteView;
