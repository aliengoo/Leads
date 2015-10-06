///<reference path="interest.ts"/>
///<reference path="../../customer/customer/customer.ts"/>

module lead {
  "use strict";

  export interface ILead {
    id: string;
    customers?: customer.ICustomer;
    meta?: any;
    created?: Date;
    interests?: IInterest[];
  }
}
