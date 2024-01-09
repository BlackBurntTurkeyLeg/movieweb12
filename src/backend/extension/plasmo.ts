export interface ExtensionBaseRequest {
  requestDomain: string;
}

export type ExtensionBaseResponse<T = object> =
  | ({
      success: true;
    } & T)
  | {
      success: false;
      error: string;
    };

export type ExtensionHelloResponse = ExtensionBaseResponse<{
  version: string;
}>;

export interface ExtensionMakeRequest extends ExtensionBaseRequest {
  url: string;
  method: string;
  headers?: Record<string, string>;
  body?: string | FormData | URLSearchParams | Record<string, any>;
}

export type ExtensionMakeRequestResponse = ExtensionBaseResponse<{
  status: number;
  requestHeaders: Record<string, string>;
  responseHeaders: Record<string, string>;
  data: string | Record<string, unknown>;
}>;

export interface ExtensionPrepareStreamRequest extends ExtensionBaseRequest {
  ruleId: number;
  targetDomains: string[];
  requestHeaders?: Record<string, string>;
  responseHeaders?: Record<string, string>;
}

export interface ExtensionHelloReply {
  version: string;
}

export interface MmMetadata {
  hello: {
    req: ExtensionBaseRequest;
    res: ExtensionHelloResponse;
  };
  makeRequest: {
    req: ExtensionMakeRequest;
    res: ExtensionMakeRequestResponse;
  };
  prepareStream: {
    req: ExtensionPrepareStreamRequest;
    res: ExtensionBaseResponse;
  };
}

interface MpMetadata {}

declare module "@plasmohq/messaging" {
  interface MessagesMetadata extends MmMetadata {}
  interface PortsMetadata extends MpMetadata {}
}