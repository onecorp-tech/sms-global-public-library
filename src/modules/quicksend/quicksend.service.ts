import {AxiosInstance} from "axios"
import {IQuickSendRequest} from "./interfaces/quicksend.interface"
import {ERROR_MESSAGES, QUICK_SEND_URLS} from "../../utils"

export class QuickSendService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  public async send(request: IQuickSendRequest): Promise<void> {
    const url = QUICK_SEND_URLS.SEND
    const response = await this.httpClient.post(url, request, {
      headers: {Authorization: `Bearer ${this.secret}`}
    })
    if (response.status !== 201) {
      throw new Error(ERROR_MESSAGES.REQUEST_FAILED(url, response.statusText))
    }
  }
}
