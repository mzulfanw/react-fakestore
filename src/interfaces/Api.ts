export interface ProductData {
  id: number,
  title: string,
  price: unknown,
  category: string,
  description: string,
  image: string
}


export interface Payload {
  limit: number,
  sort: string
}
