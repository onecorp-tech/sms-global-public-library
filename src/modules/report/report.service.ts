import {AxiosInstance} from "axios"
import {IPaginationOptions, IReport} from "./interfaces/report.interface"
import {ERROR_MESSAGES, REPORT_URLS} from "../../utils"

export class ReportService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest(url: string, request: IPaginationOptions): Promise<IReport> {
    try {
      const response = await this.httpClient.get<IReport>(url, {
        params: request,
        headers: {Authorization: `Bearer ${this.secret}`}
      })
      return response.data
    } catch (error) {
      throw new Error(ERROR_MESSAGES.REQUEST_FAILED(url))
    }
  }

  public quicksend(request: IPaginationOptions): Promise<IReport> {
    return this.sendRequest(REPORT_URLS.QUICK_SEND, request)
  }

  public otp(request: IPaginationOptions): Promise<IReport> {
    return this.sendRequest(REPORT_URLS.OTP, request)
  }
}
