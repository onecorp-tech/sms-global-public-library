import {AxiosInstance} from "axios"
import {OtpResendRequest, OtpSendRequest, OtpSendResponse, OtpVerifyResponse, VerifyOtpRequest} from "./dto/otp.dto"

export class OtpService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  public async send(request: OtpSendRequest): Promise<OtpSendResponse> {
    const response = await this.httpClient.post("/otp/send", request, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    const data = response.data?.data
    if (!data) {
      throw new Error("No data returned from OTP send API")
    }
    return data
  }

  public async verify(request: VerifyOtpRequest): Promise<OtpVerifyResponse> {
    const response = await this.httpClient.post("/otp/verify", request, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    const data = response.data?.data
    if (!data) {
      throw new Error("No data returned from OTP verify API")
    }
    return data
  }

  public async resend(request: OtpResendRequest): Promise<OtpSendResponse> {
    const response = await this.httpClient.post("/otp/resend", request, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    const data = response.data?.data
    if (!data) {
      throw new Error("No data returned from OTP resend API")
    }
    return data
  }
}
