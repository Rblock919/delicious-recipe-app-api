import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './star/star.component';
import { Toastr, TOASTR_TOKEN } from 'src/app/shared/toastr.service';
import { JQ_TOKEN } from 'src/app/shared/jQuery.service';
import { AuthInterceptorService } from './../services/auth-interceptor.service';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  exports: [
    StarComponent,
  ]
})
export class SharedModule { }
