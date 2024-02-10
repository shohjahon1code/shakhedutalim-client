import { useTranslation } from "react-i18next"
import Seo from "src/layouts/seo/seo"
import { AuthPageComponent } from "src/page-component"

const AuthPage = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("auth_page_title", { ns: "seo" })}`}
      metaDescription={`${t("auth_page_description", { ns: "seo" })}`}
    >
      <AuthPageComponent />
    </Seo>
  )
}

export default AuthPage
