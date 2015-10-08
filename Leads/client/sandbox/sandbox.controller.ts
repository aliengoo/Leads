///<reference path="../ui/limit-chars/limit-chars-options.ts"/>
module sandbox {
  "use strict";

  export class SandboxController {
    public test: any;
    public options: ui.ILimitCharsOptions;

    constructor() {
      this.test = {};

      this.options = {"debug": true, "letters": true, "include": [32]};

    }
  }
}
