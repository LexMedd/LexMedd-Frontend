import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPlansComponent } from './ui/components/subscription-plans/subscription-plans.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SubscriptionPlansComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [SubscriptionPlansComponent]
})
export class SubscriptionPlansModule {}
