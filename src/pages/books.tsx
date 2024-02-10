import { useTranslation } from "react-i18next"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { BooksPageComponent } from "src/page-component"

const Books = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("books_page_title", { ns: "seo" })}`}
      metaDescription={`${t("books_page_description", { ns: "seo" })}`}
    >
      <BooksPageComponent />
    </Seo>
  )
}

export default withLayout(Books)
