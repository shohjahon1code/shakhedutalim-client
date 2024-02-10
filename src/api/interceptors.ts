import Cookies from "js-cookie"
import { $axios } from "./axios"

$axios.interceptors.request.use((config) => {
  const accessToken = Cookies.get("access")
  if (config && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

$axios.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config
		if(error)
  }
)
