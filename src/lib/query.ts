/**
 * Query Params 
 * 
 * it will include sort and limit 
 * 
 * @param {String} sort 
 * @param {Number} limit
 * @returns
 */
export const queryParams = (sort?: string, limit?: unknown) => {
  return `?limit=${limit}&sort=${sort}`
}