export interface ArticleType {
  createdAt: string
  id: string
  excerpt: string
  image: [{ url: string }]
  slug: string
  title: string
  author: AuthorTypeProps
  description: {
    text: string
    raw: []
  }
  language: string
}

export interface AuthorTypeProps {
  name: string
  avatar: {
    url: string
  }
}
