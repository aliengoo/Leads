///<reference path="../../customer/customer/customer.ts"/>
///<reference path="../models/lead.ts"/>
"use strict";

module lead {

  export class LeadCreateController {
    lead: ILead;
    customer: customer.ICustomer;

    constructor() {
      this.lead = <ILead>{};
      this.customer = <customer.ICustomer>{};
    }
  }
}
