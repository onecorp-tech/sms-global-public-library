import * as dotenv from "dotenv"
dotenv.config()

export const config = {
  jwtSecret: process.env.JWT_SECRET || "",
  apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3000",
  otp: {
    senderId: process.env.OTP_SENDER_ID || "",
    countryCode: process.env.OTP_COUNTRY_CODE || "",
    recipient: process.env.OTP_RECIPIENT || "",
    message: process.env.OTP_MESSAGE || "",
    refCode: process.env.OTP_REF_CODE || "",
    validity: process.env.OTP_VALIDITY ? parseInt(process.env.OTP_VALIDITY, 10) : 5,
    digit: process.env.OTP_DIGIT ? parseInt(process.env.OTP_DIGIT, 10) : 4
  },
  otpVerify: {
    token: process.env.OTP_VERIFY_TOKEN || "",
    otpCode: process.env.OTP_CODE ? parseInt(process.env.OTP_CODE) : 0,
    refCode: process.env.OTP_VERIFY_REF_CODE || ""
  },
  otpResend: {
    token: process.env.OTP_RESEND_TOKEN || "",
    refCode: process.env.OTP_RESEND_REF_CODE || ""
  }
}
