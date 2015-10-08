module ui {
  "use strict";

  export interface ILimitCharsOptions {
    letters?: boolean;
    // must be a explicitly set to false to prevent capitalisation.
    // null or undefined means they are acceptable when letters is true
    capitals?: boolean;

    // special keys are ones requiring either a modifier key (shift/alt/ctrl).
    // this does not include capitals
    special?: boolean;
    numeric?: boolean;
    include?: Array<number>;
    exclude?: Array<number>;

    // adds a pre to view the limit char options and key code info
    debug?: boolean;
  }
}
