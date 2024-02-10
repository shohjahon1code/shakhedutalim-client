import "@fontsource/roboto"
import "../styles/globals.css"
import "nprogress/nprogress.css"
import "react-multi-carousel/lib/styles.css"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { theme } from "src/config/theme"
import { I18nextProvider } from "react-i18next"
import i18n from "src/i18n"
import { Client, HydrationProvider } from "react-hydration-provider"
import NProgress from "nprogress"
import Router from "next/router"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { store } from "src/store/store"
import { SessionProvider } from "next-auth/react"
import AuthProvider from "src/provider/auth.provider"

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on("routeChangeStart", handleRouteStart)
    Router.events.on("routeChangeComplete", handleRouteDone)
    Router.events.on("routeChangeError", handleRouteDone)

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart)
      Router.events.off("routeChangeComplete", handleRouteDone)
      Router.events.off("routeChangeError", handleRouteDone)
    }
  }, [])
  return (
    <HydrationProvider>
      <Provider store={store}>
        <SessionProvider session={session}>
          <I18nextProvider i18n={i18n}>
            <ChakraProvider theme={theme}>
              <Client>
                <AuthProvider>
                  <Component {...pageProps} />
                </AuthProvider>
              </Client>
            </ChakraProvider>
          </I18nextProvider>
        </SessionProvider>
      </Provider>
    </HydrationProvider>
  )
}

export default MyApp
