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
    const request: OtpSendRequest = {
      sender_id: config.otp.senderId,
      country_code: config.otp.countryCode,
      recipient: config.otp.recipient,
      message: config.otp.message,
      ref_code: config.otp.refCode,
      validity: config.otp.validity,
      digit: config.otp.digit
    }

    const response = await otpService.send(request)
    console.log("OTP Send Response:", response)

    expect(response.token).toBeDefined()
    expect(response.ref_code).toBeDefined()
    expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0)
  })

  test("should verify OTP", async () => {
    const request: VerifyOtpRequest = {
      token: config.otpVerify.token,
      otp_code: config.otpVerify.otpCode,
      ref_code: config.otpVerify.refCode
    }

    const response = await otpService.verify(request)
    console.log("OTP Verify Response:", response)

    expect(response.is_verified).toBeDefined()
  })

  test("should resend OTP", async () => {
    const request: OtpResendRequest = {
      token: config.otpResend.token,
      ref_code: config.otpResend.refCode
    }

    const response = await otpService.resend(request)
    console.log("OTP Resend Response:", response)

    expect(response.token).toBeDefined()
    expect(response.ref_code).toBeDefined()
    expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0)
  })
})
