///<reference path="lead.ts"/>
"use strict";

module leads.models {
  export interface IPage {
    current?: number;
    totalItems?: number;
    totalPages?: number;
    skip?: number;
    size?: number;
    sortColumn?: string;
    sortOrder?: number;
    results?: ILead[]
  }
}
