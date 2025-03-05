import axios, {AxiosInstance} from "axios"

export const createHttpClient = (baseUrl: string): AxiosInstance => {
  return axios.create({baseURL: baseUrl})
}
