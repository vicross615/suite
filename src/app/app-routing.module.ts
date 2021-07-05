import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from "./app/component/auth/authentication/signup/signup.component";
import {LoginComponent} from "./app/component/auth/authentication/login/login.component";
import {AuthenticationComponent} from "./app/component/auth/authentication/authentication.component";
import {SuiteComponent} from "./app/suite/suite.component";
import {FXOnboardComponent} from "./app/suite/fxonboard/fxonboard.component";
import {HomeComponent} from "./app/suite/home/home.component";
import {ReachComponent} from "./app/component/reach/reach.component";
import {ContactComponent} from "./app/component/reach/contact/contact.component";
import {EmailComponent} from "./app/component/reach/email/email.component";
import {SmsComponent} from "./app/component/reach/sms/sms.component";
const routes: Routes = [
  { path: "",redirectTo: 'cube', pathMatch: "full"},
  { path: 'auth',component: AuthenticationComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: "full"},
    { path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
  ]},
  { path: "suite", component: SuiteComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: "full"},
    { path: 'home', component: HomeComponent},
    { path: 'fx_onboard', component: FXOnboardComponent}
    ]
  },
  {path: 'reach', component:  ReachComponent, children: [
    { path: 'sms', component: SmsComponent, pathMatch: "full"},
    { path: 'email', component: EmailComponent},
    { path: 'contact', component: ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

