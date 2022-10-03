import create from 'zustand'
import { ProductData } from '../../interfaces/Api'
import { get } from '../../lib/interceptors'

interface ProductState {
  product: ProductData[],
  getProduct: () => void
}

export const useProductStore = create<ProductState>((set) => ({
  product: [],
  getProduct: async () => {
    const productData = await get(`products`)
    set({ product: await productData.data })
  }
}))