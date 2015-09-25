///<reference path="../../models/models.d.ts"/>
"use strict";

module leads.components {

  export function customerToString(): Function{
    return (customer: leads.models.ICustomer): string => {
      if (!customer) {
        return "?";
      }
      return `${customer.lastName}, ${customer.firstName}`;
    }
  }
}
