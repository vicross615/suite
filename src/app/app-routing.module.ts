import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutlookComponent } from "./outlook/outlook.component";
import { Office365Component } from './office365/office365.component';
const routes: Routes = [
  { path: "",redirectTo: 'outlook', pathMatch: "full"},
  { path: "outlook",component: OutlookComponent},
  { path: "office365", component: Office365Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
