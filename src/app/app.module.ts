import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ParticipantComponent } from './participant/participant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PublicAnnoucementComponent } from './public-annoucement/public-annoucement.component';
import { LayoutComponent } from './layout/layout.component';
import { TeamComponent } from './team/team.component';
import { DialogComponent } from './dialog/dialog.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { PublicRewardsComponent } from './public-rewards/public-rewards.component';
import { RulesComponent } from './rules/rules.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AnnouncementComponent } from './announcement/announcement.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CKEditorModule } from 'ng2-ckeditor';
import { A11yModule } from '@angular/cdk/a11y';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RewardsComponent,
    GalleryComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    UserLoginComponent,
    SignUpComponent,
    LayoutComponent,
    ParticipantComponent,
    DashboardComponent,
    SidebarComponent,
    PublicAnnoucementComponent,
    TeamComponent,
    DialogComponent,
    LogoutComponent,
    FooterComponent,
    PublicRewardsComponent,
    RulesComponent,
    AdminHomeComponent,
    AnnouncementComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFileUploaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCommonModule,
    MatButtonModule,
    LayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    CKEditorModule,
    A11yModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
