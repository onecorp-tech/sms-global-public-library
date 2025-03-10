export const BASE_URL = "https://api.dev.sms.onesiamsoft.com"

export const ERROR_MESSAGES = {
  REQUEST_FAILED: (url: string, msg?: string) => `Failed to send request to ${url}${(msg && `: ${msg}`) || ""}`,
  NO_DATA_RETURNED: (url: string) => `No data returned from ${url} API`,
  INVALID_SECRET: "Warning: Secret is not provided. Some functionalities may not work as expected."
}

export const REPORT_URLS = {
  QUICK_SEND: `${BASE_URL}/report/quick-send`,
  OTP: `${BASE_URL}/report/otp`,
  CONTACT_GROUP: `${BASE_URL}/contact-group`,
  CONTACT: (contract_group_uid: string) => `${BASE_URL}/contact-group/${contract_group_uid}/contact`
}

export const OTP_URLS = {
  SEND: `${BASE_URL}/otp/send`,
  VERIFY: `${BASE_URL}/otp/verify`,
  RESEND: `${BASE_URL}/otp/resend`
}

export const PROFILE_URLS = {
  ME: `${BASE_URL}/profile/me`,
  PLAN: `${BASE_URL}/profile/plan`,
  BALANCE: `${BASE_URL}/profile/balance`
}

export const QUICK_SEND_URLS = {
  SEND: `${BASE_URL}/quicksend/send`
}

export const CONTACT_GROUP_URLS = {
  CREATE: `${BASE_URL}/contact-group`,
  DELETE: (uid: string) => `${BASE_URL}/contact-group/${uid}`
}

export const CONTACT_URLS = {
  CREATE: (contact_group_uid: string) => `${BASE_URL}/contact-group/${contact_group_uid}/contact`,
  DELETE: (contact_group_uid: string, contact_uid: string) => `${BASE_URL}/contact-group/${contact_group_uid}/contact/${contact_uid}`
}

export enum HTTP_METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete"
}
