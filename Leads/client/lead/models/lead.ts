///<reference path="interest.ts"/>
///<reference path="../../customer/customer/customer.ts"/>
"use strict";

module lead {
  export interface ILead {
    id: string;
    customers?: customer.ICustomer
    meta?: any;
    created?: Date;
    interests?: IInterest[]
  }
}
