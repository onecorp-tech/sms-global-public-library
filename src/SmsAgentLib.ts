import {createHttpClient} from "./client/httpClient"
import {OtpService} from "./modules/otp/otp.service"
import {ProfileService} from "./modules/profile/profile.service"

export class SmsAgentLib {
  private secret: string
  private baseUrl: string
  private httpClient: ReturnType<typeof createHttpClient>

  public otp: OtpService
  public profile: ProfileService

  constructor(secret: string, baseUrl: string = "http://localhost:3000") {
    if (!secret || secret.trim() === "") {
      throw new Error("A valid secret is required!")
    }
    this.secret = secret
    this.baseUrl = baseUrl
    this.httpClient = createHttpClient(this.baseUrl)

    this.otp = new OtpService(this.httpClient, this.secret)
    this.profile = new ProfileService(this.httpClient, this.secret)
  }
}
