import { BrowserClient, TraceoOptions, VERSION } from "@traceo-sdk/browser";

export class Client extends BrowserClient {
  constructor(options: TraceoOptions) {
    super(options);

    this.options = options;
    this.headers = {
      "x-sdk-name": "react",
      "x-sdk-version": VERSION,
      "x-sdk-key": this.options.apiKey
    };
  }

  public postInitSDK(): void {}
}
