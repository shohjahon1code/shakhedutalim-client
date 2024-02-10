import { useTranslation } from "react-i18next"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { HomepageComponent } from "src/page-component"

const Home = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("main_page_title", { ns: "seo" })}`}
      metaDescription={`${t("main_page_description", { ns: "seo" })}`}
    >
      <HomepageComponent />
    </Seo>
  )
}

export default withLayout(Home)
