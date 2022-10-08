/* eslint-disable no-unused-vars */
import create from 'zustand'
import { ProductData } from '@/interfaces/Api'
import { get } from '../../lib/interceptors'
import { queryParams } from '@/lib/query'
import { Payload } from '@/types/types'

interface ProductState {
  product: ProductData[],
  detail: object,
  getProduct: (payload: Payload) => void,
  getDetailProduct: (id: string) => void
}


export const useProductStore = create<ProductState>((set) => ({
  product: [],
  detail: {},
  getProduct: async ({ limit, sort }) => {
    const productData = await get(`products${queryParams(sort, limit)}`)
    set({ product: await productData.data })
  },
  async getDetailProduct(id) {
    const detail = await get(`products/${id}`)
    set({ detail: await detail.data })
  }
}))