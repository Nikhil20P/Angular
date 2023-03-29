import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { LoginComponent } from './components/login/login.component';
import { FacilityDetailsComponent } from './components/login/New Application/facility-details/facility-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProjRelatedDocComponent } from './proj-related-doc/proj-related-doc.component';
import { ProjectAndEquityDetailsComponent } from './project-and-equity-details/project-and-equity-details.component';
import { SecurityDetailsComponent } from './security-details/security-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'' , component: LoginComponent},
  {path:'dashboard', component:DashboardComponent,


  children: [
    {path:'facility-detail', component:FacilityDetailsComponent,

    children:[
      
    ]

  
  },
    {path:'my-profile', component:MyProfileComponent},
    {path: 'change-pass', component:ChangePassComponent},
    {path:'project-equity', component:ProjectAndEquityDetailsComponent},
    {path:'security-detail', component:SecurityDetailsComponent},
    {path:'proj-related', component:ProjRelatedDocComponent}
    
    
  ]
},
  
   
  { path:'forgot-pass', component: ForgotPassComponent },
  {path:'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
