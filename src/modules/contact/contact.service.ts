import {AxiosInstance} from "axios"
import {CONTACT_GROUP_URLS, CONTACT_URLS, ERROR_MESSAGES, extractData, HTTP_METHODS, httpRequest, IPaginationOptions, IVoidResponse, OTP_URLS, REPORT_URLS} from "../../utils"
import {ICreateContact, IDeleteContact} from "./interfaces/contact.interface"
import {IContactGroup} from "../report/interfaces/report.interface"

export class ContactService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS, request?: any): Promise<T> {
    const response = await httpRequest(this.httpClient, httpMethod, url, request, this.secret)
    return extractData<T>(response)
  }

  public async create(contactGroupUID: string, request: ICreateContact): Promise<IContactGroup> {
    return await this.sendRequest<IContactGroup>(CONTACT_URLS.CREATE(contactGroupUID), HTTP_METHODS.POST, request)
  }

  public async delete(request: IDeleteContact): Promise<IVoidResponse> {
    await this.sendRequest<void>(CONTACT_URLS.DELETE(request.contact_group_uid, request.contact_uid), HTTP_METHODS.DELETE)
    return {message: "Delete Contact Group successfully"}
  }
}
