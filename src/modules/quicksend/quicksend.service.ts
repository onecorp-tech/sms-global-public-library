import {AxiosInstance} from "axios"
import {IQuickSendRequest} from "./interfaces/quicksend.interface"
import {ERROR_MESSAGES, handleAxiosError, HTTP_METHODS, httpRequest, QUICK_SEND_URLS} from "../../utils"

export class QuickSendService {
  constructor(private httpClient: AxiosInstance, private secret: string) {}

  private async sendRequest<T>(url: string, httpMethod: HTTP_METHODS, request: any): Promise<void> {
    const response = await httpRequest(this.httpClient, httpMethod, url, request, this.secret)
    if (response.status !== 201) {
      throw new Error(ERROR_MESSAGES.REQUEST_FAILED(url, response.statusText))
    }
  }

  public async send(request: IQuickSendRequest): Promise<{message: string}> {
    await this.sendRequest<void>(QUICK_SEND_URLS.SEND, HTTP_METHODS.POST, request)
    return {message: "Message has been sent successfully."}
  }
}
