import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
// import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BorrowingHistoryComponent } from './borrowing-history/borrowing-history.component';
import { ProfileComponent } from './profile/profile.component';
import { FinesComponent } from './fines/fines.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainHomeComponent } from './main-home/main-home.component';

const routes: Routes = [

  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'member', component: MemberComponent },
    { path: '', component: MainHomeComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'history', component: BorrowingHistoryComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'fines', component: FinesComponent }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
