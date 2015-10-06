///<reference path="customer.ts"/>
module customer {
  "use strict";

  export interface ICustomerScope extends angular.IScope {
    customer: ICustomer;
  }
}
