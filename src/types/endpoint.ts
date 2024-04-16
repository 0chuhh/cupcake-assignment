import { AxiosResponse } from "axios";

export type EndpointType<T> = (...params:unknown[]) => Promise<AxiosResponse<T>>