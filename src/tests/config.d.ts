export declare const config: {
    jwtSecret: string;
    apiBaseUrl: string;
    otp: {
        senderId: string;
        countryCode: string;
        recipient: string;
        message: string;
        refCode: string;
        validity: number;
        digit: number;
    };
    otpVerify: {
        token: string;
        otpCode: number;
        refCode: string;
    };
    otpResend: {
        token: string;
        refCode: string;
    };
};
//# sourceMappingURL=config.d.ts.map