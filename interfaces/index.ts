export type User = {
  name: string
  picture: string
  sub: string
  email?: string
}

export type Post = {
  slug?: string
  title?: string
  author?: string
  date?: Date
  content?: string
  excerpt?: string
  [key: string]: any
}
