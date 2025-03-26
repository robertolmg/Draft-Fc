// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/theme/shared/_helpers/error.interceptor';
import { BasicAuthInterceptor } from 'src/app/theme/shared/_helpers/basic-auth.interceptor';
import { BreadcrumbComponent } from './theme/shared/components/breadcrumb/breadcrumb.component';

// third party
import { ToastrModule } from 'ngx-toastr';

// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbModule,
    BreadcrumbComponent,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
