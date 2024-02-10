import React from "react"
import { useTranslation } from "react-i18next"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { FaqPageComponent } from "src/page-component"

const FaqPage = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("faq_page_title", { ns: "seo" })}`}
      metaDescription={`${t("faq_page_description", { ns: "seo" })}`}
    >
      <FaqPageComponent />
    </Seo>
  )
}

export default withLayout(FaqPage)
