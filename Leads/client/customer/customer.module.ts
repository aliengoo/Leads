///<reference path="../bootstrap/bootstrap.module.ts"/>

///<reference path="customer/customer-to-string.filter.ts"/>
///<reference path="customer/customer.directive.ts"/>
///<reference path="customer/customer.ts"/>
///<reference path="address/address.directive.ts"/>
///<reference path="address/address.ts"/>
///<reference path="address-type/address-type.directive.ts"/>

"use strict";

module customer {

  angular.module("customer", ["bootstrap"])
    .filter("customerToString", customerToString)
    .directive("customer", customer)
    .directive("address", address)
    .directive("addressType", addressType);

}
