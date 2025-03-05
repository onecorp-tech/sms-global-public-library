import {AxiosInstance} from "axios"
import {OtpResendRequest, OtpSendRequest, OtpSendResponse, OtpVerifyResponse, VerifyOtpRequest} from "./interfaces/otp.interface"
import {ERROR_MESSAGES, OTP_URLS} from "../../utils"

export class OtpService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async postRequest<T>(url: string, request: any): Promise<T> {
    const response = await this.httpClient.post(url, request, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    const data = response.data?.data
    if (!data) {
      throw new Error(ERROR_MESSAGES.NO_DATA_RETURNED(url))
    }
    return data
  }

  public async send(request: OtpSendRequest): Promise<OtpSendResponse> {
    return this.postRequest<OtpSendResponse>(OTP_URLS.SEND, request)
  }

  public async verify(request: VerifyOtpRequest): Promise<OtpVerifyResponse> {
    return this.postRequest<OtpVerifyResponse>(OTP_URLS.VERIFY, request)
  }

  public async resend(request: OtpResendRequest): Promise<OtpSendResponse> {
    return this.postRequest<OtpSendResponse>(OTP_URLS.RESEND, request)
  }
}
