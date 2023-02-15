import {UserRole} from "./user-role.enum"

export interface LoggedUser {
    user: {
      id: string,
      email: string,
      userName: string,
      userRole: UserRole
    }
  }
