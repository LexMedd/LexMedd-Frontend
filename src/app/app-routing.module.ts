import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LawyerListComponent} from "./public/pages/lawyer-list/lawyer-list.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ProfileComponent} from "./public/pages/profile/profile.component";
import {EditProfileComponent} from "./public/pages/edit-profile/edit-profile.component";


const routes: Routes = [
  { path: 'abogados', component: LawyerListComponent },
  {path: 'perfil', component:ProfileComponent},
  {path: 'editar-perfil', component:EditProfileComponent},
  { path: '', redirectTo: 'abogados', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
