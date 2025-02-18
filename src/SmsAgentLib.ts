import {createHttpClient} from "./client/httpClient"
import {OtpService} from "./modules/otp/otp.service"

export class SmsAgentLib {
  private secret: string
  private baseUrl: string
  private httpClient: ReturnType<typeof createHttpClient>

  public otp: OtpService

  constructor(secret: string, baseUrl: string = "https://api.dev.sms.onesiamsoft.com") {
    if (!secret || secret.trim() === "") {
      throw new Error("A valid secret is required!")
    }
    this.secret = secret
    this.baseUrl = baseUrl
    this.httpClient = createHttpClient(this.baseUrl)

    this.otp = new OtpService(this.httpClient, this.secret)
  }
}
