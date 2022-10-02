import { get } from '../../lib/interceptors'

export const fetchData = async () => {
  return await get(`products`)
}