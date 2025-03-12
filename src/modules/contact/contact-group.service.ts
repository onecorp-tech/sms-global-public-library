import {AxiosInstance} from "axios"
import {CONTACT_GROUP_URLS, extractData, HTTP_METHODS, httpRequest, IVoidResponse} from "../../utils"
import {ICreateContactGroup} from "./interfaces/contact-group.interface"
import {IContactGroup} from "../report/interfaces/report.interface"

export class ContactGroupService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS, request?: any): Promise<T> {
    const response = await httpRequest(this.httpClient, httpMethod, url, request, this.secret)
    return extractData<T>(response)
  }

  public async create(countryCode: string, name: string, isEnabled: boolean): Promise<IContactGroup> {
    const requst: ICreateContactGroup = {country_code: countryCode, name: name, is_enabled: isEnabled}
    return await this.sendRequest<IContactGroup>(CONTACT_GROUP_URLS.CREATE, HTTP_METHODS.POST, requst)
  }

  public async delete(contactGroupUID: string): Promise<IVoidResponse> {
    await this.sendRequest<void>(CONTACT_GROUP_URLS.DELETE(contactGroupUID), HTTP_METHODS.DELETE)
    return {message: "Delete Contact Group successfully"}
  }
}
