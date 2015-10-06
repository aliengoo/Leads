///<reference path="lead.ts"/>

module lead {
  "use strict";

  export interface IPage {
    current?: number;
    totalItems?: number;
    totalPages?: number;
    skip?: number;
    size?: number;
    sortColumn?: string;
    sortOrder?: number;
    results?: ILead[];
  }
}
