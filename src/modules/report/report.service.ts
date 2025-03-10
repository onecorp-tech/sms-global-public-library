import {AxiosInstance} from "axios"
import {ERROR_MESSAGES, extractData, handleAxiosError, HTTP_METHODS, httpRequest, REPORT_URLS} from "../../utils"
import {IPaginationOptions, IPaginatedResult} from "../../utils/interfaces/pagination.interface"
import {IMessage, IOtpMessage, IContactGroup, IContact} from "./interfaces/report.interface"

export class ReportService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  // private async sendRequest<T>(url: string, request: IPaginationOptions): Promise<IPaginatedResult<T>> {
  //   try {
  //     const response = await this.httpClient.get<{ data: IPaginatedResult<T> }>(url, {
  //       params: request,
  //       headers: { Authorization: `Bearer ${this.secret}` }
  //     });
  //     return extractData(response);
  //   } catch (error) {
  //     throw new Error(`${ERROR_MESSAGES.REQUEST_FAILED(url)}: ${handleAxiosError(error)}`);
  //   }
  // }

  // public quicksend(request: IPaginationOptions): Promise<IPaginatedResult<IMessage>> {
  //   return this.sendRequest<IMessage>(REPORT_URLS.QUICK_SEND, request);
  // }

  // public otp(request: IPaginationOptions): Promise<IPaginatedResult<IOtpMessage>> {
  //   return this.sendRequest<IOtpMessage>(REPORT_URLS.OTP, request);
  // }

  // public contactGroup(request: IPaginationOptions): Promise<IPaginatedResult<IContactGroup>> {
  //   return this.sendRequest<IContactGroup>(REPORT_URLS.CONTACT_GROUP, request);
  // }

  // public contact(request: IPaginationOptions): Promise<IPaginatedResult<IContact>> {
  //   return this.sendRequest<IContact>(REPORT_URLS.CONTACT, request);
  // }

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS, request?: any): Promise<IPaginatedResult<T>> {
    const response = await httpRequest(this.httpClient, httpMethod, url, request, this.secret)
    return extractData<IPaginatedResult<T>>(response)
  }

  public async quicksend(request: IPaginationOptions): Promise<IPaginatedResult<IMessage>> {
    return await this.sendRequest<IMessage>(REPORT_URLS.QUICK_SEND, HTTP_METHODS.GET, request)
  }

  public async otp(request: IPaginationOptions): Promise<IPaginatedResult<IOtpMessage>> {
    return await this.sendRequest<IOtpMessage>(REPORT_URLS.OTP, HTTP_METHODS.GET, request)
  }

  public async contactGroup(request: IPaginationOptions): Promise<IPaginatedResult<IContactGroup>> {
    return await this.sendRequest<IContactGroup>(REPORT_URLS.CONTACT_GROUP, HTTP_METHODS.GET, request)
  }

  public async contact(contactGroupUID: string, request: IPaginationOptions): Promise<IPaginatedResult<IContact>> {
    return await this.sendRequest<IContact>(REPORT_URLS.CONTACT(contactGroupUID), HTTP_METHODS.GET, request)
  }
}
