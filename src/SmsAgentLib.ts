import {createHttpClient} from "./utils/client/httpClient"
import {OtpService, ProfileService, QuickSendService, ReportService} from "./modules"
import {BASE_URL, ERROR_MESSAGES} from "./utils/constants"

export class SmsAgentLib {
  private secret: string
  private baseUrl: string
  private httpClient: ReturnType<typeof createHttpClient>

  public otp: OtpService
  public quicksend: QuickSendService
  public report: ReportService
  public profile: ProfileService

  constructor(secret: string = "", baseUrl: string = BASE_URL) {
    if (!secret || secret.trim() === "") {
      console.warn(ERROR_MESSAGES.INVALID_SECRET)
    }
    this.secret = secret
    this.baseUrl = baseUrl
    this.httpClient = createHttpClient(this.baseUrl)

    this.otp = new OtpService(this.httpClient, this.secret)
    this.quicksend = new QuickSendService(this.httpClient, this.secret)
    this.report = new ReportService(this.httpClient, this.secret)
    this.profile = new ProfileService(this.httpClient, this.secret)
  }
}
