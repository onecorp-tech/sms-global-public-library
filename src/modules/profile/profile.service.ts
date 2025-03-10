import {AxiosInstance} from "axios"
import {IBalance, IPlan, IUser} from "./interfaces/profile.interface"
import {extractData, HTTP_METHODS, httpRequest, PROFILE_URLS} from "../../utils"

export class ProfileService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS): Promise<T> {
    const response = await httpRequest(this.httpClient, httpMethod, url, null, this.secret)
    return extractData<T>(response)
  }

  public async me(): Promise<IUser> {
    return await this.sendRequest<IUser>(PROFILE_URLS.ME, HTTP_METHODS.GET)
  }

  public async plan(): Promise<IPlan> {
    return await this.sendRequest<IPlan>(PROFILE_URLS.PLAN, HTTP_METHODS.GET)
  }

  public async balance(): Promise<IBalance> {
    return await this.sendRequest<IBalance>(PROFILE_URLS.BALANCE, HTTP_METHODS.GET)
  }
}
