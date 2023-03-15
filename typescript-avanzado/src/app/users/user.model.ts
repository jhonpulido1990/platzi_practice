import { Basemodel } from './../base.model';


export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export interface User extends Basemodel{
  username: string,
  role: ROLES,
}
