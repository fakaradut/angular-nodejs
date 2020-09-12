import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { RestrictedComponent } from './Components/restricted/restricted.component';
import { RegisterService } from './Services/register.service';
import { LoginService } from './Services/login.service';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RestrictedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [RegisterService, LoginService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
