import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: LoginComponent }
];

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}