///<reference path="../ui/ui.module.ts"/>
///<reference path="customer/customer-to-string.filter.ts"/>
///<reference path="customer/customer.directive.ts"/>
///<reference path="customer/customer.ts"/>
///<reference path="address/address.directive.ts"/>
///<reference path="address/address.ts"/>
///<reference path="address-type/address-type.directive.ts"/>
///<reference path="customer/first-name.directive.ts"/>
///<reference path="customer/middle-names.directive.ts"/>
///<reference path="customer/last-name.directive.ts"/>
///<reference path="customer/birth-date.directive.ts"/>
///<reference path="address/address-line.directive.ts"/>
///<reference path="customer/customer-name-part.directive.ts"/>
///<reference path="address/postcode.directive.ts"/>

module customer {
  "use strict";

  angular.module("customer", ["ui"])
    .filter("customerToString", customerToString)
    .directive("firstName", firstName)
    .directive("middleNames", middleNames)
    .directive("lastName", lastName)
    .directive("birthDate", birthDate)
    .directive("customer", customer)
    .directive("customerNamePart", customerNamePart)
    .directive("address", address)
    .directive("addressLine", addressLine)
    .directive("postcode", postcode)
    .directive("addressType", addressType);
}
