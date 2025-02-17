require('dotenv').config();

const { config } = require('../dist/tests/config');
const { SmsAgentLib } = require('../dist');

describe("SmsAgentLib Integration Tests", () => {
  let smsAgent;

  beforeAll(() => {
    smsAgent = new SmsAgentLib(config.jwtSecret, config.apiBaseUrl);
  });

  test("should send OTP", async () => {
    const request = {
      sender_id: config.otp.senderId,
      country_code: config.otp.countryCode,
      recipient: config.otp.recipient,
      message: config.otp.message,
      ref_code: config.otp.refCode,
      validity: config.otp.validity,
      digit: config.otp.digit,
    };

    const response = await smsAgent.otp.send(request);
    console.log("OTP Send Response:", response);
    
    expect(response.token).toBeDefined();
    expect(response.ref_code).toBeDefined();
    expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0);
  });

  test("should verify OTP", async () => {
    const request = {
      token: config.otpVerify.token,
      otp_code: config.otpVerify.otpCode,
      ref_code: config.otpVerify.refCode,
    };

    const response = await smsAgent.otp.verify(request);
    console.log("OTP Verify Response:", response);
    
    expect(response.is_verified).toBeDefined();
  });

  test("should resend OTP", async () => {
    const request = {
      token: config.otpResend.token,
      ref_code: config.otpResend.refCode
    };

    const response = await smsAgent.otp.resend(request);
    console.log("OTP Resend Response:", response);
    
    expect(response.token).toBeDefined();
    expect(response.ref_code).toBeDefined();
    expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0);
  });
});
