import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:"", component:LoginComponent } ,
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
