import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductJaminanComponent } from './product-jaminan/product-jaminan.component';
import { ProductKonsultanComponent } from './product-konsultan/product-konsultan.component';

const routes:Routes = [
  {path:"", component:ProductComponent } ,
]

@NgModule({
  declarations: [
    ProductComponent,
    ProductJaminanComponent,
    ProductKonsultanComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductComponent,
    ProductJaminanComponent,
    ProductKonsultanComponent
  ]
})
export class ProductModule { }
