import { Component, Inject, OnInit } from '@angular/core';
import { UNIQUE_SDK, UNIQUE_SDK_PROVIDER, Sdk } from "./unique.sdk.provider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UNIQUE_SDK_PROVIDER],
})
export class AppComponent implements OnInit {
  constructor(@Inject(UNIQUE_SDK) public sdkPromise: Promise<Sdk>) {}

  title = 'angular-sample';

  async ngOnInit(): Promise<void> {
    const sdk = await this.sdkPromise;

    alert(JSON.stringify(sdk.chainProperties(), null ,2));
  }
}
