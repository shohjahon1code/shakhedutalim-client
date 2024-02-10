import { gql, request } from "graphql-request"
import { ArticleType } from "src/interfaces/article.interface"
import { Language } from "src/interfaces/constants.interface"

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const Articles = {
  getArticles: async (lng: Language) => {
    const query = gql`
      query GetArticles($lng: Language) {
        articles(where: { language: $lng }) {
          id
          createdAt
          title
          slug
          excerpt
          image {
            url
          }
          author {
            avatar {
              url
            }
            name
          }
          description {
            text
          }
        }
      }
    `
    const result = await request<{ articles: ArticleType[] }>(
      graphqlApi,
      query,
      {
        lng,
      }
    )
    return result.articles
  },
  getDetailedArticles: async (slug: String) => {
    const query = gql`
      query GetSingleArticles($slug: String!) {
        article(where: { slug: $slug }) {
          id
          createdAt
          title
          slug
          excerpt
          image {
            url
          }
          author {
            avatar {
              url
            }
            name
          }
          description {
            text
            raw
          }
          language
        }
      }
    `
    const result = await request<{ article: ArticleType }>(graphqlApi, query, {
      slug,
    })
    return result.article
  },
}
