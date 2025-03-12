import {AxiosInstance} from "axios"
import {CONTACT_URLS, extractData, HTTP_METHODS, httpRequest, IVoidResponse} from "../../utils"
import {ICreateContact} from "./interfaces/contact.interface"
import {IContactGroup} from "../report/interfaces/report.interface"

export class ContactService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS, request?: any): Promise<T> {
    const response = await httpRequest(this.httpClient, httpMethod, url, request, this.secret)
    return extractData<T>(response)
  }

  public async create(contactGroupUID: string, phone: string, isEnabled?: boolean): Promise<IContactGroup> {
    const request: ICreateContact = {
      phone: phone,
      is_enabled: isEnabled
    }
    return await this.sendRequest<IContactGroup>(CONTACT_URLS.CREATE(contactGroupUID), HTTP_METHODS.POST, request)
  }

  public async delete(contactGroupUID: string, contactUID: string): Promise<IVoidResponse> {
    await this.sendRequest<void>(CONTACT_URLS.DELETE(contactGroupUID, contactUID), HTTP_METHODS.DELETE)
    return {message: "Delete Contact Group successfully"}
  }
}
