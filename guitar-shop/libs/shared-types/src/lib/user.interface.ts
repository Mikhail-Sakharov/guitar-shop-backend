import {UserRole} from './user-role.enum';

export interface User {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  userRole: UserRole;
}
