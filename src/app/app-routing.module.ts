import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponent } from './cube/cube.component';
import { OutlookComponent } from "./outlook/outlook.component";
import { Office365Component } from './office365/office365.component';
import { HomeComponent } from './cube/views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { HolidayComponent } from './views/holiday/holiday.component';
import { MigrationComponent } from './views/migration/migration.component';
import { NewsComponent } from './views/news/news.component';
import { PartnershipsComponent } from './views/partnerships/partnerships.component';
import { StudyAbroadComponent } from './views/study-abroad/study-abroad.component';
import { AboutTheTestComponent } from './views/about-the-test/about-the-test.component';
import { TempPageComponent } from './cube/auxiliary/temp-page/temp-page.component';
const routes: Routes = [
  { path: "",redirectTo: 'cube', pathMatch: "full"},
  { path: "cube", component: CubeComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: "full"},
    {path: 'home', component: HomeComponent},
    { path: 'aboutus', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'holiday', component: HolidayComponent},
    {path: 'migration', component: MigrationComponent},
    {path: 'news', component: NewsComponent},
    {path: 'partnership', component: PartnershipsComponent},
    {path: 'studyabroad', component: StudyAbroadComponent},
    {path: 'aboutthetest', component: AboutTheTestComponent},
    {path: "temp", component: TempPageComponent}
  ]
  },
  { path: "outlook",component: OutlookComponent},
  { path: "office365", component: Office365Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
