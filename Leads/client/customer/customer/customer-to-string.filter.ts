///<reference path="customer.ts"/>
"use strict";

namespace customer {

  export function customerToString(): Function {
    return (customer: ICustomer): string => {
      if (!customer) {
        return "?";
      }
      return `${customer.lastName}, ${customer.firstName}`;
    }
  }
}
