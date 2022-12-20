import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { LoginModule } from './login/login.module';
import { ProductModule } from './product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    AboutModule,
    HomepageModule,
    LoginModule,
    ProductModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
