import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatDivider } from "@angular/material/divider";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { UserApiService } from "../../services/user-api.service";
import { User } from "../../model/user";  // Importa lo necesario para Reactive Forms

@Component({
  selector: 'app-register',
  /*standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatDivider,
    MatRadioButton,
    MatRadioGroup,
    MatButton,
    MatInput,
    RouterLink,
    MatLabel
    // Asegúrate de usar ReactiveFormsModule
  ],*/
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Definimos el FormGroup y los controles
  registerForm = new FormGroup({
    selectedRole: new FormControl(''),  // FormControl para el role

  });

  userApi = inject(UserApiService);


  constructor(private router: Router) { }

  onSubmit() {
    const selectedRole = this.registerForm.get('selectedRole')?.value;  // Obtén el valor del FormControl
    if (selectedRole === 'abogado') {
      alert("abogado");

      this.router.navigate(['/lawyer-profile']);  // Redirigir si es abogado
    } else if (selectedRole === 'doctor') {
      alert("doctor");
      this.router.navigate(['/doctor-profile']);  // Redirigir si es doctor
    } else {
      alert('Please select a role before continuing.');
    }
  }
}
