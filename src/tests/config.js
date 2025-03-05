"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
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
};
//# sourceMappingURL=config.js.map