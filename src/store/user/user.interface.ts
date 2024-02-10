import { UserType } from "src/interfaces/user.interface"

export interface UserInitialStateType {
  user: UserType | null
  isLoading: boolean
  error: string | null | unknown
}

export interface AuthToken {
  refreshToken: string
  accessToken: string
}

export interface AuthUserResponse extends AuthToken {
  user: UserType
}

export interface InterfaceEmailAndPassword {
  email: string
  password: string
}

export interface InterfaceEmailAndOtp {
  email: string
  otp: string
}

export interface InterFaceSign {
  callback?: () => void
  email: string
  password: string
}
