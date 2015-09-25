///<reference path="interest.ts"/>
///<reference path="customer.ts"/>

"use strict";

module leads.models {
  export interface ILead {
    id: string;
    customers?: ICustomer
    meta?: any;
    created?: Date;
    interests?: IInterest[]
  }
}
