import {AxiosInstance} from "axios"
import {OtpSendRequest} from "./dto/otp.dto"

export class OtpService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  public async send(data: OtpSendRequest): Promise<any> {
    const response = await this.httpClient.post("/otp/send", data, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    return response.data
  }

  public async verify(data: any): Promise<any> {
    const response = await this.httpClient.post("/otp/verify", data, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    return response.data
  }

  public async resend(data: any): Promise<any> {
    const response = await this.httpClient.post("/otp/resend", data, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    return response.data
  }
}
