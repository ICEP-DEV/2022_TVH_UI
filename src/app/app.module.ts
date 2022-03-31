import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Injectable } from '@angular/core';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { TestingComponent } from './testing/testing.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RewardsComponent,
    GalleryComponent,
    LoginAdminComponent,
    RegistrationFormComponent,
    AdminboardComponent,
    TestingComponent,
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


