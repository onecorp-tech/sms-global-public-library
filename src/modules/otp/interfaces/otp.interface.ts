export interface OtpSendRequest {
  sender_id: string
  country_code: string
  recipient: string
  message?: string
  ref_code?: string
  digit?: number
  validity?: number
}

export interface VerifyOtpRequest {
  token: string
  otp_code: number
  ref_code: string
}

export interface OtpResendRequest {
  token: string
  ref_code: string
  digit?: number
  validity?: number
  message?: string
}

export interface OtpVerifyResponse {
  is_verified: boolean
  message: string
}

export interface OtpSendResponse {
  token: string
  ref_code: string
  valid_time: Date
}
