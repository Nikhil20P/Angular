import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacilityDetailsComponent } from './components/login/New Application/facility-details/facility-details.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ProjectAndEquityDetailsComponent } from './project-and-equity-details/project-and-equity-details.component';
import { SecurityDetailsComponent } from './security-details/security-details.component';
import { ProjRelatedDocComponent } from './proj-related-doc/proj-related-doc.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    SignUpComponent,
    DashboardComponent,
    FacilityDetailsComponent,
    MyProfileComponent,
    ChangePassComponent,
    ProjectAndEquityDetailsComponent,
    SecurityDetailsComponent,
    ProjRelatedDocComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule, 
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
