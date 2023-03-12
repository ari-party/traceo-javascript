import { BrowserInfoType } from "./browser";
import { Dictionary } from "./client";
import { Trace } from "./stacktrace";

export interface ITransport {
  request(): Promise<void>;
}

export type RequestOptions<T> = {
  body: T;
  headers: Dictionary<string>;
  url: string;
  protocol: string; //"http" | "https"
  port: string | number;
  host: string;
  method: "POST" | "GET" | "PATCH" | "DELETE";
};

export type BrowserIncidentType = {
  type: string;
  message: string;
  stack: string;
  browser: BrowserInfoType;
  traces: Trace[];
};