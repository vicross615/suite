import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppSidenavComponent } from './app/component/app-sidenav/app-sidenav.component';
import { DashboardComponent } from './app/component/dashboard/dashboard.component';
import { LoginComponent } from './app/component/auth/authentication/login/login.component';
import { SignupComponent } from './app/component/auth/authentication/signup/signup.component';
import {AuthenticationComponent} from './app/component/auth/authentication/authentication.component';
import { SuiteComponent } from './app/suite/suite.component';
import { HomeComponent } from './app/suite/home/home.component';
import { FXOnboardComponent } from './app/suite/fxonboard/fxonboard.component';
import { UploadFileComponent } from './app/component/upload-file/upload-file.component';
import { ReachComponent } from './app/component/reach/reach.component';
import { SmsComponent } from './app/component/reach/sms/sms.component';
import { EmailComponent } from './app/component/reach/email/email.component';
import { ContactComponent } from './app/component/reach/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidenavComponent,
    DashboardComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    SuiteComponent,
    HomeComponent,
    FXOnboardComponent,
    UploadFileComponent,
    ReachComponent,
    SmsComponent,
    EmailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
