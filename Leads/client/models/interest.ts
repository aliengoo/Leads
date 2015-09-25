"use strict";

module leads.models {
  export interface IInterest {
    id: string;
    parentId: string;
    type: string;
    description: string;
  }
}
