import create from 'zustand'
import { get } from '../../lib/interceptors'


export interface ProductData {
  id: number,
  title: string,
  price: unknown,
  category: string,
  description: string,
  image: string
}

interface ProductState {
  product: ProductData[],
  getProduct: () => void
}

export const useProductStore = create<ProductState>((set) => ({
  product: [],
  getProduct: async () => {
    const productData = await get(`products`)
    set({ product: productData.data })
  }
}))