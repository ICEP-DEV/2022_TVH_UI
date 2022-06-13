import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AdminComponent } from './admin/admin.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LayoutComponent } from './layout/layout.component';
import { ParticipantComponent } from './participant/participant.component';
import { RewardComponent } from './reward/reward.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnnoucementComponent } from './annoucement/annoucement.component';
import { PublicAnnoucementComponent } from './public-annoucement/public-annoucement.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component'; 
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { RulesComponent } from './rules/rules.component';
import { PublicTeamsComponent } from './public-teams/public-teams.component';
import { PostComponent } from './post/post.component';
import { PublicGalleryComponent } from './public-gallery/public-gallery.component';
import {AnnouncementlistComponent} from './announcementlist/announcementlist.component'


////testing.....

import { TestComponent } from './test/test.component';
import { LogoutComponent } from './logout/logout.component';
=======
import { LoginFormComponent } from './login-form/login-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { ParticipantComponent } from './participant/participant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardComponent } from './reward/reward.component';
import { AnnoucementComponent } from './annoucement/annoucement.component';
import { PublicAnnoucementComponent } from './public-annoucement/public-annoucement.component';
import { PublicTeamsComponent } from './public-teams/public-teams.component';
import { PublicGalleryComponent } from './public-gallery/public-gallery.component';
import { RulesComponent } from './rules/rules.component';

>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c









const routes: Routes = [
<<<<<<< HEAD
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "rewards", component:RewardsComponent},
  {path: "gallery", component:GalleryComponent},
  {path:"login-admin", component:LoginAdminComponent},
  {path:"admin", component:AdminComponent},
  {path:"registration-form",component:RegistrationFormComponent},
  {path:"adminboard",component:AdminboardComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"layout",component:LayoutComponent},
  {path:"participant",component:ParticipantComponent},
  {path:"reward",component:RewardComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"annoucement",component:AnnoucementComponent},
  {path:"public-annoucement",component:PublicAnnoucementComponent},
  {path:"footer",component:FooterComponent},
  {path:"dialog",component:DialogComponent},
  {path:"dialog/edit/:id",component:DialogComponent}, ////for editing team
  {path:"team",component:TeamComponent},
  {path:"teams",component:TeamsComponent},
  {path:"rules",component:RulesComponent},
  {path:"public-teams",component:PublicTeamsComponent},
  {path:"logout",component:LogoutComponent},
  {path:"post",component:PostComponent},
  {path:"public-gallery",component:PublicGalleryComponent},
  {path:"announcementlist",component:AnnouncementlistComponent},
  

  //Testing
  {path:"test",component:TestComponent},







  
=======

  {path: "",component:HomeComponent},
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
  {path: "reward", component:RewardComponent},
  {path: "annoucement", component:AnnoucementComponent},
  {path: "public-annoucement", component:PublicAnnoucementComponent},
  {path: "public-teams", component:PublicTeamsComponent},
  {path: "public-gallery", component:PublicGalleryComponent},
  {path: "rules", component:RulesComponent},

>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
