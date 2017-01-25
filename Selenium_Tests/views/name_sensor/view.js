'use strict';

const View = require('../view');
const NameSensorAccessors = require('./accessors');


function NameSensorView() {
  [].push.call(arguments, NameSensorAccessors);
  View.apply(this, arguments);

  this.accessors.enterLabel;
  this.accessors.saveButton;
}

NameSensorView.prototype = Object.assign({

  enterName(name) {
      return this.accessors.enterLabel.sendKeys(name)
      .then(() => { 
     return this.accessors.saveButton.click() 
    })
  }

}, View.prototype);

module.exports = NameSensorView;