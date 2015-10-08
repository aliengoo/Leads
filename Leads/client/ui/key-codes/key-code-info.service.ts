///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="key-code-info.ts"/>
///<reference path="key-codes.ts"/>
///<reference path="letter-key-codes.ts"/>
///<reference path="modifier-key-codes.ts"/>
///<reference path="special-key-codes.ts"/>
///<reference path="numeric-key-codes.ts"/>


module ui {
  "use strict";

  export interface IKeyCodeInfoService {
    compile(event: JQueryEventObject): IKeyCodeInfo;
  }

  export class KeyCodeInfoService implements IKeyCodeInfoService {

    /* @ngInject */
    constructor(private modifierKeyCodes: Array<number>,
                private letterKeyCodes: Array<number>,
                private specialKeyCodes: Array<number>,
                private numericKeyCodes: Array<number>) {

    }

    public compile(event: JQueryEventObject): IKeyCodeInfo {

      var keyCodeInfo: IKeyCodeInfo = {
        isLetter: _.contains(this.letterKeyCodes, event.keyCode),
        key: event.key,
        keyCode: event.keyCode
      };

      keyCodeInfo.isCapital = keyCodeInfo.isLetter && event.shiftKey;

      // number test
      if (keyCodeInfo.isLetter) {
        keyCodeInfo.isNumber = false;
      } else {
        keyCodeInfo.isNumber = _.contains(this.numericKeyCodes, event.keyCode) && !event.shiftKey;
      }

      // modifier/cursor
      keyCodeInfo.isModifier = _.contains(this.modifierKeyCodes, event.keyCode);

      // special char test
      keyCodeInfo.isSpecialChar = !keyCodeInfo.isModifier && (_.contains(this.specialKeyCodes, event.keyCode)
        || !keyCodeInfo.isLetter && event.shiftKey);


      return keyCodeInfo;
    }
  }
}
