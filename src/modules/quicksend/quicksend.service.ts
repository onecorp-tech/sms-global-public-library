import {AxiosInstance} from "axios"
import {IQuickSendRequest} from "./interfaces/quicksend.interface"
import {ERROR_MESSAGES, handleAxiosError, QUICK_SEND_URLS} from "../../utils"

export class QuickSendService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  public async send(request: IQuickSendRequest): Promise<{message: string}> {
    const url = QUICK_SEND_URLS.SEND
    try {
      const response = await this.httpClient.post(url, request, {
        headers: {Authorization: `Bearer ${this.secret}`}
      })
      if (response.status !== 201) {
        throw new Error(ERROR_MESSAGES.REQUEST_FAILED(url, response.statusText))
      }
      return {message: "Message has been sent successfully."}
    } catch (error) {
      throw new Error(`${ERROR_MESSAGES.REQUEST_FAILED(url, handleAxiosError(error))}`)
    }
  }
}
