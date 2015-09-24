"use strict";

module leads {

  export interface IPagedFilterRequest {
    filter: any;
    page: IPage
  }

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
