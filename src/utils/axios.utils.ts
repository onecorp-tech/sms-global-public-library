import {AxiosError, AxiosInstance, AxiosResponse} from "axios"
import {ERROR_MESSAGES, HTTP_METHODS} from "./constants"

/**
 * Check if the error is an Axios error.
 * @param error - The error to check.
 * @returns True if the error is an Axios error, false otherwise.
 */
export function isAxiosError(error: any): error is AxiosError {
  return error.isAxiosError
}

/**
 * Safely extract data from an Axios response.
 * @param response - The Axios response.
 * @returns The extracted data.
 */
export function extractData<T>(response: AxiosResponse<T | {data: T}>): T {
  const data = (response.data as any).data
  return data !== undefined ? data : (response as any).data
}

/**
 * Handle Axios error and provide a consistent error message.
 * @param error - The Axios error.
 * @returns The error message.
 */
export function handleAxiosError(error: any): string {
  if (isAxiosError(error) && error.response && error.response.data) {
    return (error.response.data as any).message || error.response.data || "Unknown error"
  } else {
    return error.message || "Unknown error"
  }
}

/**
 * Make an HTTP request with the specified method.
 * @param httpClient - The Axios instance.
 * @param method - The HTTP method.
 * @param url - The URL to request.
 * @param data - The request data.
 * @param secret - The authorization secret.
 * @returns The response data.
 */
export async function httpRequest(httpClient: AxiosInstance, method: HTTP_METHODS, url: string, data: any, secret: string): Promise<AxiosResponse<any>> {
  try {
    return await httpClient.request({
      method,
      url,
      data,
      headers: {Authorization: `Bearer ${secret}`}
    })
  } catch (error) {
    throw new Error(`${ERROR_MESSAGES.REQUEST_FAILED(url)}: ${handleAxiosError(error)}`)
  }
}
