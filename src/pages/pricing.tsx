import React from "react"
import { useTranslation } from "react-i18next"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { PricingPageComponent } from "src/page-component"

const Pricingpage = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("pricing_page_title", { ns: "seo" })}`}
      metaDescription={`${t("pricing_page_description", { ns: "seo" })}`}
    >
      <PricingPageComponent />
    </Seo>
  )
}

export default withLayout(Pricingpage)
