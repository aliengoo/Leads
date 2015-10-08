///<reference path="limit-chars-options.ts"/>
///<reference path="limit-chars-attributes.ts"/>
///<reference path="../key-codes/key-code-info.ts"/>
module ui {
  "use strict";

  export interface ILimitCharsOptionsService {
    compile(limitCharsAttributes: ILimitCharsAttributes): ILimitCharsOptions;
    match(limitCharsOptions: ILimitCharsOptions, keyCodeInfo: IKeyCodeInfo): boolean;
  }

  export class LimitCharsOptionsService implements ILimitCharsOptionsService {

    /* @ngInject */
    constructor(private $filter: angular.IFilterService,
                private modifierKeyCodes: Array<number>,
                private letterKeyCodes: Array<number>,
                private specialKeyCodes: Array<number>,
                private numericKeyCodes: Array<number>) {
    }

    public compile(limitCharsAttributes: ILimitCharsAttributes): ILimitCharsOptions {
      var parsedOptions: ILimitCharsOptions = angular.fromJson(limitCharsAttributes.limitChars);

      // init excludes
      if (angular.isUndefined(parsedOptions.exclude)) {
        parsedOptions.exclude = [];
      }

      // init includes
      if (angular.isUndefined(parsedOptions.include)) {
        parsedOptions.include = this.parseExclusions(parsedOptions.exclude, this.modifierKeyCodes);
      } else {
        parsedOptions.include =
          parsedOptions.include.concat(this.parseExclusions(parsedOptions.exclude, this.modifierKeyCodes));
      }

      if (parsedOptions.letters) {
        parsedOptions.include =
          parsedOptions.include.concat(this.parseExclusions(parsedOptions.exclude, this.letterKeyCodes));
      }

      if (parsedOptions.numeric) {
        parsedOptions.include =
          parsedOptions.include.concat(this.parseExclusions(parsedOptions.exclude, this.numericKeyCodes));
      }

      if (parsedOptions.special) {
        parsedOptions.include =
          parsedOptions.include.concat(this.parseExclusions(parsedOptions.exclude, this.specialKeyCodes));
      }

      return parsedOptions;
    }

    public match(limitCharsOptions: ILimitCharsOptions, keyCodeInfo: IKeyCodeInfo): boolean {

      if (limitCharsOptions.debug) {
        var printJson: Function = (v: any): string => this.$filter("json")(angular.toJson(v));

        $("#debug-limit-chars-options").text(printJson(limitCharsOptions));
        $("#debug-key-code-info").text(printJson(keyCodeInfo));
      }

      if (limitCharsOptions.capitals && keyCodeInfo.isCapital) {
        return true;
      }

      if (limitCharsOptions.special && keyCodeInfo.isSpecialChar) {
        return true;
      }

      return _.contains(limitCharsOptions.include, keyCodeInfo.keyCode);
    }

    private parseExclusions(exclude: Array<number>, includes: Array<number>): Array<number> {

      var result: Array<number> = [];

      angular.forEach(includes, (item: number): void => {
        if (exclude.indexOf(item) === -1) {
          result.push(item);
        }
      });

      return result;
    }
  }
}
