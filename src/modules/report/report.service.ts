import {AxiosInstance} from "axios"
import {extractData, HTTP_METHODS, httpRequest, REPORT_URLS} from "../../utils"
import {IPaginationOptions, IPaginatedResult} from "../../utils/interfaces/pagination.interface"
import {IMessage, IOtpMessage, IContactGroup, IContact} from "./interfaces/report.interface"

export class ReportService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS, request?: any): Promise<IPaginatedResult<T>> {
    const response = await httpRequest(this.httpClient, httpMethod, url, request, this.secret)
    return extractData<IPaginatedResult<T>>(response)
  }

  public async quicksend(request: IPaginationOptions): Promise<IPaginatedResult<IMessage>> {
    return await this.sendRequest<IMessage>(REPORT_URLS.QUICK_SEND, HTTP_METHODS.GET, request)
  }

  public async otp(page?: number, limit?: number, cursor?: number, order?: string, sort?: "asc" | "desc", search?: string): Promise<IPaginatedResult<IOtpMessage>> {
    const request: IPaginationOptions = {
      page: page,
      limit: limit,
      cursor: cursor,
      order: order,
      sort: sort,
      search: search
    }
    return await this.sendRequest<IOtpMessage>(REPORT_URLS.OTP, HTTP_METHODS.GET, request)
  }

  public async contactGroup(page?: number, limit?: number, cursor?: number, order?: string, sort?: "asc" | "desc", search?: string): Promise<IPaginatedResult<IContactGroup>> {
    const request: IPaginationOptions = {
      page: page,
      limit: limit,
      cursor: cursor,
      order: order,
      sort: sort,
      search: search
    }
    return await this.sendRequest<IContactGroup>(REPORT_URLS.CONTACT_GROUP, HTTP_METHODS.GET, request)
  }

  public async contact(contactGroupUID: string, page?: number, limit?: number, cursor?: number, order?: string, sort?: "asc" | "desc", search?: string): Promise<IPaginatedResult<IContact>> {
    const request: IPaginationOptions = {
      page: page,
      limit: limit,
      cursor: cursor,
      order: order,
      sort: sort,
      search: search
    }
    return await this.sendRequest<IContact>(REPORT_URLS.CONTACT(contactGroupUID), HTTP_METHODS.GET, request)
  }
}
