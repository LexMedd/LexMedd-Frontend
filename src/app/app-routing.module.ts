import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListRequestComponent} from './request-service/components/list-request/list-request.component';
import {RequestHistoryComponent} from './request-service/components/request-history/request-history.component';
import {RequestComponent} from './request-service/components/request/request.component';

export const routes: Routes = [

  //user
  { path: '', redirectTo: 'request/trip/new', pathMatch: 'full' },

  //aqui se agrega la solicitud
  {path:'request/trip/new', component: RequestComponent},

  //aqui se puede ver el historial de solicitudes (reuelto o pendiente) ya esta
  {path:'list-history-request', component:RequestHistoryComponent},

  //admin
  //se puede visualizar la lista de solicitudes y aceptar o rechazar
  {path:'list-trip', component:ListRequestComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
