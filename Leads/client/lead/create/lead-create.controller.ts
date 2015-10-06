///<reference path="../../customer/customer/customer.ts"/>
///<reference path="../models/lead.ts"/>

module lead {
  "use strict";

  export class LeadCreateController {
    public customer: customer.ICustomer;
    public lead: ILead;

    constructor() {
      this.lead = <ILead>{};
      this.customer = <customer.ICustomer>{};
    }
  }
}
