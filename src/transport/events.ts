import { CatchType, ExceptionPriority } from "./enums";
import { KlepperRequest } from "./http";
import { Environment } from "./types";

export interface EventResponse {
  statusCode: number;
  statusMessage?: string;
  body?: string;
}

export interface RequestEvent {
  request: KlepperRequest;
  response: EventResponse;
  date: number;
}

export interface ErrorEvent {
  name: string;
  stack: string;
  message?: string;
  date: number;
}

export interface KlepperEvent {
  projectId?: string;
  type: string;
  message: string;
  date: number;
  stack: string;
  requestData?: KlepperRequest;
  catchType?: CatchType;
  options?: {
    priority?: ExceptionPriority;
    tag?: string;
  };
  sdk?: string;
  env?: Environment;
  version?: string;
}

export interface KlepperConnectionEvent {
  version?: string;
  env: Environment;
}
