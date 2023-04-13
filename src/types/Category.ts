export type Product = {
  id: number
  title: string
  imageUrl: string
  price?: number
}

export type Category = {
  id?: number
  title: string
  imageUrl?: string
  items?: Product[]
  [key: string]: any
}
