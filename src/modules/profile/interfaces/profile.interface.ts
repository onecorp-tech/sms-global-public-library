export enum kyc_status {
  UNDEFINED = "UNDEFINED",
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
  REJECTED = "REJECTED"
}

export interface IUser {
  email: string
  name: string
  phone: string
  credit: number
  address?: object
  kyc_status: kyc_status
  enable: boolean
}

export interface IOptions {
  sms_max?: number
  whatsapp_max?: number
  list_max?: number
  subscriber_max?: number
  subscriber_per_list_max?: number
  segment_per_list_max?: number
  billing_cycle?: string
  sending_limit?: string
  sending_quota?: number
  sending_quota_time?: number
  sending_quota_time_unit?: string
  max_process?: number
  unsubscribe_url_required?: boolean
  create_sending_server?: boolean
  sending_servers_max?: number
  list_import?: boolean
  list_export?: boolean
  api_access?: boolean
  create_sub_account?: boolean
  delete_sms_history?: boolean
  add_previous_balance?: boolean
  sender_id_verification?: boolean
  send_spam_message?: boolean
  plain_sms?: number
  receive_plain_sms?: number
  voice_sms?: number
  receive_voice_sms?: number
  mms_sms?: number
  receive_mms_sms?: number
  whatsapp_sms?: number
  receive_whatsapp_sms?: number
  cutting_system?: boolean
  cutting_value?: number
  cutting_unit?: string
  cutting_logic?: string
  per_unit_price?: number
  sender_id?: string
  sender_id_price?: number
  sender_id_billing_cycle?: string
  sender_id_frequency_amount?: number
  sender_id_frequency_unit?: string
  quota_value?: number
  quota_base?: number
  quota_unit?: string
}

export interface IPlan {
  name: string
  description: string
  options: IOptions
}

export interface IBalance {
  credit: number
  checkBalanceAt: string
}
