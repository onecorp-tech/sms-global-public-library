export interface OtpSendRequest {
  sender_id: string
  country_code: string
  recipient: string
  message: string
  ref_code: string
  digit: number
  validity: number
}
