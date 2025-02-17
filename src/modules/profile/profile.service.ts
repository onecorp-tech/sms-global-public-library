import {AxiosInstance} from "axios"

export class ProfileService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  public async me(): Promise<any> {
    const response = await this.httpClient.get("/profile/me", {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    return response.data
  }

  public async plan(): Promise<any> {
    const response = await this.httpClient.get("/profile/plan", {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    return response.data
  }

  public async balance(): Promise<any> {
    const response = await this.httpClient.get("/profile/balance", {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    return response.data
  }
}
