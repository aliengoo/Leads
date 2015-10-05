///<reference path="../address/address.ts"/>
module customer {
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

