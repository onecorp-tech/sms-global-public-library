import {AxiosInstance} from "axios"
import {IBalance, IPlan, IUser} from "./interfaces/profile.interface"
import {ERROR_MESSAGES, PROFILE_URLS} from "../../utils"

export class ProfileService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async fetchData<T>(url: string): Promise<T> {
    const response = await this.httpClient.get(url, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    const data = response.data?.data
    if (!data) {
      throw new Error(ERROR_MESSAGES.NO_DATA_RETURNED(url))
    }
    return data
  }

  public me(): Promise<IUser> {
    return this.fetchData<IUser>(PROFILE_URLS.ME)
  }

  public plan(): Promise<IPlan> {
    return this.fetchData<IPlan>(PROFILE_URLS.PLAN)
  }

  public balance(): Promise<IBalance> {
    return this.fetchData<IBalance>(PROFILE_URLS.BALANCE)
  }
}
