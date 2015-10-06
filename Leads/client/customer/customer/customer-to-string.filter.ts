///<reference path="customer.ts"/>

module customer {
  "use strict";

  export function customerToString(): Function {
    return (customer: ICustomer): string => {
      if (!customer) {
        return "?";
      }
      return `${customer.lastName}, ${customer.firstName}`;
    };
  }
}

