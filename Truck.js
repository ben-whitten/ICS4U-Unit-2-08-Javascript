/*
 * The Truck program is an extension from the Vehicle program.
 *
 * @author  Ben Whitten
 * @version 1.0
 * @since   2020-12-18
 */

///////////////////////////////////////////////////////////////////////////////

// Defining require and process
/*eslint no-undef: "error"*/
/*global require module*/
// Defining prompt for getting user input.

// Importing the airplane class from another file
const Vehicle = require("./Vehicle.js");

class Truck extends Vehicle {

  constructor() {
    super();
    this.numberOfTires = 4;
  }

  getTires() {
    return this.numberOfTires;
  }

  provideAir() {
    super.accelerate();
    super.accelerate();
  }
}
// Exporting the subclass
module.exports = Truck;

///////////////////////////////////////////////////////////////////////////////
