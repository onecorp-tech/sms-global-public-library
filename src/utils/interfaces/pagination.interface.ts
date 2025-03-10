export interface IPaginationOptions {
  page?: number
  limit?: number
  cursor?: number | null
  order?: string | null
  sort?: "asc" | "desc"
  search?: string | null
}

export interface IPaginatedResult<T> {
  items: T[]
  total: number
  totalPage: number
  page: number
  limit: number
}
