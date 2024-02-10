import Cookies from "js-cookie"
import { AuthToken, AuthUserResponse } from "src/store/user/user.interface"

export const saveTokensCookies = (data: AuthToken) => {
  Cookies.set("access", data.accessToken)
  Cookies.set("refresh", data.refreshToken)
}

export const removeTokenCookie = () => {
  Cookies.remove("access")
  Cookies.remove("refresh")
}
