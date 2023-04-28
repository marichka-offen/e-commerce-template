export type Product = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type CartProduct = Product & { quantity: number }

export type Category = {
  id?: number
  title: string
  imageUrl: string
  items: Product[]
}

export type CategoryMap = {
  [key: string]: Product[]
}
