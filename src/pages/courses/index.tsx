import { useTranslation } from "react-i18next"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { CoursesPageComponent } from "src/page-component"

const Courses = () => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("course_page_title", { ns: "seo" })}`}
      metaDescription={`${t("course_page_description", { ns: "seo" })}`}
    >
      <CoursesPageComponent />
    </Seo>
  )
}

export default withLayout(Courses)
