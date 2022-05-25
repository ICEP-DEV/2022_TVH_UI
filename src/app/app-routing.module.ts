import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { ParticipantComponent } from './participant/participant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { PublicAnnoucementComponent } from './public-annoucement/public-annoucement.component';
import { TeamComponent } from './team/team.component';
import { DialogComponent } from './dialog/dialog.component';
import { PublicRewardsComponent } from './public-rewards/public-rewards.component';
import { RulesComponent } from './rules/rules.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "rewards", component:RewardsComponent},
  {path: "gallery", component:GalleryComponent},
  {path: "registration-form", component:RegistrationFormComponent},
  {path: "login-form", component:LoginFormComponent},
  {path: "user-login",component:UserLoginComponent},
  {path: "sign-up", component:SignUpComponent},
  {path: "layout", component:LayoutComponent},
  {path: "participant", component:ParticipantComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "announcement", component:AnnouncementComponent},
  {path: "public-annoucement", component:PublicAnnoucementComponent},
  {path: "team", component:TeamComponent},
  {path: "dialog", component:DialogComponent},
  {path: "public-rewards", component: PublicRewardsComponent},
  {path: "rules", component: RulesComponent},
  {path: "admin-home", component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
