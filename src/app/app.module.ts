import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAccessModule } from './subscription-plans/infrastructure/data-access/data-access.module';
import { MatCardModule } from '@angular/material/card';
import { SubscriptionPlansModule } from './subscription-plans/subscription-plans.module';
import { SubscriptionPlanRepository } from './subscription-plans/domain/repositories/subscription-plan.repository';

import {SubscriptionPlanRepositoryImpl} from './subscription-plans/infrastructure/repositories/subscription-plan.repository.repository.impl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    DataAccessModule,
    CommonModule,
    MatCardModule,
    SubscriptionPlansModule,

  ],
  providers: [
    { provide: 'SubscriptionPlanRepository', useClass: SubscriptionPlanRepositoryImpl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
