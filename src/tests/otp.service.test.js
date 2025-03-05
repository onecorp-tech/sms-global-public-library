"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const axios_1 = __importDefault(require("axios"));
const otp_service_1 = require("../src/modules/otp/otp.service");
describe("OtpService Integration Tests", () => {
    let otpService;
    beforeAll(() => {
        const httpClient = axios_1.default.create({ baseURL: config_1.config.apiBaseUrl });
        otpService = new otp_service_1.OtpService(httpClient, config_1.config.jwtSecret);
    });
    test("should send OTP", async () => {
        const request = {
            sender_id: config_1.config.otp.senderId,
            country_code: config_1.config.otp.countryCode,
            recipient: config_1.config.otp.recipient,
            message: config_1.config.otp.message,
            ref_code: config_1.config.otp.refCode,
            validity: config_1.config.otp.validity,
            digit: config_1.config.otp.digit
        };
        const response = await otpService.send(request);
        console.log("OTP Send Response:", response);
        expect(response.token).toBeDefined();
        expect(response.ref_code).toBeDefined();
        expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0);
    });
    test("should verify OTP", async () => {
        const request = {
            token: config_1.config.otpVerify.token,
            otp_code: config_1.config.otpVerify.otpCode,
            ref_code: config_1.config.otpVerify.refCode
        };
        const response = await otpService.verify(request);
        console.log("OTP Verify Response:", response);
        expect(response.is_verified).toBeDefined();
    });
    test("should resend OTP", async () => {
        const request = {
            token: config_1.config.otpResend.token,
            ref_code: config_1.config.otpResend.refCode
        };
        const response = await otpService.resend(request);
        console.log("OTP Resend Response:", response);
        expect(response.token).toBeDefined();
        expect(response.ref_code).toBeDefined();
        expect(new Date(response.valid_time).getTime()).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=otp.service.test.js.map