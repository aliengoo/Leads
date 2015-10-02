"use strict";

module leads.components {

  export interface ISidebarStateService {
    isOpen(open?: boolean): boolean;
  }

  export class SidebarStateService implements ISidebarStateService {

    private key: string = "sidebar-state";

    /* @ngInject */
    constructor(private $localStorage: any) {

      if (this.$localStorage[this.key] === undefined) {
        this.$localStorage[this.key] = false;
      }
    }

    // Test
    isOpen(open?: boolean) {
      if (typeof open === "boolean") {
        this.$localStorage[this.key] = open;
      }

      return <boolean>this.$localStorage[this.key];
    }
  }
}
