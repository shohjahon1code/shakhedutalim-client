import { GetServerSideProps } from "next"
import { useTranslation } from "react-i18next"
import { ArticleType } from "src/interfaces/article.interface"
import { Language } from "src/interfaces/constants.interface"
import { withLayout } from "src/layouts/layout"
import Seo from "src/layouts/seo/seo"
import { ArticlePageComponent } from "src/page-component"
import { Articles } from "src/services/article.service"

const ArticlesPage = ({ articles }: ArticlePageProps) => {
  const { t } = useTranslation()
  return (
    <Seo
      metaTitle={`Shakhedutalim | ${t("article_page_title", { ns: "seo" })}`}
      metaDescription={`${t("article_page_description", { ns: "seo" })}`}
    >
      <ArticlePageComponent articles={articles} />
    </Seo>
  )
}

export default withLayout(ArticlesPage)

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async ({
  req,
}) => {
  const lng: Language = req.cookies.i18next as Language
  const articles = await Articles.getArticles(lng)
  return {
    props: {
      articles,
    },
  }
}

interface ArticlePageProps extends Record<string, unknown> {
  articles: ArticleType[]
}
