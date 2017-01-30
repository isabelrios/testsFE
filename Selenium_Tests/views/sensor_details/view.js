'use strict';

const View = require('../view');
const SensorDetailsAccessors = require('./accessors');


function SensorDetailsView() {
  [].push.call(arguments, SensorDetailsAccessors);
  View.apply(this, arguments);

  this.accessors.starIcon;
  //this.accessors.starIconOn;
  //this.accessors.starIconOff;
}

SensorDetailsView.prototype = Object.assign({

  tapOnStarIcon(option) {
    return this.accessors.starIcon.click()
    .then(() => {
      if(option=='Favorite') {
      const NameSensorView = require('../name_sensor/view');
      return new NameSensorView(this.driver);
      } else {
      const RemoveSensorView = require('../remove_favorite/view');
      return new RemoveSensorView(this.driver);
    }
    });
  },

  checkStarIconOn() {
    return this.accessors.starIconOn.isDisplayed();
  },

  checkStarIconOff() {
    return this.accessors.starIconOff.isDisplayed();
  },

  getSensorValue() {
    return this.accessors.sensorMeasurement.getText();
  }



}, View.prototype);

module.exports = SensorDetailsView;
