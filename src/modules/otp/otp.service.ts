import {AxiosInstance} from "axios"
import {OtpResendRequest, OtpSendRequest, OtpSendResponse, OtpVerifyResponse, VerifyOtpRequest} from "./interfaces/otp.interface"
import {ERROR_MESSAGES, extractData, HTTP_METHODS, httpRequest, OTP_URLS} from "../../utils"

export class OtpService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS, request: any): Promise<T> {
    const response = await httpRequest(this.httpClient, httpMethod, url, request, this.secret)
    const result = extractData<T>(response)
    if (!result) {
      throw new Error(ERROR_MESSAGES.NO_DATA_RETURNED(url))
    }
    return result
  }

  public async send(senderId: string, countryCode: string, recipient: string, message?: string, refCode?: string, digit?: number, validity?: number): Promise<OtpSendResponse> {
    const request: OtpSendRequest = {
      sender_id: senderId,
      country_code: countryCode,
      recipient: recipient,
      message: message,
      ref_code: refCode,
      digit: digit,
      validity: validity
    }
    return await this.sendRequest<OtpSendResponse>(OTP_URLS.SEND, HTTP_METHODS.POST, request)
  }

  public async verify(token: string, otpCode: number, refCode: string): Promise<OtpVerifyResponse> {
    const request: VerifyOtpRequest = {
      token: token,
      otp_code: otpCode,
      ref_code: refCode
    }
    return await this.sendRequest<OtpVerifyResponse>(OTP_URLS.VERIFY, HTTP_METHODS.POST, request)
  }

  public async resend(token: string, refCode: string, message?: string, digit?: number, validity?: number): Promise<OtpSendResponse> {
    const request: OtpResendRequest = {
      token: token,
      ref_code: refCode,
      digit: digit,
      validity: validity,
      message: message
    }
    return await this.sendRequest<OtpSendResponse>(OTP_URLS.RESEND, HTTP_METHODS.POST, request)
  }
}
