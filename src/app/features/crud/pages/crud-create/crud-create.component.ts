import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from '../../components/user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-crud-create',
  standalone: true,
  imports: [UserRegistrationFormComponent],
  templateUrl: './crud-create.component.html',
  styleUrl: './crud-create.component.scss'
})
export class CrudCreateComponent {

}
