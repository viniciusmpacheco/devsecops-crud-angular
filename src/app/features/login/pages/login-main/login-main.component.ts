import { Component } from '@angular/core';
import { UserLoginFormComponent } from '../../components/user-login-form/user-login-form.component';

@Component({
  selector: 'app-login-main',
  standalone: true,
  imports: [UserLoginFormComponent],
  templateUrl: './login-main.component.html',
  styleUrl: './login-main.component.scss'
})
export class LoginMainComponent {

}
