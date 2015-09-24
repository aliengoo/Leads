"use strict";

module leads {

  /* @ngInject */
  export function addressDirective() {
    return {
      restrict: "E",
      templateUrl: "views/lead/components/address/address.html",
      link: link
    };

    function link() {
    }
  }
}