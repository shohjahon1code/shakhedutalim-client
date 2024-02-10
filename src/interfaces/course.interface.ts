export interface CourseType {
  image: string
  title: string
  lessonCount: number
  totalHours: number
  level: string
  slug: string
  price: number
  reviewAvarage: number
  reviewCount: number
  author: AuthorType
}

export interface AuthorType {
  firstName: string
  lastName: string
  avatar: string
}
