import {AxiosError, AxiosResponse} from "axios"

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
export function extractData<T>(response: AxiosResponse<T>): T {
  const data = response.data
  if ((data as any).isSuccess === true) {
    return (data as any).data
  }
  return data
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
