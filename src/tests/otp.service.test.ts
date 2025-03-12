import {OtpResendRequest, OtpSendRequest, OtpService, VerifyOtpRequest} from "../modules"
import {config} from "./config"
import axios from "axios"

describe("OtpService Integration Tests", () => {
  let otpService: OtpService

  beforeAll(() => {
    const httpClient = axios.create({baseURL: config.apiBaseUrl})
    otpService = new OtpService(httpClient, config.jwtSecret)
  })

  test("should send OTP", async () => {
    const response = await otpService.send(config.otp.senderId, config.otp.countryCode, config.otp.recipient, config.otp.message, config.otp.refCode, config.otp.validity, config.otp.digit)
    console.log("OTP Send Response:", response)

    expect(response.token).toBeDefined()
    expect(response.ref_code).toBeDefined()
    expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0)
  })

  test("should verify OTP", async () => {
    const response = await otpService.verify(config.otpVerify.token, config.otpVerify.otpCode, config.otpVerify.refCode)
    console.log("OTP Verify Response:", response)

    expect(response.is_verified).toBeDefined()
  })

  test("should resend OTP", async () => {
    const request: OtpResendRequest = {
      token: config.otpResend.token,
      ref_code: config.otpResend.refCode
    }

    const response = await otpService.resend(config.otpResend.token, config.otpResend.refCode)
    console.log("OTP Resend Response:", response)

    expect(response.token).toBeDefined()
    expect(response.ref_code).toBeDefined()
    expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0)
  })
})
