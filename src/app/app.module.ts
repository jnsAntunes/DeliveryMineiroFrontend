import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingModule } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    Error404PageComponent,
    RegistroPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
