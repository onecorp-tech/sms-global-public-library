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

  public async send(request: OtpSendRequest): Promise<OtpSendResponse> {
    return await this.sendRequest<OtpSendResponse>(OTP_URLS.SEND, HTTP_METHODS.POST, request)
  }

  public async verify(request: VerifyOtpRequest): Promise<OtpVerifyResponse> {
    return await this.sendRequest<OtpVerifyResponse>(OTP_URLS.VERIFY, HTTP_METHODS.POST, request)
  }

  public async resend(request: OtpResendRequest): Promise<OtpSendResponse> {
    return await this.sendRequest<OtpSendResponse>(OTP_URLS.RESEND, HTTP_METHODS.POST, request)
  }
}
