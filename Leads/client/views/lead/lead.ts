"use module";

module leads {
  export interface ILead {
    id: string;
    customers?: ICustomer[]
    meta?: any;
    created?: Date;
    interest?: IInterest
  }

  export interface ICustomer {
    firstName: string;
    middleNames?: string;
    lastName: string;
    birthDate?: Date;
    addresses?: IAddress[]
    contactMethods?: any;
    meta?: any;
  }

  export interface IAddress {
    line1?: string;
    line2?: string;
    line3?: string;
    town?: string;
    postcodeOut?: string;
    postcodeIn?: string;
    type?: string;
  }

  export interface IInterest {
    id: string;
    parentId: string;
    type: string;
    description: string;
  }
}
