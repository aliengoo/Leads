"use strict";

module leads.models {
  export interface ICustomer {
    firstName: string;
    middleNames?: string;
    lastName: string;
    birthDate?: Date;
    address?: IAddress
    contactMethods?: any;
    meta?: any;
  }
}

