export const BASE_URL = "https://api.dev.sms.onesiamsoft.com"

export const ERROR_MESSAGES = {
  REQUEST_FAILED: (url: string, msg?: string) => `Failed to send request to ${url}${(msg && `: ${msg}`) || ""}`,
  NO_DATA_RETURNED: (url: string) => `No data returned from ${url} API`,
  INVALID_SECRET: "A valid secret is required!"
}

export const REPORT_URLS = {
  QUICK_SEND: "/report/quick-send",
  OTP: "/report/otp"
}

export const OTP_URLS = {
  SEND: "/otp/send",
  VERIFY: "/otp/verify",
  RESEND: "/otp/resend"
}

export const PROFILE_URLS = {
  ME: "/profile/me",
  PLAN: "/profile/plan",
  BALANCE: "/profile/balance"
}

export const QUICK_SEND_URLS = {
  SEND: "/quicksend/send"
}
