import create from 'zustand'
import { ProductData } from '@/interfaces/Api'
import { get } from '../../lib/interceptors'
import { queryParams } from '@/lib/query'
import { Payload } from '@/types/types'

interface ProductState {
  product: ProductData[],
  // eslint-disable-next-line no-unused-vars
  getProduct: (payload: Payload) => void
}


export const useProductStore = create<ProductState>((set) => ({
  product: [],
  getProduct: async ({ limit, sort }) => {

    const productData = await get(`products${queryParams(sort, limit)}`)
    set({ product: await productData.data })
  }
}))