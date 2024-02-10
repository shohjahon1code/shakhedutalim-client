import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"
import { useActions } from "src/hooks/useActions"
import { useAuth } from "src/hooks/useAuth"

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const { user } = useAuth()
  const { logout, checkAuth } = useActions()
  const router = useRouter()

  useEffect(() => {
    const refreshToken = Cookies.get("refresh")

    if (refreshToken) checkAuth()
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get("refresh")
    if (!refreshToken && user) logout()
  }, [router.pathname])
  return <>{children}</>
}

export default AuthProvider
