import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './iam/components/login/login.component';  // Asegúrate de importar el componente
import { RegisterComponent } from './iam/components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Ruta para el componente de login
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirigir a la ruta de login por defecto
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
