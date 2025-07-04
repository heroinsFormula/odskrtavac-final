export interface Author {
  full_name: string
  slug?: string
  country: string
  alt_name?: string
  description?: string
}

export interface Book {
  id: number
  author: Author
  author_name: string
  title_name: string
  publish_year: number
  country: string
  literary_type: 'Próza' | 'Poezie' | 'Drama'
  is_read_by_user: boolean
  slug: string
}

export interface BooklistAttributes {
  world_and_czech_pre18th_century: number
  world_and_czech_19th_century: number
  world20th_and21st_century: number
  czech20th_and21st_century: number
  prose: number
  poetry: number
  drama: number
  total: number
  recurring_authors: string[]
}

export interface Country {
  name: string
  // country_flag
}
