export interface IPaginationOptions {
  page?: number
  limit?: number
  cursor?: number | null
  order?: string | null
  sort?: "asc" | "desc"
  search?: string | null
}

export interface IMessage {
  from: string
  to: string
  message: string
  cost: number
  status: string
  status_dr: string | null
  created_at: string
}

export interface IOtpMessage {
  from: string
  to: string
  otp: string
  ref_code: string
  status_otp: string
  otp_valid_time: string
  created_at: string
}

export interface IReport {
  items: (IMessage | IOtpMessage)[]
  total: number
  totalPage: number
  page: number
  limit: number
}
