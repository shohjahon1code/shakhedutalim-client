import { RoleUser } from "./constants.interface"

export interface UserType {
  email?: string
  fullname?: string
  role?: RoleUser
  createdAt?: string
  password?: string
  avatar?: string
}
