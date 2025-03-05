import {AxiosInstance} from "axios"
import {IBalance, IPlan, IUser} from "./interfaces/profile.interface"
import {ERROR_MESSAGES, extractData, handleAxiosError, PROFILE_URLS} from "../../utils"

export class ProfileService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string): Promise<T> {
    try {
      const response = await this.httpClient.get(url, {
        headers: {Authorization: `Bearer ${this.secret}`}
      })
      return extractData(response);      
    } catch (error) {
      throw new Error(`${ERROR_MESSAGES.REQUEST_FAILED(url, handleAxiosError(error))}`)
    }
  }

  public me(): Promise<IUser> {
    return this.sendRequest<IUser>(PROFILE_URLS.ME)
  }

  public plan(): Promise<IPlan> {
    return this.sendRequest<IPlan>(PROFILE_URLS.PLAN)
  }

  public balance(): Promise<IBalance> {
    return this.sendRequest<IBalance>(PROFILE_URLS.BALANCE)
  }
}
