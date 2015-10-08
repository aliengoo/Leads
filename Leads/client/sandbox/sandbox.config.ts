///<reference path="sandbox.controller.ts"/>
///<reference path="../../typings/angular-ui-router/angular-ui-router.d.ts"/>

module sandbox {
  "use strict";

  export class SandboxConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("sandbox", {
        controller: SandboxController,
        controllerAs: "vm",
        template:
          `
            <div class="container" id="sandbox">

              <header><h1>Sandbox</h1></header>

              <form-group observe>
                <control-label><code>limit-chars</code> to everything</control-label>
                <input
                  type="text"
                  limit-chars='{"debug": true, "letters": true, "numeric": true, "special": true}'
                  required
                  ng-model="vm.test.test1" name="limitCharsEverything">
              </form-group>

              <form-group>
                <control-label><code>limit-chars</code> to letters only</control-label>
                <input
                  type="text"
                  limit-chars='{{options}}'
                  ng-model="vm.test.test2"
                  name="limitToLetters">
              </form-group>

              <pre id="debug-limit-chars-options"></pre>
              <pre id="debug-key-code-info"></pre>

            </div>

          `,
        url: "/sandbox"
      });
    }
  }
}
