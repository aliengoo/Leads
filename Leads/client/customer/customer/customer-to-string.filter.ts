///<reference path="customer.ts"/>
"use strict";

module customer {

  export function customerToString(): Function {
    return (customer: ICustomer): string => {
      if (!customer) {
        return "?";
      }
      return `${customer.lastName}, ${customer.firstName}`;
    }
  }
}
