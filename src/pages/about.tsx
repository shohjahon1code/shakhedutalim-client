import { useTranslation } from "react-i18next"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { AboutPageComponent } from "src/page-component"

const Aboutpage = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("about_page_title", { ns: "seo" })}`}
      metaDescription={`${t("about_page_description", { ns: "seo" })}`}
    >
      <AboutPageComponent />
    </Seo>
  )
}

export default withLayout(Aboutpage)
