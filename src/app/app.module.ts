import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {MdSidenavModule} from '@angular/material';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdSidenavModule,
    CoreModule,
    SharedModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
