module ui {
  "use strict";

  export interface IKeyCodeInfo {
    key: any;
    keyCode: number;
    isLetter?: boolean;
    isCapital?: boolean;
    isNumber?: boolean;
    isSpecialChar?: boolean;
    isModifier?: boolean;
  }
}
