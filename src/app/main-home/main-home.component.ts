import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-home',
  imports: [RouterLink],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent {

}
