export const BASE_URL = "http://localhost:3005"

export const ERROR_MESSAGES = {
  REQUEST_FAILED: (url: string, msg?: string) => `Failed to send request to ${url}${(msg && `: ${msg}`) || ""}`,
  NO_DATA_RETURNED: (url: string) => `No data returned from ${url} API`,
  INVALID_SECRET: "Warning: Secret is not provided. Some functionalities may not work as expected."
}

export const REPORT_URLS = {
  QUICK_SEND: `${BASE_URL}/report/quick-send`,
  OTP: `${BASE_URL}/report/otp`
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
