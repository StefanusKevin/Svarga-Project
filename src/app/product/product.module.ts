import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
