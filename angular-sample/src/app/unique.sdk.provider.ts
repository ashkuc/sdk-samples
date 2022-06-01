import { InjectionToken } from '@angular/core';
import { Sdk } from "@unique-nft/sdk";

export { Sdk } from '@unique-nft/sdk';

export const UNIQUE_SDK = new InjectionToken<string>("SDK_PROVIDER");

export const UNIQUE_SDK_PROVIDER = {
  provide: UNIQUE_SDK,
  useFactory: async () => {
    return await Sdk.create({
      chainWsUrl: 'wss://ws-quartz-dev.unique.network',
      ipfsGatewayUrl: ''
    })
  },
};
