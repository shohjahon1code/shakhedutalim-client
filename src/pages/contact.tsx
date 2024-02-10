import { useTranslation } from "react-i18next"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { ContactPageComponent } from "src/page-component"

const ContactPage = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("contact_page_title", { ns: "seo" })}`}
      metaDescription={`${t("contact_page_description", { ns: "seo" })}`}
    >
      <ContactPageComponent />
    </Seo>
  )
}

export default withLayout(ContactPage)
