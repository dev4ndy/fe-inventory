import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS, HttpHandler } from '@angular/common/http';
import { ApplicationHttp } from './common/application-http';
import { MessageServer } from './interceptors/message-server.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApplicationHttp,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MessageServer,
          multi: true,
        }]
    };
  }
}
