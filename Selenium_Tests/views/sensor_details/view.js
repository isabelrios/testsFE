'use strict';

const View = require('../view');
const SensorDetailsAccessors = require('./accessors');


function SensorDetailsView() {
  [].push.call(arguments, SensorDetailsAccessors);
  View.apply(this, arguments);

  this.accessors.starIcon;
}

SensorDetailsView.prototype = Object.assign({

  tapOnStarIcon() {
    return this.accessors.starIcon.click()
    .then(() => {
      const NameSensorView = require('../name_sensor/view');
      return new NameSensorView(this.driver);
    });
  }

}, View.prototype);

module.exports = SensorDetailsView;
