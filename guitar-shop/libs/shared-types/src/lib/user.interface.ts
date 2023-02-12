import {UserRole} from './user-role.enum';

export interface User {
  _id?: string;
  createdAt?: string;
  email: string;
  userName: string;
  passwordHash: string;
  userRole: UserRole;
}
