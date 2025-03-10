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

export interface IContactGroup {
  uid: string
  name: string
  country_code_uid: string
  contact_amount: number
  is_enabled: boolean
  created_at: string
}

export interface IContact {
  uid: string
  country_code_uid: string
  phone: string
  is_enabled: boolean
  created_at: string
}
